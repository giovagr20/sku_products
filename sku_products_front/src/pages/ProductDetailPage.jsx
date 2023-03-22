import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UrlContext } from "../components/url.context";

export const ProductDetail = ({
  id,
  sku,
  name,
  price,
  image,
  longDescription,
}) => {
  const { url } = useContext(UrlContext);
  const [detail, setDetail] = useState("");

  useEffect(() => {
    callApi();
  });

  const callApi = () => {
    axios
      .get(`${url}/products/${id}`)
      .then((res) => setDetail(res))
      .catch((err) => console.log(err));
  };

  return(
    <>
    
    </>
  )
};
