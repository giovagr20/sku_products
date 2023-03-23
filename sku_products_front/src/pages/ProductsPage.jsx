import { useEffect, useState } from "react";
import { URL_API } from "../components/url.context";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/products.styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    callApi();
    console.log(products);
  }, []);

  const callApi = () => {
    axios
      .get(`${URL_API}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
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
        {products.length > 0 ? (
          <section className="container___list">
            <ul className="list">
              {products.map((product) => (
                <li
                  key={product.id}
                >
                  <Link to={`/product/${product.id}`}></Link>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <section className="container">
              There's no data
          </section>
        )}
      </main>
    </>
  );
};

/***?
 *
 */
