import React from "react";
import { Route, Redirect } from "react-router";
import { LOGGEDIN_USER_USERNAME, LOGIN_URL } from "../constants";

const PrivateRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      checkLoggedin() ? (
        React.createElement(component, props)
      ) : (
        <Redirect
          to={{
            pathname: LOGIN_URL,
          }}
        />
      )
    }
  />
);
const checkLoggedin = () => {
  const username = localStorage.getItem(LOGGEDIN_USER_USERNAME) || "";
  if (username === "") return false;
  else return true;
};

export default PrivateRoute;
