import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import NotificationsModal from "./components/Common/NotificationsModal";
import UserContext from "./contexts/UserContext";
import PageCart from "./pages/PageCart";
import PageCategory from "./pages/PageCategory";
import PageHome from "./pages/PageHome";
import PageLogin from "./pages/PageLogin";
import PagePrivacy from "./pages/PagePrivacy";
import PageProduct from "./pages/PageProduct";
import PageProductsOffers from "./pages/PageProductsOffers";
import PageRegister from "./pages/PageRegister";
import PageSearch from "./pages/PageSearch";
import PageUser from "./pages/PageUser";

function App() {
  const { userInfo } = useContext(UserContext);

  return (
    <div className="">
      <Switch>
        <Route path="/privacy" component={PagePrivacy} />
        <Route path="/cart" component={PageCart} />
        <Route path="/category/:category_id" component={PageCategory} />
        <Route path="/product/:product_id" component={PageProduct} />
        <Route path="/search/:search_text" component={PageSearch} />
        <Route path="/offers" component={PageProductsOffers} />
        {!userInfo?.full_name && <Route path="/login" component={PageLogin} />}
        {!userInfo?.full_name && (
          <Route path="/register" component={PageRegister} />
        )}
        {userInfo?.full_name && <Route path="/user" component={PageUser} />}
        <Route path="/" component={PageHome} />
        <Redirect to="/" />
      </Switch>
      <NotificationsModal />
    </div>
  );
}

export default App;
