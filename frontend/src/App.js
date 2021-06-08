import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import Register from "./components/auth/signUp/index";
import Header from "./components/header/index";
import Main from "./components/main/index";
import Login from "./components/auth/login/index";
import Profile from './components/profile/profile'
import ProductDetails from './components/productDetails'
import SearchProduct from "./components/searchProduct";
import Cart from './components/cart'
import { ItemCardContext } from './../src/contexts/main';
import Profile from "./components/profile/profile";
import { HeaderContext } from "./contexts/header";
import CreateProduct from "./components/createProduct/index";

const App = () => {
  const itemCardContext = useContext(ItemCardContext);
  const headerContext = useContext(HeaderContext);

  return (
    <div className="App">

      <Header />
      <Route exact path="/profile/edit" component={Profile} />
      <Route path="/register" component={Register} />
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/cart" component={Cart} />
      <Route path="/product/details" render={() => <ProductDetails item={itemCardContext.found} />} />
      <Route path="/search/product" render={() => <SearchProduct item={headerContext.found} />} />
      <Route
        path="/create/product"
        render={() => <CreateProduct />}
      />
    </div>
  );
};

export default App;
