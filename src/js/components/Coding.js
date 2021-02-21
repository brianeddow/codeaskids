import React, { Component } from "react";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";
import GlobalStyles from '../../css/styles.js';

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
	right: 0; bottom: auto;
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
	border: 0;
`;

const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50px;
	border: 0;
`;

const NavBlock = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 80px;
	width: 100%;
	border: 0;
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
	border: 0;
	margin: 10px;
`;

const Subject = styled.div`
	display: flex;
	justify-content: space-around;
	height: 200px;
	width: 200px;
	margin: 15px;
	border: 0;
`;

const Logo = styled.div`
	height: 400px;
	width: 400px;
	position: absolute;
`;


class Coding extends Component {
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
							<a href="https://www.instagram.com/code_as_kids" target="_blank" rel="noopener noreferrer"><button className="btn btn-success btn-sm"><i class="fab fa-instagram fa-3x"></i></button></a>
							<a href="https://twitter.com/codeaskids" target="_blank" rel="noopener noreferrer"><button className="btn btn-success btn-sm"><i class="fab fa-twitter fa-3x"></i></button></a>
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

		    					<button className="btn btn-success btn-lg">Coding</button>

		    				<Link to="/lessons">
		    					<button className="btn btn-success btn-lg">Lessons</button>
		    				</Link>
		    				<Link to="/contact">
		    					<button className="btn btn-success btn-lg">Contact</button>
		    				</Link>

				    		<Switch>
				    			<Route exact path="/" component={Main} />
				    			<Route exact path="/about" compoent={About} />
				    			<Route exact path="/blog" component={Blog} />
				    			<Route exact path="/lessons" component={Lessons} />
				    			<Route exact path="/contact" component={Contact} />
				    		</Switch>
				    	</Router>
    				</NavBlock>
					</HeaderParent>


					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<img src="../../src/media/coding-title.png" width="650" />
							<p className="introduction-text">Here is a set of blog post we have created related to code, technology, school, science and more!</p>
						</div>
					</div>


	    		<BodyWrapper>
	    			<BlockSection>
					    <img src="../../src/media/html-title.png" width="250" />
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

	    	</AboutWrapper>

	    	</BodyTag>

	    </ErrorBoundary>
    );
  }
}

export default Coding;
