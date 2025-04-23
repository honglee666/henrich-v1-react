import React, { useEffect, useState } from 'react';

function PriceFeed() {
  const [price, setPrice] = useState(1990);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prev => (parseFloat(prev) + (Math.random() - 0.5)).toFixed(2));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <strong>XAUUSD 報價：</strong>${price}
    </div>
  );
}

export default PriceFeed;
