import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./js/components/Blog";

render(
	<App />,
  document.getElementById("container")
);