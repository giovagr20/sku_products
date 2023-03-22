import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { UrlContext } from "../components/url.context";

export const NewProduct = () => {
    const [product, setProduct] = useState();

    const {url} = useContext(UrlContext);

    useEffect(() => {
        callApi();
    }, [])

    const callApi = () => {
        axios.post(`${url}/products`).then(res => setProduct(res)).catch(err => console.log(err));
    }

    return(
        <>
        <div>
            URL CALL = {`${url}/products`}
        </div>
        </>
    )
}