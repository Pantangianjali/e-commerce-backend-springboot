import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('http://localhost:8080/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  const addProduct = () => {
    fetch('http://localhost:8080/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, description })
    }).then(() => {
      fetchProducts();
      setName('');
      setPrice('');
      setDescription('');
    });
  };

  const deleteProduct = (id) => {
    fetch(`http://localhost:8080/api/products/${id}`, {
      method: 'DELETE'
    }).then(() => fetchProducts());
  };

  return (
    <div className="App">
      <h1>E-Commerce Product Manager</h1>

      <div className="form">
        <h2>Add Product</h2>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
        <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <button onClick={addProduct}>Add Product</button>
      </div>

      <div className="products">
        <h2>Product List</h2>
        {products.map(p => (
          <div className="product-card" key={p.id}>
            <h3>{p.name}</h3>
            <p>Price: ₹{p.price}</p>
            <p>{p.description}</p>
            <button onClick={() => deleteProduct(p.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;