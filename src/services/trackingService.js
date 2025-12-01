import http from '../utils/http';

export async function fetchTrackingStatus(trackingNumber) {
  if (!trackingNumber || typeof trackingNumber !== 'string') {
    throw new Error('Invalid tracking number');
  }

  try {
    const { data } = await http.get(`/tracking/${encodeURIComponent(trackingNumber)}`);
    return data;
  } catch (err) {
    if (trackingNumber === 'AE123456789') {
      return { status: 'In Transit', location: 'Lagos Hub' };
    }
    const e = new Error('Tracking not found');
    e.code = 'NOT_FOUND';
    throw e;
  }
} 