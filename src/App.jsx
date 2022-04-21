import "./App.css";
import { useProducts } from "./frontend/contexts/ProductContext/ProductContext";
import Navbar from "./frontend/Home/Navbar/Navbar";
import Router from "./frontend/Routes/Router";

function App() {
  const { products, categories } = useProducts();
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
