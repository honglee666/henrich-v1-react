import React, { useEffect, useState } from 'react';

function Balance({ balance }) {
  const [displayed, setDisplayed] = useState(parseFloat(balance));

  useEffect(() => {
    const interval = setInterval(() => {
      // 平滑靠近最新值（模擬浮動感）
      setDisplayed(prev => prev + (parseFloat(balance) - prev) * 0.2);
    }, 200); // 每 200ms 更新一次
    return () => clearInterval(interval);
  }, [balance]);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <strong>模擬金：</strong>${displayed.toFixed(2)}
    </div>
  );
}

export default Balance;
