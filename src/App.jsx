import { Redirect, Route, Switch } from "react-router";
import PageCart from "./pages/PageCart";
import PageCategory from "./pages/PageCategory";
import PageHome from "./pages/PageHome";
import PageLogin from "./pages/PageLogin";
import PageProduct from "./pages/PageProduct";
import PageRegister from "./pages/PageRegister";
import PageSearch from "./pages/PageSearch";
import PageUser from "./pages/PageUser";

function App() {
  return (
    <Switch>
      <Route path="/cart" component={PageCart} />
      <Route path="/category/:category_id" component={PageCategory} />
      <Route path="/product/:product_id" component={PageProduct} />
      <Route path="/search/:search_text" component={PageSearch} />
      <Route path="/login" component={PageLogin} />
      <Route path="/register" component={PageRegister} />
      <Route path="/user" component={PageUser} />
      <Route path="/" component={PageHome} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
