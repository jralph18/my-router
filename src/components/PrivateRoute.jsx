import React from "react";

import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;