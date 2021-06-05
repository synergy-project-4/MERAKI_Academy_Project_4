import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation/index";
import Register from "./components/auth/signUp/index";
import Login from "./components/auth/login/index";


const App = () => {
  return (
    <div className="App">
      <Navigation />
      
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </div>
  );
};

export default App;
