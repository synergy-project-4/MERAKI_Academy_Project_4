import React, { useContext, useState } from "react";
import { Route, Switch } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Register from "./components/auth/signUp/index";
import Header from "./components/header/index";
import Main from "./components/main/index";
import Login from "./components/auth/login/index";
import ProductDetails from "./components/productDetails";
import SearchProduct from "./components/searchProduct";
import Cart from "./components/cart";
import { ItemCardContext } from "./../src/contexts/main";
import Profile from "./components/profile/profile";
import { HeaderContext } from "./contexts/header";
import { LoginContext } from "./contexts/login";
import CreateProduct from "./components/createProduct/index";
import History from "./components/history/index";
import ShowAndEdit from "./components/showAndEdit/index";
import EditProduct from "./components/showAndEdit/edit";
import PendingApproval from "./components/pendingApproval/index";
import Rejected from "./components/rejected/index";
import Footer from "./components/footer/index";

const App = () => {
  const itemCardContext = useContext(ItemCardContext);
  const headerContext = useContext(HeaderContext);
  const [cartData, setCartData] = useState([]);

  return (
    <div className="App">
      <Header />
      <Route exact path="/profile/edit" component={Profile} />
      <Route path="/register" component={Register} />
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/show/cart" component={Cart} />
      <Route
        path="/product/details"
        render={() => <ProductDetails item={itemCardContext.found} />}
      />
      <Route
        path="/search/product"
        render={() => <SearchProduct item={headerContext.found} />}
      />
      <Route
        path="/create/product"
        render={() => <CreateProduct item={LoginContext.found} />}
      />
      <Route path="/product/history" render={() => <History />} />
      <Route path="/main/my/product" render={() => <ShowAndEdit />} />
      <Route path="/manage/product/edit" render={() => <EditProduct />} />
      <Route path="/products/approval" render={() => <PendingApproval />} />
      {/* <Route path="/" component={Footer} /> */}
      <Route exact path="/product/rejected" component={Rejected} />

    </div>
  );
};

export default App;
