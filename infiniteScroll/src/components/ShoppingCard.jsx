
import React, { useMemo } from 'react';
import './ShoppingCard.css'; 

const ShoppingCard = ({ product }) => {
  const memoizedProductDetails = useMemo(() => ({    //useMemo use to Memoize funtion. It help to avoid re-rendering again and again
    title: product.title,
    description: product.description,
    price: product.price,
    image: product.image,
  }), [product]);

  return (
    <div className="shopping-card">
      <img src={memoizedProductDetails.image} alt={memoizedProductDetails.title} className="product-image" />
      <div className="product-info">
        <h3>{memoizedProductDetails.title}</h3>
        <p>{memoizedProductDetails.description}</p>
        <span>${memoizedProductDetails.price}</span>
      </div>
    </div>
  );
};

export default ShoppingCard;
