import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
      
        <div className="col-md-6 mb-4 mb-md-0">
         <img
  src="/Images/banner.jpg"
  alt="Banner"
  className="img-fluid rounded shadow"
  style={{ height: '450px', objectFit: 'contain' }}
/>
        </div>

        <div className="col-md-6 text-center text-md-start">
          <h1>Welcome to My Store 🛍️</h1>
          <p className="lead">
            Discover amazing products at great prices. <br />
            Start shopping now and enjoy a great experience!
          </p>
        
      <Link to="/products" className="btn btn-primary">Shop Now</Link>
        </div>
      </div>
    </div>
  );
}