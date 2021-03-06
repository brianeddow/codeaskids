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
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding-top: 20px;
`;

const BlockSection = styled.div`
	display: block;
	width: 90%;
	min-height: 300px;
	border: 0;
`;

const Column = styled.div`
	display: inline-block;
	width: 49.84%;
	height: 300px;
	border: 1px solid #000;
`;

const ContactBlockTop = styled.div`
	diplay: block;
	width: 100%;
	height: 100px;
	border: 0;
`;

const Logo = styled.div`
	height: 400px;
	width: 400px;
	position: absolute;
`;

class Contact extends Component {
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
							<img src="../../src/media/about-us-title.png" width="650" />
							<p className="introduction-text">Feel free to contact us about suggestions, advertisement offers, volunteering and questions.
							Volunteers can contribute by writing articles, creating graphic designs and much more. Let us know how you’d like to contribute
							to helping kids and adults learn code the right way. All content will be reviewed by website administrators prior to posting.</p>
						</div>
					</div>

					<img src="../../src/learn-more-title.png" width="350" />
					<p>Learn More</p>
					<p>Lessons CTA</p>
					<p>Coding CTA</p>
					<p>Blog CTA</p>

					<img src="../../src/social-media-title.png" width="350" />
				
					<img src="../../src/facebook-title.png" width="250" />
					<p>Give us a follow on Facebook!</p>
				
			
					<img src="../../src/instagram-title.png" width="250" />
					<p>Give us a follow on Instagram!</p>
				
			
					<img src="../../src/twitter-title.png" width="250" />
					<p>Give us a follow on Twitter!</p>
					

	    	</AboutWrapper>

	    	</BodyTag>

	    </ErrorBoundary>
    );
  }
}

export default Contact;
