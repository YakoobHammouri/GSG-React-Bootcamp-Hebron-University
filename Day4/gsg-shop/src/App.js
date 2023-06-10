import { useState } from "react";
import "./App.css";
import Login from "./page/Login";
import ProductPage from "./page/productPage";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      {isLogin === false ? <Login setIsLogin={setIsLogin} /> : <ProductPage />}
    </div>
  );
}

export default App;
