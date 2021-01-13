import React, { Component } from "react";
import { COLORS } from "../../css/styles";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";

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

	    	<AboutWrapper>

	    		<HeaderParent>
    				<NavBlock>
    					<button>Extra</button>
    					<button>Extra</button>
    				</NavBlock>
    				<NavBlock>
    					<button>Home</button>
    					<button>About</button>
    					<button>Blog</button>
    					<button>Coding</button>
    					<button>Lessons</button>
    					<button>Contact</button>
    				</NavBlock>
	    		</HeaderParent>

				<WelcomeIntroduction>
					<h1 className="page-title home-title">About Us</h1>
					<p className="introduction-text">Code for Kids is a new website for kids ranging from 3<sup>rd</sup> to 12<sup>th</sup>grade curious about creating with code. Our website contains coding quizzes, blogs, templates, lessons. Code for Kids hopes to be the coding community of tomorrow. We look forward to growing with you and giving you as a user the experience you all deserve.  </p>
	    		</WelcomeIntroduction>

	    		<IntroAndMission>
	    			<Faq>
						<h2>Frequently Asked Questions (FAQs)</h2>

						<h3>When was this website created?</h3>
						<p><strong>A:</strong> The website launched on XXXXX, XX, 2021.</p>

						<h3>How can I help?</h3>
						<p><strong>A:</strong> We run on selling advertisement space and volunteer writers to create fresh new content consistently. If you could contribute to one or both of these please <a href="">contact us</a>. Lastly, word of mouth share our website on social media or directly to friends and family.
						We want to always do better, so recommendations are always welcome. Thank you!</p>

						<h3>Why a monkey and the jungle theme?</h3>
						<p><strong>A:</strong> The world of technology is a jungle. Welcome to our jungle and for the monkey...monkeys are awesome and curious.</p>

						<h3>What if I’m older than the age range (3<sup>rd</sup> to 12<sup>th</sup> graders)?</h3>
						<p><strong>A:</strong> We only recommend those age ranges. We write our content to cater to those age groups, but users of all ages can start their coding journey here!</p>

						<h3>What's the Monkey’s Name?</h3>
						<p><strong>A:</strong> Peels, make sure to wave hello when he appears on your screen with important or encouraging wordings.</p>

						<h3>Is the Website Accessible and 508 Compliant?</h3>
						<p><strong>A:</strong> We strive to meet these standards so all kids can get the most out of the knowledge we wish to share on our website. We are always open to suggestions on improving our accessibility or any special requests we will try to meet.</p>

						<h3>How can I volunteer?</h3>
						<p><strong>A:</strong> Please go to our contact page and click the "Volunteer" button.</p>

					    <h3>What can volunteers do?</h3>
					    <p><strong>A:</strong> Volunteers will be ask to do tasks based off their preference and strengths. For example, writting lessions, web development, graphic design, customer service and more. We encourage any college kids as well looking for work experience and something to add to their resume. We will be your best reference!</p>

						<h3>Are there any rules for the website</h3>
						<p><strong>A:</strong> Yes, a few to help ensure everyone has a fun and safe experience. 1. If comments become a feature no foul language, bullying or negative behavior. 2. If you volunteer please take your responsibilities seriously. 3. Coding can be frustrating please do not take it out on us. </p>
						
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

				<FooterWrapper>
					<Footer>
						<img className="footer-logo" src="../../src/media/footer-logo.png" width="100" height="100" />
						<p><a href="">Site Map</a> | <a href="">Mission Statement</a> | <a href="">Web Accessibility</a> | <a href="">Privacy Policy</a></p>
						<p>Copyright 2021 Code as Kids, All Rights Reserved</p>
					</Footer>
				</FooterWrapper>

	    	</AboutWrapper>

	    </ErrorBoundary>
    );
  }
}

export default About;
