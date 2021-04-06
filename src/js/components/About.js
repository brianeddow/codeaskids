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

const FaqBlock = styled.div`
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	border: 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const Faq = styled.div`
	justify-content: center;

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


class About extends Component {
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
						<img src="../../src/media/about-us-title.png" width="350" />
						<p className="introduction-text">FCode for Kids is a new website for kids ranging from 3rd to 12th grade curious about creating with code. Our website contains coding quizzes, blogs, templates, lessons. Code for Kids hopes to be the coding community of tomorrow. We look forward to growing with you and giving you as a user the experience you all deserve. </p>
					  </div>
					 </div>
					</WelcomeIntroduction>

					<FaqBlock className="">
						<Faq>
						<div class="row faq">
						 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<img class="faq-title" src="../../src/media/faq-title.png" width="950" />
							</div>

						 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<a href="#question-one" className="btn accordion" data-toggle="collapse">When was this website created?</a>
								 <div id="question-one" className="collapse">
									<p><strong>A:</strong> The world of technology is a jungle. Welcome to our jungle and for the monkey...monkeys are awesome and curious.</p>
							</div>
														<br/>
							<a href="#question-two" className="btn accordion" data-toggle="collapse">How can I help?</a>
							<div id="question-two" className="collapse">
								<p><strong>A:</strong> We run on selling advertisement space and volunteer writers to create fresh new content consistently. If you could contribute to one or both of these please <a href="">contact us</a>. Lastly, word of mouth share our website on social media or directly to friends and family.
													 We want to always do better, so recommendations are always welcome. Thank you!</p>
							</div>
							<br/>
							<a href="#question-three" className="btn accordion" data-toggle="collapse">Why a monkey and the jungle theme?</a>
							<div id="question-three" className="collapse">
								<p><strong>A:</strong> The world of technology is a jungle. Welcome to our jungle and for the monkey...monkeys are awesome and curious.</p>
							</div>
							<br/>
							<a href="#question-four" className="btn accordion" data-toggle="collapse">What if I’m older than the age range (3<sup>rd</sup> to 12<sup>th</sup> graders)?</a>
							<div id="question-four" className="collapse">
								<p><strong>A:</strong> We only recommend those age ranges. We write our content to cater to those age groups, but users of all ages can start their coding journey here!</p>
							</div>
							<br/>
							<a href="#question-five" className="btn accordion" data-toggle="collapse">What's the Monkey’s Name?</a>
							<div id="question-five" className="collapse">
								<p><strong>A:</strong> Peels, make sure to wave hello when he appears on your screen with important or encouraging wordings.</p>
							</div>
							<br/>
							<a href="#question-six" className="btn accordion" data-toggle="collapse">Is the Website Accessible and 508 Compliant?</a>
							<div id="question-six" className="collapse">
								<p><strong>A:</strong> We strive to meet these standards so all kids can get the most out of the knowledge we wish to share on our website. We are always open to suggestions on improving our accessibility or any special requests we will try to meet.</p>
							</div>
							<br/>
							<a href="#question-seven" className="btn accordion" data-toggle="collapse">Is the Website Accessible and 508 Compliant?</a>
							<div id="question-seven" className="collapse">
								<p><strong>A:</strong> We strive to meet these standards so all kids can get the most out of the knowledge we wish to share on our website. We are always open to suggestions on improving our accessibility or any special requests we will try to meet.</p>
							</div>
							<br/>
							<a href="#question-eight" className="btn accordion" data-toggle="collapse">How can I volunteer?</a>
							<div id="question-eight" className="collapse">
								<p><strong>A:</strong> Please go to our contact page and click the "Volunteer" button.</p>
							</div>
							<br/>
							<a href="#question-nine" className="btn accordion" data-toggle="collapse">Are there any rules for the website</a>
							<div id="question-nine" className="collapse">
								<p><strong>A:</strong> Yes, a few to help ensure everyone has a fun and safe experience. 1. If comments become a feature no foul language, bullying or negative behavior. 2. If you volunteer please take your responsibilities seriously. 3. Coding can be frustrating please do not take it out on us. </p>
							</div>
							</div>
						 </div>
						</Faq>
					</FaqBlock>

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

export default About;
