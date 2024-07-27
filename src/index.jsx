import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import App from "./App";
import Teams from "./components/Teams";
import Registration from "./components/pages/startforms/Register";
import "./index.css";
//import NotFound from "./components/pages/404";
render(() => (
  <Router>

      <Route path="/" component={App} />
      <Route path="/teams" component={Teams} />
      <Route path="/auth/register" component={Registration}/>
      <Route path="*404" element={<App />} />

  </Router>
), document.getElementById("root"));
