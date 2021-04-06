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

const IntroAndMission = styled.div`

`;

const IntroVideo = styled.div`

`;

const Mission = styled.div`

`;

const Timeline = styled.div`

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


class Home extends Component {
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
						<img src="../../src/media/welcome-title.png" width="350" />
						<p className="introduction-text">Welcome to Code as Kids and a new ever growing educational website.
						A website used to teach, test, and shape kids' knowledge of coding.
						We update the website monthly to ensure kids (grades 3<sup>rd</sup> - 12<sup>th</sup>)
						can have a solid foundation on their journey to learning code. We strive to better your experience
						every step of the way and would love to hear your suggestions.
						Tell your friends! We strive to make 508 compliant content on a web accessible website to leave no kid behind.
						Our website is constantly being updated and adding new features. Here we believe coding is for everyone!</p>
					  </div>
					 </div>
					</WelcomeIntroduction>

					<IntroAndMission className="">
					  <div class="row intro-and-mission">
						 <div class="intro-video col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
						   <IntroVideo className="">
							<img src="../../src/media/hello-title.png" width="250" />
							<p>A few words from the creators of Code as Kids</p>
						  </IntroVideo>
						 </div>
						<Mission className="">
						 <div class="mission col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
							<img  src="../../src/media/our-mission-title.png" width="450" />
							<p>Code as Kids mission is to help kids learn to code professionally, creatively and neatly.
							We want to instill best practices to our users and students.
							While maintaining a safe, fun and supportive community for all.
							The website serves as a great portal and foundation to launch kids' interest in coding,
							technology and science. A group of growing volunteers that want
							to give the gift of learning.</p>
						 </div>
						</Mission>
					 </div>
	    		</IntroAndMission>

					<Timeline className="">
           <div class="row timeline">
					  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<p><img src="../../src/media/website-timeline-title.png" width="550" /></p>

						<img src="../../src/media/2020.png" width="150"  />
						<ul className="timeline-list">
							<li>Idea Created </li>
							<li>Create Sitemap</li>
							<li>Create Wireframes</li>
							<li>Create First Draft of Contact</li>
							<li>Website and Foundation Creation</li>
					    </ul>

						<img src="../../src/media/2021.png" width="150"  />
						<ul className="timeline-list">
							<li>Website Development</li>
							<li>First Lesson Plan Created</li>
							<li>Social Media Created</li>
							<li>First Video Content</li>
							<li>Website Soft Launch</li>
					    </ul>

	    		     </div>
				    </div>
	    		</Timeline>

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

export default Home;
