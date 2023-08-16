import React from 'react';
import classes from './ProductItem.module.css';
import { useCart } from './CartProvider';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className={classes.productItem}>
      <div>
        <strong>{product.name}</strong><br />
        Price: ${product.price}<br />
        Color: {product.color}<br />
        Size: {product.size}<br />
      </div>
      <button className={classes.buyButton} onClick={() => addToCart(product)}>Buy1</button>
      <button className={classes.buyButton} onClick={() => addToCart(product)}>Buy2</button>
      <button className={classes.buyButton} onClick={() => addToCart(product)}>Buy3</button>
    </div>
  );
};

export default ProductItem;
