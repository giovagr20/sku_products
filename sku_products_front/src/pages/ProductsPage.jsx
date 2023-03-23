import { useEffect, useState } from "react";
import { URL_API } from "../components/url.context";
import axios from "axios";
import "../styles/products.styles.css";
import { ProductDetail } from "./ProductDetailPage";

export const Product = () => {
  const [data, setData] = useState([]);
  const [isSelected, setSelected] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios
      .get(`${URL_API}/products`)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  const handleSelectedCard = (product) => {
    setSelectedProduct(product);
    setSelected(true);
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
        {data.length > 0 ? (
          <section className="container___list">
            <ul className="list">
              {data.map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleSelectedCard(product)}
                >
                  <ProductDetail
                    id={product.id}
                    sku={product.sku}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    longDescription={product.longDescription}
                  />
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <section className="container__card">
            <div>There's no product to show</div>
          </section>
        )}
      </main>
    </>
  );
};
