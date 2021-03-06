import React, { Component } from "react";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";
import GlobalStyles from '../../css/styles.js';

import { Link } from "react-router-dom";


const BodyTag = styled.div`
	position: absolute;
	left: 0; top: 0;
	right: 0; bottom: auto;
`;

const AboutWrapper = styled.div`
	margin: 0 auto;
	background: url('../../src/media/code-as-kids-medium-desktop-background.gif');
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
	justify-content: space-around;
	width: 100%;
	padding-top: 20px;
`;

const Section = styled.div`
	display: flex;
	justify-content: center;
	width: 70%;
	height: 700px;
	border: 0;
`;

const Aside = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 25%;
	height: 700px;
	border: 0;
`;

const BlogPost = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 90%;
	height: 205px;
	border: 0;
`;

const BlogPostColumn = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	height: 200px;
	width: 400px;
	border: 0;
`;

const SocialFeed = styled.div`
	display: flex;
	width: 200px;
	height: 200px;
	border: 1px solid #000;
	margin: 20px;
`;

const Logo = styled.div`
	height: 400px;
	width: 400px;
	position: absolute;
`;

class Blog extends Component {
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
							<a href="https://www.instagram.com/code_as_kids" target="_blank" rel="noopener noreferrer"><button className="btn btn-success btn-sm"><i className="fab fa-instagram fa-3x"></i></button></a>
							<a href="https://twitter.com/codeaskids" target="_blank" rel="noopener noreferrer"><button className="btn btn-success btn-sm"><i className="fab fa-twitter fa-3x"></i></button></a>
    				</NavBlock>
    				<NavBlock>
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
    				</NavBlock>
	    		</HeaderParent>

				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<img src="../../src/media/blog-title.png" width="650" />
						<p className="introduction-text">Here is a set of blog post we have created related to code, technology, school, science and more!</p>
					</div>
				</div>

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

	    	</AboutWrapper>

	    	</BodyTag>

	    </ErrorBoundary>
    );
  }
}

export default Blog;
