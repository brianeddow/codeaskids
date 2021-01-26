import React, { Component } from "react";
import { COLORS } from "../../css/styles";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";

import Main from "./Main";
import About from "./About";
import Blog from "./Blog";
import Lessons from "./Lessons";
import Contact from "./Contact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const BodyTag = styled.div`
	position: absolute;
	left: 0; top: 0;
	right: 0; bottom;
`;

const AboutWrapper = styled.div`
	margin: 0 auto;
	background: url('../../src/media/code-as-kids-medium-desktop-background.png');
	background-size: cover;
`;

const HeaderParent = styled.div`
	display: block;
	width: 100%;
	height: 400px;
	margin: 0 auto;
	border: 1px solid #000;
`;

const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50px;
	border: 1px solid #000;
`;

const NavBlock = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 80px;
	width: 100%;
	border: 1px solid red;
`;

const BodyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding-top: 20px;
`;

const BlockSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;
	min-height: 300px;
	border: 1px solid #000;
	margin: 10px;
`;

const Subject = styled.div`
	display: flex;
	justify-content: space-around;
	height: 200px;
	width: 200px;
	margin: 15px;
	border: 1px solid #000;
`;


class Coding extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

    	<ErrorBoundary>

    		<BodyTag>

	    	<AboutWrapper>

	    		<HeaderParent>
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
		    				<Link to="/lessons">
		    					<button className="btn btn-success btn-lg">Lessons</button>
		    				</Link>
		    				<Link to="/contact">
		    					<button className="btn btn-success btn-lg">Contact</button>
		    				</Link>

				    		<Switch>
				    			<Route exact path="/"><Main /></Route>
				    			<Route path="/about"><About /></Route>
				    			<Route path="/blog"><Blog /></Route>
				    			<Route path="#"></Route>
				    			<Route path="/lessons"><Lessons /></Route>
				    			<Route path="/contact"><Contact /></Route>
				    		</Switch>
				    	</Router>
    				</NavBlock>
	    		</HeaderParent>


	    		<BodyWrapper>
	    			<BlockSection>
					    <img src="../../src/media/html-title.png" width="350" />
		    		</BlockSection>
		    		<BlockSection>
						<img src="../../src/media/code-examples-title.png" width="250" />
		    		</BlockSection>
		    		<BlockSection>
						<img src="../../src/media/faq-title.png" width="350" />
		    		</BlockSection>
		    		<BlockSection>
					    <img src="../../src/media/other-subjects-title.png" width="350" />
		    		</BlockSection>
		    		<BlockSection>
		    			<Subject />
		    			<Subject />
		    			<Subject />
		    		</BlockSection>
		    	</BodyWrapper>

					<Footer>
						<img className="footer-logo" src="../../src/media/footer-logo.png" width="100" height="100" />
						<p><a href="">Site Map</a> | <a href="">Mission Statement</a> | <a href="">Web Accessibility</a> | <a href="">Privacy Policy</a></p>
						<p>Copyright 2021 Code as Kids, All Rights Reserved</p>
					</Footer>

	    	</AboutWrapper>

	    	</BodyTag>

	    </ErrorBoundary>
    );
  }
}

export default Coding;
