import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyles from '../../css/styles.js';
import ErrorBoundary from "./ErrorBoundary";

import { Link } from "react-router-dom";


const BodyTag = styled.div`

`;

const AppWrapper = styled.div`

`;

const HeaderParent = styled.div`

`;

const WelcomeIntroduction = styled.div`

`;


const FooterWrapper = styled.div`

`;

const Footer = styled.div`

`;

const SocialBlock = styled.div`

`;

const NavBlock = styled.div`


`;

const Logo = styled.div`

`;


class Lessons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

    	<ErrorBoundary>

    	<BodyTag>
			 <div class="body-tag">
    		<GlobalStyles />

	    	<AppWrapper>
				 <div class="app-wrapper">
					<HeaderParent>
					  <div class="header-parent">
						<Logo>
						 <div class="logo">
							<img src="../../src/media/header-title.png" />
						 </div>
						</Logo>
					  </div>
						<SocialBlock>
						<div class="social-block">
							<a href="https://www.instagram.com/code_as_kids" target="_blank" rel="noopener noreferrer"><button className="btn social-media-link"><i className="fab fa-instagram fa-4x"></i></button></a>
							<a href="https://twitter.com/codeaskids" target="_blank" rel="noopener noreferrer"><button className="btn social-media-link"><i className="fab fa-twitter fa-4x"></i></button></a>
						 </div>
						</SocialBlock>
						<NavBlock>
						 <div class="social-block">
							<Link to="/">
								<button className="btn nav-link">Home</button>
							</Link>
							<Link to="/about">
								<button className="btn nav-link">About</button>
							</Link>
							<Link to="/blog">
								<button className="btn nav-link">Blog</button>
							</Link>
							<Link to="/coding">
								<button className="btn nav-link">Coding</button>
							</Link>
							<Link to="/lessons">
								<button className="btn nav-link">Lessons</button>
							</Link>
							<Link to="/contact">
								<button className="btn nav-link">Contact</button>
							</Link>
							</div>
						</NavBlock>
	    		</HeaderParent>

					<WelcomeIntroduction className="">
					<div class="row welcome-introduction">
					 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					  <img src="../../src/media/lessons-title.png" width="350" />
					  <p className="introduction-text">Below are a list of coding lessons. We hope you enjoy and learn!</p>
					  </div>
					 </div>
					</WelcomeIntroduction>

					<FooterWrapper className="">
					 <div class="row footer-wrapper">
						<Footer className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<div class="footer">
						 <div className="footer-content">
					     <img className="footer-logo" src="../../src/media/footer-logo.png" width="100" height="100"/>
							<p><a href="">Site Map</a> | <a href="">Mission Statement</a> | <a href="">Web Accessibility</a> | <a href="">Privacy Policy</a></p>
							<p>Copyright 2021 Code as Kids, All Rights Reserved <i>Version 1.0</i></p>
						 </div>
						 </div>
		    		</Footer>
						</div>
		    	</FooterWrapper>
         </div>
	    	</AppWrapper>
       </div>
	    </BodyTag>

	    </ErrorBoundary>
    );
  }
}

export default Lessons;
