import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation/index";
import Register from "./components/auth/signUp/index";
import Header from "./components/header/index"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Route path="/register" component={Register} />
    </div>
  );
};

export default App;
