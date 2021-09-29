import { Redirect, Route, Switch } from "react-router";
import PageCategory from "./pages/PageCategory";
import PageHome from "./pages/PageHome";
import PageProduct from "./pages/PageProduct";

function App() {
  return (
    <Switch>
      <Route path="/category/:category_name" component={PageCategory} />
      <Route path="/product/:product_name" component={PageProduct} />
      <Route path="/" component={PageHome} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
