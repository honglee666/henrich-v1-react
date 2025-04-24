import React, { useEffect } from 'react';

function PriceFeed({ price, setPrice }) {
useEffect(() => {
  const interval = setInterval(() => {
    setPrice(prev => {
      const next = parseFloat(prev) + (Math.random() - 0.48) * 0.6; // 更真實
      return next.toFixed(2);
    });
  }, 1000);
  return () => clearInterval(interval);
}, [setPrice]);



  return (
    <div style={{ marginBottom: '1rem' }}>
      <strong>XAUUSD 報價：</strong>${price}
    </div>
  );
}

export default PriceFeed;
