import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthContex } from "../contex";
import { publicRoutes, privateRoutes } from "../router";
const AppRouters = () => {
  const { isAuth, isLoading } = useContext(AuthContex);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};
export default AppRouters;
