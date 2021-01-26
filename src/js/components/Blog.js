import React, { Component } from "react";
import { COLORS } from "../../css/styles";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";

import Main from "./Main";
import About from "./About";
import Coding from "./Coding";
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
	justify-content: space-around;
	width: 100%;
	padding-top: 20px;
`;

const Section = styled.div`
	display: flex;
	justify-content: center;
	width: 70%;
	height: 700px;
	border: 1px solid #000;
`;

const Aside = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 25%;
	height: 700px;
	border: 1px solid #000;
`;

const BlogPost = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 90%;
	height: 205px;
	border: 1px solid #000;
`;

const BlogPostColumn = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	height: 200px;
	width: 400px;
	border: 1px solid #000;
`;

const SocialFeed = styled.div`
	display: flex;
	width: 200px;
	height: 200px;
	border: 1px solid #000;
	margin: 20px;
`;


class Blog extends Component {
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
				    			<Route path="#"></Route>
				    			<Route path="/coding"><Coding /></Route>
				    			<Route path="/lessons"><Lessons /></Route>
				    			<Route path="/contact"><Contact /></Route>
				    		</Switch>
				    	</Router>
    				</NavBlock>
	    		</HeaderParent>


	    		<BodyWrapper>
		    		<Section>
		    			<BlogPost>
		    				<BlogPostColumn>
								<img src="../../src/media/blog-title.png" width="350" />
		    					<button>Learn More</button>
		    				</BlogPostColumn>
		    				<BlogPostColumn>
		    					<p>Blog feature image</p>
		    				</BlogPostColumn>
		    			</BlogPost>
		    		</Section>

		    		<Aside>
		    			<SocialFeed></SocialFeed>
		    			<SocialFeed></SocialFeed>
		    			<SocialFeed></SocialFeed>
						<img src="../../src/media/volunteer-title.png" width="250" />
		    		</Aside>
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

export default Blog;
