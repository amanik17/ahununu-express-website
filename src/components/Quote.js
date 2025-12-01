import React, { useState } from 'react';

const Quote = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    item: '',
    customItem: '',
    customWeight: '0.5',
    customerType: 'regular',
    service: 'standard',
    quantity: 1
  });
  
  const [showCustomItemInput, setShowCustomItemInput] = useState(false);
  
  const [quote, setQuote] = useState(null);

  const items = [
    { id: 'document', name: 'Document', price: 400 },
    { id: 'laptop', name: 'Laptop', price: 1000 },
    { id: 'smartphone', name: 'Smart Cellphone', price: 800 },
    { id: 'watch', name: 'Watch', price: 600 },
    { id: 'desktop', name: 'Desktop Computer', price: 1500 },
    { id: 'printer_monitor', name: 'Printer/Monitor/CPU', price: 1500 },
    { id: 'eyeglass', name: 'Eye Glass', price: 600 },
    { id: 'tablet', name: 'Tablet Phone', price: 900 },
    { id: 'perfume', name: 'Perfume', price: 600 }
  ];

  const weightPricing = {
    regular: {
      '0.5': 500, '1': 500, '1.5': 500, '2': 500, '2.5': 560, '3': 620, '3.5': 680,
      '4': 740, '4.5': 800, '5': 860, '5.5': 935, '6': 1010, '6.5': 1085, '7': 1160,
      '7.5': 1235, '8': 1310, '8.5': 1385, '9': 1460, '9.5': 1535, '10': 1610,
      '10.5': 1685, '11': 1760, '11.5': 1835, '12': 1910, '12.5': 1985, '13': 2060,
      '13.5': 2135, '14': 2210, '14.5': 2285, '15': 2360
    },
    pending: {
      '0.5': 600, '1': 600, '1.5': 600, '2': 600, '2.5': 655, '3': 710, '3.5': 765,
      '4': 820, '4.5': 875, '5': 930, '5.5': 1010, '6': 1090, '6.5': 1170, '7': 1250,
      '7.5': 1330, '8': 1410, '8.5': 1490, '9': 1570, '9.5': 1650, '10': 1730,
      '11': 1890, '11.5': 1970, '12': 2050, '12.5': 2130, '13': 2210,
      '13.5': 2290, '14': 2317, '14.5': 2450, '15': 2530
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.item) {
      alert('Please select an item');
      return;
    }
    
    let selectedItem;
    let total;
    let baseRate = 0;
    
    if (formData.item === 'other') {
      if (!formData.customItem.trim()) {
        alert('Please specify the item');
        return;
      }
      selectedItem = { 
        id: 'custom', 
        name: formData.customItem,
        price: weightPricing[formData.customerType][formData.customWeight] || 0
      };
      baseRate = selectedItem.price;
      total = selectedItem.price;
    } else {
      selectedItem = items.find(item => item.id === formData.item);
      if (!selectedItem) return;
      baseRate = selectedItem.price * formData.quantity;
      total = baseRate; // Base rate is the same as total before any service charges
    }
    
    // Set the quote with details
    setQuote({ 
      price: total, 
      currency: 'ETB',
      item: selectedItem,
      quantity: formData.quantity,
      baseRate: baseRate,
      service: formData.service
    });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) || 1 : value
    }));
  };

  // Handle radio button changes
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Get Instant Quote</h1>
        <div className="grid grid-2">
          <div className="card">
            <h3>Quick Quote Calculator</h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label">Select Item</label>
                <select
                  className="form-select"
                  value={formData.item}
                  onChange={(e) => {
                    const isOther = e.target.value === 'other';
                    setShowCustomItemInput(isOther);
                    if (!isOther) {
                      setFormData({...formData, item: e.target.value, customItem: ''});
                    } else {
                      setFormData({...formData, item: 'other'});
                    }
                  }}
                  required
                >
                  <option value="">Select an item</option>
                  {items.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name} - Br {item.price.toLocaleString()}
                    </option>
                  ))}
                  <option value="other">Other (Specify below)</option>
                </select>
                {showCustomItemInput && (
                  <div style={{ marginTop: '10px' }}>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Please specify the item"
                      value={formData.customItem}
                      onChange={(e) => setFormData({...formData, customItem: e.target.value})}
                      style={{ width: '100%' }}
                      required={formData.item === 'other'}
                    />
                    <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
                      <div style={{marginBottom: '10px'}}>
                        <label className="form-label">Weight (kg)</label>
                        <select
                          className="form-select"
                          value={formData.customWeight}
                          onChange={(e) => setFormData({...formData, customWeight: e.target.value})}
                          style={{marginBottom: '10px'}}
                        >
                          {/* 0.5kg to 2kg in 0.5kg increments */}
                          {[0.5, 1, 1.5, 2].map(weight => {
                            const weightStr = weight.toString();
                            return (
                              <option key={weightStr} value={weightStr}>
                                {weight} kg
                              </option>
                            );
                          })}
                          {/* 2.5kg to 15kg in 0.5kg increments */}
                          {Array.from({length: 26}, (_, i) => 2.5 + (i * 0.5)).map(weight => {
                            const weightStr = weight.toString();
                            // Only show .0 and .5 increments
                            if (weight % 1 === 0 || weight % 1 === 0.5) {
                              return (
                                <option key={weightStr} value={weightStr}>
                                  {weight} kg
                                </option>
                              );
                            }
                            return null;
                          })}
                        </select>
                      </div>
                      <div style={{marginBottom: '10px'}}>
                        <label className="form-label">Customer Type</label>
                        <div>
                          <label style={{marginRight: '15px'}}>
                            <input
                              type="radio"
                              name="customerType"
                              checked={formData.customerType === 'regular'}
                              onChange={() => setFormData({...formData, customerType: 'regular'})}
                              style={{marginRight: '5px'}}
                            />
                            Regular
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="customerType"
                              checked={formData.customerType === 'pending'}
                              onChange={() => setFormData({...formData, customerType: 'pending'})}
                              style={{marginRight: '5px'}}
                            />
                            Pending
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="form-group">
                <label className="form-label">Quantity</label>
                <input
                  type="number"
                  min="1"
                  className="form-input"
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: parseInt(e.target.value) || 1})}
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Service Type</label>
                <div className="service-options">
                  <div style={{ padding: '8px 0' }}>Standard (Next Day)</div>
                  <input type="hidden" name="service" value="standard" />
                </div>
                <div style={{ 
                  fontSize: '0.85rem', 
                  color: '#d32f2f', 
                  marginTop: '8px',
                  padding: '8px',
                  backgroundColor: '#ffebee',
                  borderRadius: '4px',
                  borderLeft: '3px solid #f44336'
                }}>
                  <strong>Note:</strong> For Adama and Debre Birhan shipments, there is a price change. Please contact our customer service for accurate pricing.
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">From (City)</label>
                <input
                  type="text"
                  name="from"
                  className="form-input"
                  placeholder="Origin city"
                  value={formData.from}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">To (City)</label>
                <input
                  type="text"
                  name="to"
                  className="form-input"
                  placeholder="Destination city"
                  value={formData.to}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Get Quote</button>
            </form>
          </div>
          <div className="card">
            <h3>Your Quote</h3>
            {quote ? (
              <div>
                <div style={{ fontSize: '2rem', color: 'var(--primary-green)', fontWeight: 'bold' }}>
                  Br {quote.price.toLocaleString()}
                </div>
                <p>Estimated cost for {formData.service} delivery in Ethiopian Birr (ETB)</p>
                <div style={{ 
                  marginTop: '1.5rem', 
                  padding: '1.25rem', 
                  background: '#f8f9fa', 
                  borderRadius: '8px',
                  border: '1px solid #e9ecef'
                }}>
                  <h4 style={{ 
                    marginTop: 0, 
                    marginBottom: '1rem', 
                    fontSize: '1.1rem',
                    color: '#2c3e50',
                    borderBottom: '1px solid #dee2e6',
                    paddingBottom: '0.5rem'
                  }}>
                    Order Summary
                  </h4>
                  
                  <div style={{ marginBottom: '0.75rem' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem',
                      fontSize: '0.95rem'
                    }}>
                      <span>{quote.quantity} × {quote.item.name}:</span>
                      <span>Br {(quote.item.price * quote.quantity).toLocaleString()}</span>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem',
                      fontSize: '0.95rem',
                      color: '#6c757d'
                    }}>
                      <span>Base rate ({quote.service}):</span>
                      <span>Br {quote.baseRate}</span>
                    </div>
                    
                  </div>
                  
                  <div style={{ 
                    borderTop: '2px solid #e9ecef', 
                    margin: '1rem 0', 
                    paddingTop: '0.75rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    color: '#2c3e50'
                  }}>
                    <span>Total:</span>
                    <span>Br {quote.price.toLocaleString()}</span>
                  </div>
                  
                  <div style={{ 
                    marginTop: '1rem',
                    padding: '0.75rem',
                    background: '#e8f4fd',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    color: '#0d6efd',
                    border: '1px solid #b6d4fe'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span>ℹ️</span>
                      <div>
                        <div style={{ fontWeight: '500', marginBottom: '4px' }}>Delivery Estimate:</div>
                        <div>Next business day</div>
                        <div style={{ marginTop: '4px', fontSize: '0.8rem', opacity: 0.8 }}>
                          {formData.from && formData.to 
                            ? `From ${formData.from} to ${formData.to}`
                            : 'Please enter origin and destination cities'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary">Book Now</button>
              </div>
            ) : (
              <p>Fill out the form to get an instant quote</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
