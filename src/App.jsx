import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavbarPage } from "./layout/navbar/Navbar";
import { Favorites } from "./pages/favorites/Favorites";
import { ItemDetail } from "./pages/details/ItemDetail";
import { ProductList } from "./common/products/ProductList";
import { Cloudinary } from "@cloudinary/url-gen";

const App = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "drpr6euyz" } });
  return (
    <>
      <div>
        <NavbarPage />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
