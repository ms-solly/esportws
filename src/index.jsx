import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import App from "./App";
import Teams from "./components/Teams";
import Registration from "./components/pages/startforms/Register";
import News_pg from "./components/pages/layouts/News_layout";
import "./index.css";
import Home from "./components/pages/Home";
//import NotFound from "./components/pages/404";
render(() => (
  <Router root={Home}>
      <Route path="/" component={Home} />
      <Route path="/teams" component={Teams} />
      <Route path="/news" component={News_pg} />
      <Route path="/auth/register" component={Registration}/>
      <Route path="*404" element={<App />} />
  </Router>
), document.getElementById("root"));
