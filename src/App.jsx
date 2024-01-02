import { Route, Routes } from "react-router-dom";

import Footer from "./components/common/footer.jsx";
import Header from "./components/common/header.jsx";
import Nav from "./components/common/nav.jsx";
import About from "./components/pages/about.jsx";
import Home from "./components/pages/home.jsx";
import Newsletter from "./components/pages/newsletter.jsx";
import ProductList from "./components/products/productList.jsx";
import Product from "./components/products/product.jsx";

import lamps from "./data/lamps.json";
import candles from "./data/candles.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route
              path="/lamps"
              element={<ProductList products={lamps} type={"Lamps"} />}
            />
            <Route
              path="/candles"
              element={<ProductList products={candles} type={"Candles"} />}
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
