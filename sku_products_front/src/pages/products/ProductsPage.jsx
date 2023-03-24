import { useEffect, useState } from "react";
import { URL_API } from "../../components/url.context";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/products.styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Product = (enable) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    setLoading(true);
    axios
      .get(`${URL_API}/products`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  /**
   *   sku,
  name,
  price,
  image,
  longDescription
   */
  return (
    <>
      <main>
        <div className="text-center">
          <Link to={`/`} className="btn btn-primary">Go back MainPage</Link>
        </div>
        {loading ? (
          <div className="container">... Loading products ...</div>
        ) : (
          <div>
            {products.length > 0 ? (
              <section className="container">
                <ul className="list">
                  {products.map((product) => (
                    <li key={product.id}>
                      <Link to={`/product/${product.id}`}>
                        <div className="bg-secondary text-center">
                          <div className="card">
                            <img
                              className="card-img-top"
                              src={product.image}
                              alt={product.name}
                            />
                            <div className="card-body">
                              <h5 className="card-title">{product.name}</h5>
                              <p className="card-text">
                                {product.shortDescription} <br />
                                <code> ${product.price} </code>
                              </p>
                            </div>
                          </div>

                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : (
              <div className="container">There's no products to show</div>
            )}
          </div>
        )}
      </main>
    </>
  );
};

/***?
 *
 */
