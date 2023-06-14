import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error occurred while fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productId}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
