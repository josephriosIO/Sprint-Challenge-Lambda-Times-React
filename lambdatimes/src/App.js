import React from "react";
import withAuth from "./auth/withAuth";
import Login from "./components/login/Login";
import MainPages from "./components/Content/MainPage";

const ComponentFromWithAuthenticate = withAuth(MainPages)(Login);

const App = () => {
  return <ComponentFromWithAuthenticate />;
};

export default App;
