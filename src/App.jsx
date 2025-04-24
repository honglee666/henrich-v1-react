import React, { useState } from 'react';
import Balance from './components/Balance';
import PriceFeed from './components/PriceFeed';
import OrderPanel from './components/OrderPanel';
import PositionPanel from './components/PositionPanel';

function App() {
  const [positions, setPositions] = useState([]);
  const [price, setPrice] = useState(1990);

  const handleOrder = (direction) => {
    const newPosition = {
      id: Date.now(),
      direction,
      entryPrice: parseFloat(price),
    };
    setPositions([...positions, newPosition]);
  };

  const handleClose = (id) => {
    setPositions(positions.filter(pos => pos.id !== id));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>Henrich V1 模擬平台</h1>
      <Balance />
      <PriceFeed price={price} setPrice={setPrice} />
      <OrderPanel onOrder={handleOrder} />
      <PositionPanel positions={positions} price={parseFloat(price)} onClose={handleClose} />
    </div>
  );
}

export default App;
