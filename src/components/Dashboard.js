import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import ProductForm from './ProductForm';
import ProductItem from './ProductItem';
import { useCart } from './CartProvider';
import classes from './Dashboard.module.css';


const Dashboard = () => {
  const { cartItems } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('https://crudcrud.com/api/8a1ad90105304bda999a85bd3d2a8b9a/products'); // Fetch products from server
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  const addProductHandler = async (product) => {
    try {
      const response = await axios.post('https://crudcrud.com/api/8a1ad90105304bda999a85bd3d2a8b9a/products', product); // Send POST request to server
      setProducts([...products, response.data]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const deleteProductHandler = async (index) => {
    try {
      await axios.delete(`https://crudcrud.com/api/8a1ad90105304bda999a85bd3d2a8b9a/products/${products[index].id}`); // Send DELETE request to server
      const updatedProducts = products.filter((_, i) => i !== index);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const editProductHandler = async (index, updatedProduct) => {
    try {
      await axios.put(`https://crudcrud.com/api/8a1ad90105304bda999a85bd3d2a8b9a/products/${products[index].id}`, updatedProduct); // Send PUT request to server
      const updatedProducts = [...products];
      updatedProducts[index] = updatedProduct;
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const totalWorth = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div className={classes.dashboard}>
   <h1>Candy Store</h1>
      <ProductForm onAddProduct={addProductHandler} />
      <div id="productList">
        {products.map((product, index) => (
          <ProductItem
            key={index}
            index={index}
            product={product}
            onDelete={deleteProductHandler}
            onEdit={editProductHandler}
          />
        ))}
      </div>
      <div>Total Worth: ${totalWorth.toFixed(2)}</div>
    </div>
  );
};

export default Dashboard;
