import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation/index";
import Register from "./components/auth/signUp/index";
import Main from './components/main/index'

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Route path="/register" component={Register} />
      <Main/>
      <Route path="/home" component={Main} />
    </div>
  );
};

export default App;
