import "./App.css";
import AuthPage from "./frontend/AuthPage/AuthPage";
import Navbar from "./frontend/Home/Navbar/Navbar";


import WishlistPage from "./frontend/WishlistPage/WishlistPage";

import CartPage from "./frontend/CartPage/CartPage.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AuthPage />
    </div>
  );
}

export default App;
