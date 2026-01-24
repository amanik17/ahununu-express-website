# Tracking API Integration Guide

## Overview
The tracking system has been integrated to fetch real-time data from your backend API. The system automatically transforms API responses to match the UI format.

## API Endpoint Required

Your backend should provide:

```
GET /api/tracking/:trackingNumber
```

## Expected API Response Formats

The system supports multiple response formats. Here are examples:

### Format 1: Full Format (Recommended)
```json
{
  "status": "In Transit",
  "estimatedDelivery": "2025-12-03",
  "currentLocation": "Addis Ababa Distribution Center",
  "progress": 60,
  "timeline": [
    {
      "status": "Order Placed",
      "location": "Addis Ababa",
      "date": "2025-12-01 09:30",
      "completed": true,
      "icon": "📦"
    },
    {
      "status": "Package Picked Up",
      "location": "Addis Ababa Hub",
      "date": "2025-12-01 14:20",
      "completed": true,
      "icon": "🚚"
    },
    {
      "status": "In Transit",
      "location": "Addis Ababa Distribution Center",
      "date": "2025-12-02 08:15",
      "completed": true,
      "icon": "📍"
    }
  ],
  "packageDetails": {
    "weight": "2.5 kg",
    "dimensions": "30x20x15 cm",
    "service": "Express Delivery",
    "sender": "Addis Ababa",
    "recipient": "Bahir Dar"
  }
}
```

### Format 2: Alternative Field Names
```json
{
  "currentStatus": "In Transit",
  "estimated_delivery": "2025-12-03",
  "current_location": "Addis Ababa Distribution Center",
  "history": [
    {
      "status": "Order Placed",
      "location": "Addis Ababa",
      "timestamp": "2025-12-01T09:30:00Z",
      "completed": true
    }
  ],
  "package_details": {
    "weight_kg": 2.5,
    "length": 30,
    "width": 20,
    "height": 15,
    "service_type": "Express Delivery",
    "from": "Addis Ababa",
    "to": "Bahir Dar"
  }
}
```

### Format 3: Events Array
```json
{
  "status": "In Transit",
  "location": "Addis Ababa Distribution Center",
  "events": [
    {
      "event_type": "Order Placed",
      "place": "Addis Ababa",
      "created_at": "2025-12-01T09:30:00Z"
    },
    {
      "event_type": "Package Picked Up",
      "place": "Addis Ababa Hub",
      "created_at": "2025-12-01T14:20:00Z"
    }
  ]
}
```

## Status Values

The system recognizes these status values:
- `Order Placed`
- `Processing`
- `Package Picked Up`
- `In Transit`
- `Out for Delivery`
- `Delivered`
- `Pending`
- `Shipped`
- `In Warehouse`
- `Customs`

## Configuration

### 1. Set API Base URL

Create or update `.env` file:

```env
REACT_APP_API_BASE_URL=https://api.yourdomain.com/api
```

Or for local development:
```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

### 2. CORS Configuration

Make sure your backend allows requests from your frontend domain:

```javascript
// Example Express.js CORS config
app.use(cors({
  origin: ['http://localhost:8080', 'https://yourdomain.com'],
  credentials: true
}));
```

## Error Handling

The system handles these error scenarios:

1. **404 Not Found**: Returns user-friendly "Tracking number not found" message
2. **Network Errors**: Shows "Network error. Please check your connection."
3. **API Errors**: Displays the error message from the API response
4. **Invalid Tracking Number**: Validates input before making API call

## Demo Mode

For testing without a backend, the system falls back to mock data for:
- `AWB123456789`
- `AWB00000000`

## Testing

### Test with cURL

```bash
curl -X GET "https://api.yourdomain.com/api/tracking/AWB123456789" \
  -H "Content-Type: application/json"
```

### Test in Browser Console

```javascript
// Check if API is configured
console.log(process.env.REACT_APP_API_BASE_URL);

// Test API call
import { trackingAPI } from './services/api';
const result = await trackingAPI.getStatus('AWB123456789');
console.log(result);
```

## Timeline Transformation

The system automatically:
- Maps different field names (`timeline`, `history`, `events`)
- Formats dates to readable strings
- Adds default icons if not provided
- Calculates `completed` status based on position in array
- Handles missing fields gracefully

## Package Details Transformation

Automatically handles:
- Weight in kg or as string
- Dimensions as string or separate length/width/height
- Service type variations
- Sender/recipient field name variations

## Progress Calculation

If `progress` is not provided, it's calculated based on status:
- Order Placed: 10%
- Processing: 20%
- Package Picked Up: 30%
- In Transit: 60%
- Out for Delivery: 80%
- Delivered: 100%

## Support

If you encounter issues:
1. Check browser console for API errors
2. Verify `REACT_APP_API_BASE_URL` is set correctly
3. Test API endpoint directly with Postman/curl
4. Check CORS configuration on backend
5. Verify API response format matches one of the supported formats
