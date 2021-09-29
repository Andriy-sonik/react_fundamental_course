import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../../contex";
import MyButton from "../MyButton/MyButton";
const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContex);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className="navbar">
      <MyButton onClick={logout}>Logout</MyButton>
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};
export default Navbar;
