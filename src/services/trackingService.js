import { trackingAPI } from './api';

/**
 * Transform API response to match UI format
 * Handles different API response structures
 */
function transformTrackingData(apiData, trackingNumber) {
  // If API already returns the expected format, return as is
  if (apiData.status && apiData.timeline) {
    return apiData;
  }

  // Transform from common API formats
  const transformed = {
    status: apiData.status || apiData.currentStatus || apiData.state || 'Unknown',
    estimatedDelivery: apiData.estimatedDelivery || apiData.estimated_delivery || apiData.eta || null,
    currentLocation: apiData.currentLocation || apiData.current_location || apiData.location || 'Unknown',
    progress: apiData.progress || calculateProgress(apiData.status || apiData.currentStatus),
    timeline: transformTimeline(apiData.timeline || apiData.history || apiData.events || []),
    packageDetails: transformPackageDetails(apiData.packageDetails || apiData.package_details || apiData.details || {}),
    trackingNumber: trackingNumber
  };

  return transformed;
}

/**
 * Transform timeline/events array to UI format
 */
function transformTimeline(events) {
  if (!Array.isArray(events) || events.length === 0) {
    return [];
  }

  const statusIcons = {
    'Order Placed': '📦',
    'Package Picked Up': '🚚',
    'In Transit': '📍',
    'Out for Delivery': '🚛',
    'Delivered': '✅',
    'Pending': '⏳',
    'Processing': '⚙️',
    'Shipped': '📤',
    'In Warehouse': '🏢',
    'Customs': '🛃'
  };

  return events.map((event, index) => {
    const status = event.status || event.state || event.event_type || 'Unknown';
    const icon = statusIcons[status] || '📋';
    
    return {
      status: status,
      location: event.location || event.current_location || event.place || 'Unknown',
      date: formatDate(event.date || event.timestamp || event.created_at || event.time),
      completed: event.completed !== undefined ? event.completed : index < events.length - 1,
      icon: event.icon || icon
    };
  });
}

/**
 * Transform package details object
 */
function transformPackageDetails(details) {
  return {
    weight: details.weight || details.weight_kg ? `${details.weight_kg} kg` : 'N/A',
    dimensions: details.dimensions || 
                (details.length && details.width && details.height 
                  ? `${details.length}x${details.width}x${details.height} cm` 
                  : 'N/A'),
    service: details.service || details.service_type || details.shipping_method || 'Standard',
    sender: details.sender || details.sender_name || details.from || 'N/A',
    recipient: details.recipient || details.recipient_name || details.to || 'N/A',
    trackingNumber: details.trackingNumber || details.tracking_number || 'N/A'
  };
}

/**
 * Calculate progress percentage based on status
 */
function calculateProgress(status) {
  const statusProgress = {
    'Order Placed': 10,
    'Processing': 20,
    'Package Picked Up': 30,
    'In Transit': 60,
    'Out for Delivery': 80,
    'Delivered': 100,
    'Pending': 5,
    'Shipped': 50,
    'In Warehouse': 40
  };

  return statusProgress[status] || 0;
}

/**
 * Format date string
 */
function formatDate(dateString) {
  if (!dateString) return 'N/A';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (e) {
    return dateString;
  }
}

/**
 * Fetch tracking status from API
 * @param {string} trackingNumber - The tracking number to look up
 * @returns {Promise<Object>} Transformed tracking data
 */
export async function fetchTrackingStatus(trackingNumber) {
  if (!trackingNumber || typeof trackingNumber !== 'string') {
    throw new Error('Invalid tracking number');
  }

  const trimmedNumber = trackingNumber.trim();

  try {
    // Try to fetch from API
    const apiData = await trackingAPI.getStatus(trimmedNumber);
    
    // Transform the response to match UI format
    return transformTrackingData(apiData, trimmedNumber);
  } catch (err) {
    // If API fails and it's a demo tracking number, return mock data
    if (trimmedNumber === 'AWB123456789' || trimmedNumber === 'AWB00000000') {
      console.warn('API unavailable, using mock data for demo');
      return getMockTrackingData(trimmedNumber);
    }

    // Re-throw the error with a user-friendly message
    const errorMessage = err.response?.data?.message || 
                        err.message || 
                        'Tracking number not found. Please check and try again.';
    
    const error = new Error(errorMessage);
    error.code = err.response?.status === 404 ? 'NOT_FOUND' : 'API_ERROR';
    throw error;
  }
}

/**
 * Get mock tracking data for demo/testing
 */
function getMockTrackingData(trackingNumber) {
  return {
    status: 'In Transit',
    estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    currentLocation: 'Addis Ababa Distribution Center',
    progress: 60,
    timeline: [
      {
        status: 'Order Placed',
        location: 'Addis Ababa',
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleString(),
        completed: true,
        icon: '📦'
      },
      {
        status: 'Package Picked Up',
        location: 'Addis Ababa Hub',
        date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toLocaleString(),
        completed: true,
        icon: '🚚'
      },
      {
        status: 'In Transit',
        location: 'Addis Ababa Distribution Center',
        date: new Date().toLocaleString(),
        completed: true,
        icon: '📍'
      },
      {
        status: 'Out for Delivery',
        location: 'Local Delivery Center',
        date: `Expected: ${new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toLocaleDateString()} 10:00`,
        completed: false,
        icon: '🚛'
      },
      {
        status: 'Delivered',
        location: 'Destination',
        date: `Expected: ${new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString()} 17:00`,
        completed: false,
        icon: '✅'
      }
    ],
    packageDetails: {
      weight: '2.5 kg',
      dimensions: '30x20x15 cm',
      service: 'Express Delivery',
      sender: 'Addis Ababa',
      recipient: 'Bahir Dar'
    },
    trackingNumber: trackingNumber
  };
}

/**
 * Fetch tracking history/timeline from API
 */
export async function fetchTrackingHistory(trackingNumber) {
  if (!trackingNumber || typeof trackingNumber !== 'string') {
    throw new Error('Invalid tracking number');
  }

  try {
    const history = await trackingAPI.getHistory(trackingNumber.trim());
    return transformTimeline(history);
  } catch (err) {
    console.error('Failed to fetch tracking history:', err);
    throw err;
  }
} 