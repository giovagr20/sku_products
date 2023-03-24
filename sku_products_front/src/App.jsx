import { ErrorPage } from "./pages/error/ErrorPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from "./pages/home/HomePage";
import { Product } from "./pages/products/ProductsPage";
import { ProductDetail } from "./pages/products/ProductDetailPage";
import { NewProduct } from "./pages/products/NewProductPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
