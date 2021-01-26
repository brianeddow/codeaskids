import React, { Component } from "react";
import { COLORS } from "../../css/styles";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";

import Main from "./Main";
import Blog from "./Blog";
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

const BlockWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	width: 99.9%;
	border: 1px solid #000;
`;

const HeaderParent = styled.div`
	display: block;
	width: 100%;
	height: 400px;
	margin: 0 auto;
	border: 1px solid #000;
`;

const WelcomeIntroduction = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90vw;
	height: 200px;
	margin: 0 auto;
	border: 1px solid #000;
`;

const IntroAndMission = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90vw;
	height: 200px;
	margin: 0 auto;
	border: 1px solid #000;
`;

const Faq = styled.div`
	display: flex;
	justify-content: center;
	width: 90vw;
	height: 200px;
	border: 1px solid #000;
	background-color: #eee;
`;

const LearnMore = styled.div`
	display: block;
	margin: 0 auto;
	height: 375px;
	width: 90vw;
	border: 1px solid #000;
`;

const LearnMoreItem = styled.div`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	width: 250px;
	height: 250px;
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


class About extends Component {
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
				    			<Route path="#"></Route>
				    			<Route path="/blog"><Blog /></Route>
				    			<Route path="/coding"><Coding /></Route>
				    			<Route path="/lessons"><Lessons /></Route>
				    			<Route path="/contact"><Contact /></Route>
				    		</Switch>
				    	</Router>
    				</NavBlock>
	    		</HeaderParent>

				<WelcomeIntroduction className="row">
				 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<h1 className="page-title home-title">About Us</h1>
					<p className="introduction-text">Code for Kids is a new website for kids ranging from 3<sup>rd</sup> to 12<sup>th</sup>grade curious about creating with code. Our website contains coding quizzes, blogs, templates, lessons. Code for Kids hopes to be the coding community of tomorrow. We look forward to growing with you and giving you as a user the experience you all deserve.  </p>
	    		 </div>
				</WelcomeIntroduction>

					<IntroAndMission className="row">
						<Faq>
						 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<h2>Frequently Asked Questions (FAQs)</h2>

							<a href="#question-one" className="btn btn-info" data-toggle="collapse">When was this website created?</a>
							<div id="question-one" className="collapse">
								<p><strong>A:</strong> The website launched on XXXXX, XX, 2021.</p>
							</div>
                            <br/>
							<a href="#question-two" className="btn btn-info" data-toggle="collapse">How can I help?</a>
							<div id="question-two" className="collapse">
								<p><strong>A:</strong> We run on selling advertisement space and volunteer writers to create fresh new content consistently. If you could contribute to one or both of these please <a href="">contact us</a>. Lastly, word of mouth share our website on social media or directly to friends and family.
					                 We want to always do better, so recommendations are always welcome. Thank you!</p>
							</div>
							<br/>
							<a href="#question-three" className="btn btn-info" data-toggle="collapse">Why a monkey and the jungle theme?</a>
							<div id="question-three" className="collapse">
								<p><strong>A:</strong> The world of technology is a jungle. Welcome to our jungle and for the monkey...monkeys are awesome and curious.</p>
							</div>
							<br/>
							<a href="#question-four" className="btn btn-info" data-toggle="collapse">What if I’m older than the age range (3<sup>rd</sup> to 12<sup>th</sup> graders)?</a>
							<div id="question-four" className="collapse">
								<p><strong>A:</strong> We only recommend those age ranges. We write our content to cater to those age groups, but users of all ages can start their coding journey here!</p>
							</div>
							<br/>
							<a href="#question-five" className="btn btn-info" data-toggle="collapse">What's the Monkey’s Name?</a>
							<div id="question-five" className="collapse">
								<p><strong>A:</strong> Peels, make sure to wave hello when he appears on your screen with important or encouraging wordings.</p>
							</div>
							<br/>
							<a href="#question-six" className="btn btn-info" data-toggle="collapse">Is the Website Accessible and 508 Compliant?</a>
							<div id="question-six" className="collapse">
								<p><strong>A:</strong> We strive to meet these standards so all kids can get the most out of the knowledge we wish to share on our website. We are always open to suggestions on improving our accessibility or any special requests we will try to meet.</p>
							</div>
							<br/>
							<a href="#question-seven" className="btn btn-info" data-toggle="collapse">Is the Website Accessible and 508 Compliant?</a>
							<div id="question-seven" className="collapse">
								<p><strong>A:</strong> We strive to meet these standards so all kids can get the most out of the knowledge we wish to share on our website. We are always open to suggestions on improving our accessibility or any special requests we will try to meet.</p>
							</div>
							<br/>
							<a href="#question-seven" className="btn btn-info" data-toggle="collapse">How can I volunteer?</a>
							<div id="question-seven" className="collapse">
								<p><strong>A:</strong> Please go to our contact page and click the "Volunteer" button.</p>
							</div>
							<br/>
							<a href="#question-seven" className="btn btn-info" data-toggle="collapse">Are there any rules for the website</a>
							<div id="question-seven" className="collapse">
								<p><strong>A:</strong> Yes, a few to help ensure everyone has a fun and safe experience. 1. If comments become a feature no foul language, bullying or negative behavior. 2. If you volunteer please take your responsibilities seriously. 3. Coding can be frustrating please do not take it out on us. </p>
							</div>

					      </div>
	    			</Faq>
	    		</IntroAndMission>

	    		<LearnMore>
	    			<BlockWrapper>
	    				<p>Learn More</p>
	    			</BlockWrapper>
	    			<BlockWrapper>
		    			<LearnMoreItem>Lessons CTA</LearnMoreItem>
		    			<LearnMoreItem>Coding CTA</LearnMoreItem>
		    			<LearnMoreItem>Blog CTA</LearnMoreItem>
		    		</BlockWrapper>
	    		</LearnMore>

	    		<LearnMore>
	    			<BlockWrapper>
	    				<p>Social Media</p>
	    			</BlockWrapper>
	    			<BlockWrapper>
		    			<LearnMoreItem>Facebook CTA</LearnMoreItem>
		    			<LearnMoreItem>Instagram CTA</LearnMoreItem>
		    			<LearnMoreItem>Twitter CTA</LearnMoreItem>
		    		</BlockWrapper>
	    		</LearnMore>

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

export default About;
