import React, { useState } from 'react';
import { fetchTrackingStatus } from '../services/trackingService';
import Spinner from './Spinner';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await fetchTrackingStatus(trackingNumber.trim());
      setResult(data);
    } catch (err) {
      setError(err?.message || 'Failed to fetch tracking info');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Track Your Shipment</h1>
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-input"
              placeholder="Enter tracking number (try: AWB123456789)"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <button type="submit" className="btn btn-primary" disabled={!trackingNumber || isLoading}>
              {isLoading ? 'Tracking...' : 'Track Package'}
            </button>
          </form>
          <div style={{ marginTop: '1rem', minHeight: 64 }}>
            {isLoading && <Spinner />}
            {!isLoading && error && <p>❌ {error}</p>}
            {!isLoading && !error && result && (
              <div>
                <p>✅ Status: {result.status}</p>
                <p>📍 Location: {result.location}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
