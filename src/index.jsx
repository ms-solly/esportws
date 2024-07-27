import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";


import Teams from "./components/Teams";
import Registration from "./components/pages/startforms/Register";
import News_pg from "./components/pages/layouts/News_layout";
import "./index.css";
import Header from "./components/Header";


const Home = lazy(() => import("./components/pages/Home"));

//import NotFound from "./components/pages/404";


const App = props => (
  <>
  <Home/>
    {props.children}
  </>
);
render(() => (
  <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/teams" component={Teams} />
      <Route path="/news" component={News_pg} />
      <Route path="/auth/register" component={Registration}/>
     
  </Router>
), document.getElementById("root"));
