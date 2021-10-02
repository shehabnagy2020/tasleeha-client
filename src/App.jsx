import { Redirect, Route, Switch } from "react-router";
import PageCart from "./pages/PageCart";
import PageCategory from "./pages/PageCategory";
import PageHome from "./pages/PageHome";
import PageLogin from "./pages/PageLogin";
import PageProduct from "./pages/PageProduct";
import PageRegister from "./pages/PageRegister";

function App() {
  return (
    <Switch>
      <Route path="/cart" component={PageCart} />
      <Route path="/category/:category_id" component={PageCategory} />
      <Route path="/product/:product_id" component={PageProduct} />
      <Route path="/login" component={PageLogin} />
      <Route path="/register" component={PageRegister} />
      <Route path="/" component={PageHome} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
