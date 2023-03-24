import { useState } from "react";
import axios from "axios";
import "../../styles/products.styles.css";
import { URL_API } from "../../components/url.context";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const NewProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    sku: "",
    price: 0,
    shortDescription: "",
    image: "",
    longDescription: "",
    quantity: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${URL_API}/products`, productData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        if (res) {
          Swal.fire({
            icon: "success",
            title: `Success ${res.status}`,
            text: `Product has saved with id:${res.data.id}`,
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: `${err}`,
        });
      });
  };

  return (
    <div className="container">
      <div className="mb-3 container text-center">
        <Link to={`/`} className="btn btn-secondary">
          Go back to MainPage
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={productData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="sku" className="form-label">
            SKU:
          </label>
          <input
            type="text"
            className="form-control"
            id="sku"
            name="sku"
            value={productData.sku}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="shortDescription" className="form-label">
            Short Description:
          </label>
          <input
            type="text"
            className="form-control"
            id="shortDescription"
            name="shortDescription"
            value={productData.shortDescription}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="longDescription" className="form-label">
            Long Description:
          </label>
          <textarea
            className="form-control"
            id="longDescription"
            name="longDescription"
            value={productData.longDescription}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantity:
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            value={productData.quantity}
            onChange={handleInputChange}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
