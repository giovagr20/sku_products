import { ProductDetail } from "./pages/ProductDetailPage";
import { Product } from "./pages/ProductsPage";
import { ErrorPage } from "./pages/error/ErrorPage";
import { NewProduct } from "./pages/NewProductPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
