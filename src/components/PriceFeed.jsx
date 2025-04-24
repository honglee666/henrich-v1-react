import React, { useEffect } from 'react';

function PriceFeed({ price, setPrice }) {
 useEffect(() => {
  const interval = setInterval(() => {
    setPrice(prev => {
      const change = (Math.random() - 0.48) * 0.6; // 微偏多方向，±0.6 內波動
      return (parseFloat(prev) + change).toFixed(2);
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
