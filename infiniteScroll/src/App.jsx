import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ShoppingCard from './components/ShoppingCard';
import axios from 'axios';


function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const product = {
    title: 'Awesome Product',
    description: 'This is an awesome product.',
    price: 99.99,
  };
  
 
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://fakestoreapi.com/products?limit=10&page=${page}`);
      setProducts(prevProducts => [...prevProducts, ...res.data]);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (  
    <div className="navbar">
      <Navbar />
      
      <div className="app-container">
      <h1>Products</h1>
      <div className="card-container">
        {products.map(product => (
          <ShoppingCard key={product.id} product={product} />
        ))}
      </div>
      {loading && <div className="loading">Loading more products...</div>}
    </div>
   
    </div>
  );
}

export default App;
