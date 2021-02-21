import React, { Component } from "react";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";
import GlobalStyles from '../../css/styles.js';

import Main from "./Main";
import About from "./About";
import Blog from "./Blog";
import Coding from "./Coding";
import Contact from "./Contact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Lessons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

    	<ErrorBoundary>

    		<BodyTag>

    		<GlobalStyles />

	    	<AboutWrapper>

	    		<HeaderParent>
	    			<Logo>
							<img src="../../src/media/header-title.png" />
						</Logo>
    				<NavBlock>
    					<button className="btn btn-success btn-sm">Extra</button>
    					<button className="btn btn-success btn-sm">Extra</button>
    				</NavBlock>
    				<NavBlock>
    					<Router>
	  						<Link to="/">
		    					<button className="btn btn-success btn-lg">Home</button>
		    				</Link>
		    				<Link to="/about">
		    					<button className="btn btn-success btn-lg">About</button>
		    				</Link>
		    				<Link to="/blog">
		    					<button className="btn btn-success btn-lg">Blog</button>
		    				</Link>
		    				<Link to="/coding">
		    					<button className="btn btn-success btn-lg">Coding</button>
		    				</Link>

		    					<button className="btn btn-success btn-lg">Lessons</button>

		    				<Link to="/contact">
		    					<button className="btn btn-success btn-lg">Contact</button>
		    				</Link>

				    		<Switch>
				    			<Route exact path="/" component={Main} />
				    			<Route exact path="/about" component={About} />
				    			<Route exact path="/blog" component={Blog} />
				    			<Route exact path="/coding" component={Coding} />
				    			<Route exact path="/contact" component={Contact} />
				    		</Switch>
				    	</Router>
    				</NavBlock>
	    		</HeaderParent>


	    		<BodyWrapper>
	    			<BlockSection>
							<img src="../../src/media/summary-title.png" width="350" />
		    		</BlockSection>
		    		<BlockSection>
							<img src="../../src/media/code-example-title.png" width="250" />
		    		</BlockSection>
		    		<BlockSection>
							<img src="../../src/media/quizzes-title.png" width="250" />
		    		</BlockSection>
		    		<BlockSection>
							<img src="../../src/media/other-subjects-title.png" width="250" />
		    		</BlockSection>
		    		<BlockSection>
		    			<Subject />
		    			<Subject />
		    			<Subject />
		    		</BlockSection>
				</BodyWrapper>

	    	</AboutWrapper>

	    	</BodyTag>

	    </ErrorBoundary>
    );
  }
}

export default Lessons;
