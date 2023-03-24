import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return(
        <>
            <div className="container">
                <div className="bg-secondary text-center">
                    <Link to={`/product`} className="btn btn-primary">
                        See list products
                    </Link>
                </div>
                <div className="bg-warning text-center">
                    <Link to={`/new-product`} className="btn btn-primary">
                        Create Product
                    </Link>
                </div>
            </div>
        </>
    )
}