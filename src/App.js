import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import List from "./pages/List.jsx";
import NotFound from "./pages/NotFound.jsx"
import Links from "./components/Links.jsx"

function App() {
  return (
    <BrowserRouter>
      <Links />
      <Switch>
        <Route path="/List" exact component={List} />
        <Route path="/" exact component={Home} />
        <Route exact component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;