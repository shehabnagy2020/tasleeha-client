import { Redirect, Route, Switch } from "react-router";
import PageCategory from "./pages/PageCategory";
import PageHome from "./pages/PageHome";
import PageLogin from "./pages/PageLogin";
import PageProduct from "./pages/PageProduct";
import PageRegister from "./pages/PageRegister";

function App() {
  return (
    <Switch>
      <Route path="/category/:category_name" component={PageCategory} />
      <Route path="/product/:product_name" component={PageProduct} />
      <Route path="/login" component={PageLogin} />
      <Route path="/register" component={PageRegister} />
      <Route path="/" component={PageHome} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
