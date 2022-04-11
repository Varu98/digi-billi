import "./App.css";
import CartPage from "./frontend/CartPage/CartPage";
import Navbar from "./frontend/Home/Navbar/Navbar";
import ProductPage from "./frontend/ProductPage/ProductPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CartPage />
    </div>
  );
}

export default App;
