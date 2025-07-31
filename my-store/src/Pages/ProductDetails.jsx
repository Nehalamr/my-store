import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductDetails() {
  const { id } = useParams(); // بنجيب ID من اللينك
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error("Error:", err));
  }, [id]);

  if (!product) return <p className="container mt-5">Loading...</p>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <img src={product.image} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-7">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4>${product.price}</h4>
          <p><strong>Category:</strong> {product.category}</p>
        </div>
      </div>
    </div>
  );
}