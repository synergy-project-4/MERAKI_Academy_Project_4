import React, { useContext } from "react";
import { Route } from "react-router-dom";

import Register from "./components/auth/signUp/index";
import Header from "./components/header/index"
import Main from './components/main/index'
import Login from "./components/auth/login/index";
import ProductDetails from './components/productDetails'
import { ItemCardContext } from './../src/contexts/main';


const App = () => {
  const itemCardContext = useContext(ItemCardContext);

  return (
    <div className="App">
      <Header />
      
      <Route path="/register" component={Register} />
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/product/details" render={() => <ProductDetails item={itemCardContext.found} />} />


    </div>
  );
};

export default App;
