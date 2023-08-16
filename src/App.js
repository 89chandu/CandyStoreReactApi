import React from 'react';
import Dashboard from './components/Dashboard';
import { CartProvider } from './components/CartProvider';
import Cart from './components/Cart'; // Import the Cart component
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Candy Cart</h1>
        <CartProvider>
        <Cart />
        </CartProvider> {/* Display the Cart component in the header */}
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
