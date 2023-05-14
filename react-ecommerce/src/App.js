
import './App.css';
import {BroserRouter as Router, Route,Routes } from 'reat-router-dom'
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
   <div className=' overflow-hidden '>
   <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product/:id' element={<ProductDetails/>} />
    </Routes>
    <Sidebar/>
    <Footer/>
   </Router>
   </div>
  );
}

export default App;
