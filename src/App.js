import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import AppRouters from "./components/AppRouters";
import Navbar from "./components/UI/Navbar/Navbar";
import { AuthContex } from "./contex";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);
  return (
    <AuthContex.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Navbar />
        <AppRouters />
      </BrowserRouter>
    </AuthContex.Provider>
  );
};

export default App;
