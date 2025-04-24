import React, { useEffect } from 'react';

function PriceFeed({ price, setPrice }) {
  useEffect(() => {
    const interval = setInterval(() => {
      const next = parseFloat(price) + (Math.random() * 2 - 1); // 漲跌 -1 ~ +1
      setPrice(next.toFixed(2));
    }, 1000);
    return () => clearInterval(interval);
  }, [price, setPrice]);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <strong>XAUUSD 報價：</strong>${price}
    </div>
  );
}

export default PriceFeed;
