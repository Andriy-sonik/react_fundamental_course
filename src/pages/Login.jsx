import { useContext } from "react";
import MyButton from "../components/UI/MyButton/MyButton";
import MyInput from "../components/UI/MyInput/MyInput";
import { AuthContex } from "../contex";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContex);
  const submit = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", 'true');
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submit}>
        <MyInput type="text" placeholder="Enter login" />
        <MyInput type="password" placeholder="Enter password" />
        <MyButton>Login</MyButton>
      </form>
    </div>
  );
};
export default Login;
