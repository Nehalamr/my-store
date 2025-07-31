import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">All Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.image} className="card-img-top p-3" style={{ height: "250px", objectFit: "contain" }} alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title.slice(0, 25)}...</h5>
                <p className="card-text">${product.price}</p>
                <Link to={`/products/${product.id}`} className="btn btn-primary mt-2">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}