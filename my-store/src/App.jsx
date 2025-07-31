import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import NotFound from './pages/NotFound';
import ProductList from './Pages/ProductList';
import ProductDetails from './Pages/ProductDetails';
import Footer from './components/Footer';
export default function App() {
  return (
      <>
   
  <div className="d-flex flex-column min-vh-100">
  <BrowserRouter>
  <Navbar />
  
  <div className="flex-grow-1">
    <Routes>
    <Route path="/" element={<Home />} />
         <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />

    </Routes>
  </div>
  
  <Footer />
         </BrowserRouter>
</div>
  
 </>
  );
}
