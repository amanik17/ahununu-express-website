 import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedQuoteCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    selectedItems: [], // Changed from 'item' to 'selectedItems' array
    customItem: '',
    customWeight: '0.5',
    customerType: 'regular',
    service: 'standard',
    shippingOption: 'air' // Added shippingOption
  });
  const [quote, setQuote] = useState(null);
  const [errors, setErrors] = useState({});

  const items = [
    { id: 'document', name: 'Document', price: 400, icon: '📄' },
    { id: 'laptop', name: 'Laptop', price: 1000, icon: '💻' },
    { id: 'smartphone', name: 'Smart Cellphone', price: 800, icon: '📱' },
    { id: 'watch', name: 'Watch', price: 600, icon: '⌚' },
    { id: 'desktop', name: 'Desktop Computer', price: 1500, icon: '🖥️' },
    { id: 'printer_monitor', name: 'Printer/Monitor', price: 1500, icon: '🖨️' },
    { id: 'eyeglass', name: 'Eye Glass', price: 600, icon: '👓' },
    { id: 'tablet', name: 'Tablet Phone', price: 900, icon: '📱' },
    { id: 'perfume', name: 'Perfume', price: 600, icon: '🧴' }
  ];

  const weightPricing = {
    regular: { '0.5': 500, '1': 500, '1.5': 500, '2': 500, '2.5': 560, '3': 620 },
    pending: { '0.5': 600, '1': 600, '1.5': 600, '2': 600, '2.5': 655, '3': 710 }
  };

  const popularCities = ['Addis Ababa', 'Dire Dawa', 'Bahir Dar', 'Gondar', 'Mekele'];

  const validateStep = (currentStep) => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.from.trim()) newErrors.from = 'Please enter origin city';
      if (!formData.to.trim()) newErrors.to = 'Please enter destination city';
    }
    if (currentStep === 2) {
      if (formData.selectedItems.length === 0 && !formData.customItem.trim()) {
        newErrors.items = 'Please select at least one item or specify a custom one';
      }
      if (!formData.shippingOption) {
        newErrors.shippingOption = 'Please select a shipping option';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (step === 2 && formData.shippingOption === 'road') {
        // Redirect or show contact message instead of proceeding to step 3/4
        window.location.href = 'tel:8414';
        return;
      }
      if (step < 3) {
        setStep(step + 1);
      } else {
        calculateQuote();
      }
    }
  };

  const toggleItem = (itemId) => {
    setFormData(prev => {
      const isSelected = prev.selectedItems.find(i => i.id === itemId);
      if (isSelected) {
        return { ...prev, selectedItems: prev.selectedItems.filter(i => i.id !== itemId) };
      } else {
        const item = items.find(i => i.id === itemId);
        return { ...prev, selectedItems: [...prev.selectedItems, { ...item, quantity: 1 }] };
      }
    });
  };

  const updateQuantity = (itemId, delta) => {
    setFormData(prev => ({
      ...prev,
      selectedItems: prev.selectedItems.map(i => 
        i.id === itemId ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i
      )
    }));
  };

  const calculateQuote = () => {
    let total = 0;
    const itemList = [...formData.selectedItems];

    total = itemList.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (formData.customItem.trim()) {
      const customPrice = weightPricing[formData.customerType][formData.customWeight] || 500;
      total += customPrice;
      itemList.push({ id: 'custom', name: 'Custom Items', price: customPrice, quantity: 1, icon: '📦' });
    }

    setQuote({
      price: total,
      items: itemList,
      estimatedDays: '1-2'
    });
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setFormData({
      from: '',
      to: '',
      selectedItems: [],
      customItem: '',
      customWeight: '0.5',
      customerType: 'regular',
      service: 'standard',
      shippingOption: 'air'
    });
    setQuote(null);
    setErrors({});
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '6rem 2rem 4rem'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #127A6A 0%, #aed580 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem'
          }}>
            Get Instant Quote
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Calculate your shipping cost in 3 easy steps
          </p>
        </motion.div>

        {step < 4 && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '3rem'
          }}>
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <motion.div
                  animate={{
                    scale: step === s ? 1.2 : 1,
                    backgroundColor: step >= s ? '#127A6A' : '#e2e8f0'
                  }}
                  style={{
                    width: step === s ? '48px' : '40px',
                    height: step === s ? '48px' : '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: step >= s ? 'white' : '#94a3b8',
                    fontWeight: 700,
                    fontSize: step === s ? '1.2rem' : '1rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {s}
                </motion.div>
                {s < 3 && (
                  <div style={{
                    width: '60px',
                    height: '3px',
                    background: step > s ? '#127A6A' : '#e2e8f0',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease'
                  }} />
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '3rem',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
              }}
            >
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.5rem' }}>
                📍 Where are you shipping?
              </h2>
              <p style={{ color: '#64748b', marginBottom: '2rem' }}>
                Enter the origin and destination cities
              </p>

              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>
                    From (Origin City)
                  </label>
                  <input
                    type="text"
                    value={formData.from}
                    onChange={(e) => setFormData({...formData, from: e.target.value})}
                    placeholder="e.g., Addis Ababa"
                    list="cities-from"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1rem',
                      border: errors.from ? '2px solid #ef4444' : '2px solid #e2e8f0',
                      borderRadius: '12px',
                      outline: 'none'
                    }}
                  />
                  <datalist id="cities-from">
                    {popularCities.map(city => <option key={city} value={city} />)}
                  </datalist>
                  {errors.from && <p style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '0.5rem' }}>{errors.from}</p>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>
                    To (Destination City)
                  </label>
                  <input
                    type="text"
                    value={formData.to}
                    onChange={(e) => setFormData({...formData, to: e.target.value})}
                    placeholder="e.g., Bahir Dar"
                    list="cities-to"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1rem',
                      border: errors.to ? '2px solid #ef4444' : '2px solid #e2e8f0',
                      borderRadius: '12px',
                      outline: 'none'
                    }}
                  />
                  <datalist id="cities-to">
                    {popularCities.map(city => <option key={city} value={city} />)}
                  </datalist>
                  {errors.to && <p style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '0.5rem' }}>{errors.to}</p>}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  style={{
                    padding: '1rem 2.5rem',
                    background: 'linear-gradient(135deg, #127A6A 0%, #aed580 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Next Step →
                </motion.button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '3rem',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
              }}
            >
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.5rem' }}>
                📦 What are you shipping?
              </h2>
              <p style={{ color: '#64748b', marginBottom: '2rem' }}>
                Select multiple items or specify custom ones
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                {items.map((item) => {
                  const selectedItem = formData.selectedItems.find(i => i.id === item.id);
                  return (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: '1.5rem 1rem',
                        border: selectedItem ? '2px solid #127A6A' : '2px solid #e2e8f0',
                        borderRadius: '16px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        background: selectedItem ? 'rgba(174, 213, 128, 0.05)' : 'white',
                        position: 'relative'
                      }}
                      onClick={() => toggleItem(item.id)}
                    >
                      <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>{item.name}</div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Br {item.price}</div>
                      {selectedItem && (
                        <div 
                          style={{
                            position: 'absolute',
                            top: '5px',
                            right: '5px',
                            background: '#127A6A',
                            color: 'white',
                            borderRadius: '50%',
                            width: '24px',
                            height: '24px',
                            fontSize: '0.8rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold'
                          }}
                        >
                          {selectedItem.quantity}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {formData.selectedItems.length > 0 && (
                <div style={{ marginBottom: '2rem', background: '#f8fafc', padding: '1.5rem', borderRadius: '16px' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#334155' }}>Adjust Quantities</h3>
                  {formData.selectedItems.map(item => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.9rem', color: '#334155' }}>{item.icon} {item.name}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <button 
                          onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, -1); }}
                          style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer' }}
                        >-</button>
                        <span style={{ fontWeight: 600, minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                        <button 
                          onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, 1); }}
                          style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer' }}
                        >+</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>
                  Other / Custom Items
                </label>
                <input
                  type="text"
                  value={formData.customItem}
                  onChange={(e) => setFormData({...formData, customItem: e.target.value})}
                  placeholder="e.g. Perfume, Eye Glass (Separate with commas)"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    outline: 'none'
                  }}
                />
                <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.5rem' }}>
                  Custom items are priced based on our standard weight rate.
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>
                  🚢 Shipping Option
                </label>
                <select
                  value={formData.shippingOption}
                  onChange={(e) => setFormData({...formData, shippingOption: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    border: errors.shippingOption ? '2px solid #ef4444' : '2px solid #e2e8f0',
                    borderRadius: '12px',
                    outline: 'none',
                    background: 'white',
                    cursor: 'pointer'
                  }}
                >
                  <option value="air">✈️ Air Mail (Get Instant Quote)</option>
                  <option value="road">🚛 Road Cargo (Call for Pricing)</option>
                </select>
                {formData.shippingOption === 'road' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ 
                      marginTop: '1rem', 
                      padding: '1rem', 
                      background: 'rgba(18, 122, 106, 0.1)', 
                      borderRadius: '12px',
                      border: '1px solid #127A6A',
                      color: '#127A6A',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <span>📞</span>
                    For Road Cargo, please contact us at: <a href="tel:8414" style={{ color: '#127A6A', textDecoration: 'underline' }}>8414</a>
                  </motion.div>
                )}
                {errors.shippingOption && <p style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '0.5rem' }}>{errors.shippingOption}</p>}
              </div>

              {errors.items && <p style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '1rem' }}>{errors.items}</p>}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', gap: '1rem' }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStep(1)}
                  style={{
                    padding: '1rem 2rem',
                    background: 'white',
                    color: '#64748b',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  ← Back
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  style={{
                    padding: '1rem 2.5rem',
                    background: 'linear-gradient(135deg, #127A6A 0%, #aed580 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Next Step →
                </motion.button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '3rem',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
              }}
            >
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.5rem' }}>
                ✅ Review Your Shipment
              </h2>
              <p style={{ color: '#64748b', marginBottom: '2rem' }}>
                Please confirm the details before getting your quote
              </p>

              <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '16px', marginBottom: '2rem' }}>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #e2e8f0' }}>
                    <span style={{ color: '#64748b', fontWeight: 500 }}>Route</span>
                    <span style={{ fontWeight: 600, color: '#334155' }}>{formData.from} → {formData.to}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingBottom: '1rem', borderBottom: '1px solid #e2e8f0' }}>
                    <span style={{ color: '#64748b', fontWeight: 500 }}>Items to Ship</span>
                    {formData.selectedItems.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontWeight: 600, color: '#334155' }}>{item.icon} {item.name} x {item.quantity}</span>
                        <span style={{ color: '#64748b' }}>Br {item.price * item.quantity}</span>
                      </div>
                    ))}
                    {formData.customItem.trim() && (
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontWeight: 600, color: '#334155' }}>📦 Custom Item: {formData.customItem}</span>
                        <span style={{ color: '#64748b' }}>Weight Pricing</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStep(2)}
                  style={{
                    padding: '1rem 2rem',
                    background: 'white',
                    color: '#64748b',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  ← Back
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  style={{
                    padding: '1rem 2.5rem',
                    background: 'linear-gradient(135deg, #127A6A 0%, #aed580 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Get Quote 💰
                </motion.button>
              </div>
            </motion.div>
          )}

          {step === 4 && quote && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '3rem',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#334155', marginBottom: '0.5rem' }}>
                  Your Quote is Ready!
                </h2>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #127A6A 0%, #aed580 100%)',
                padding: '2.5rem',
                borderRadius: '20px',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginBottom: '0.5rem' }}>
                  Total Shipping Cost
                </p>
                <div style={{ fontSize: '4rem', fontWeight: 900, color: 'white' }}>
                  Br {quote.price.toLocaleString()}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  style={{
                    flex: 1,
                    minWidth: '200px',
                    padding: '1rem 2rem',
                    background: 'linear-gradient(135deg, #127A6A 0%, #aed580 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  📅 Book Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={handleReset}
                  style={{
                    flex: 1,
                    minWidth: '200px',
                    padding: '1rem 2rem',
                    background: 'white',
                    color: '#7fba42',
                    border: '2px solid #7fba42',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  🔄 New Quote
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EnhancedQuoteCalculator;
