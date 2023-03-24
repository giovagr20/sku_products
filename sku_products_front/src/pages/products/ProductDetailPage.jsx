import axios from "axios";
import { useEffect, useState } from "react";
import {useParams, Link} from 'react-router-dom'
import { URL_API } from "../../components/url.context";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/products.styles.css";


export const ProductDetail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios
      .get(`${URL_API}/product/${id}`)
      .then((res) => setDetail(res.data))
      .catch((err) => console.log(err));
  };

  return(
    <>
      <div className="card">
        <Link to={`/product`} className="btn btn-primary">Go back </Link>

        <br />
        <picture className="card___image">
          <img src={detail.image} alt={detail.name} />
        </picture>
        <h3 className="card__title ">{detail.name}</h3>
        <p className="card__text text-center">
          Description: <span>{detail.longDescription}</span>
        </p>
        <p className="card__text text-center">
          <code>
          Price: $<span>{detail.price}</span>
          </code>
        </p>
      </div>
    </>
  )
};
