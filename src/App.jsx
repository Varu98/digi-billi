import "./App.css";
import Home from "./frontend/Home/Home";
import Navbar from "./frontend/Home/Navbar/Navbar";
import ProductPage from "./frontend/ProductPage/ProductPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <ProductPage />
    </div>
  );
}

export default App;
