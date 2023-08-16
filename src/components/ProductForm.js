import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

import classes from './ProductForm.module.css';
import { useCart } from './CartProvider';

const ProductForm = ({ onAddProduct }) => {
  const { addToCart } = useCart();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productColor, setProductColor] = useState('');
  const [productSize, setProductSize] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();
    const newProduct = {
      name: productName,
      price: productPrice,
      color: productColor,
      size: productSize,
    };

    try {
      const response = await axios.post('https://crudcrud.com/api/8a1ad90105304bda999a85bd3d2a8b9a/products', newProduct); // Send POST request to server
      onAddProduct(response.data); // Use the response data
      addToCart(response.data); // Add the newly added product to the cart as well
      setProductName('');
      setProductPrice('');
      setProductColor('');
      setProductSize('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
     


      <input
        type="text"
        placeholder="Candy Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={productColor}
        onChange={(e) => setProductColor(e.target.value)}
        required
      />
      {/* <input
        type="text"
        placeholder="Size"
        value={productSize}
        onChange={(e) => setProductSize(e.target.value)}
        required
      /> */}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
