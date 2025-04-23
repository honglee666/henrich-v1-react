import React from 'react';
import Balance from './components/Balance';
import PriceFeed from './components/PriceFeed';
import OrderPanel from './components/OrderPanel';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>Henrich V1 模擬平台</h1>
      <Balance />
      <PriceFeed />
      <OrderPanel />
    </div>
  );
}

export default App;
