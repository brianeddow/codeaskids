import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./js/components/Main";
import About from "./js/components/About";
import Blog from "./js/components/Blog";
import Coding from "./js/components/Coding";
import Lessons from "./js/components/Lessons";
import Contact from "./js/components/Contact";


render(
	<BrowserRouter>
		<Switch>
			<Route path="/about" component={About} />
			<Route path="/blog" component={Blog} />
			<Route path="/coding" component={Coding} />
			<Route path="/lessons" component={Lessons} />
			<Route path="/contact" component={Contact} />
			<Route path="/" component={Main} />
		</Switch>
	</BrowserRouter>,
  document.getElementById("container")
);