import React, { Component } from "react";
import { COLORS } from "../../css/styles";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";

const AboutWrapper = styled.div`
	margin: 0 auto;
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


class App extends Component {
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
	    			<h1>Summary</h1>
	    		</WelcomeIntroduction>

	    		<IntroAndMission>
	    			<Faq>
	    				<p>FAQ Accordion List</p>
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
	    			<p>Site Map | Mission Statement | Web Accessibility | Privacy Policy</p>
	    			<p>Copyright 2020 Code as Kids, All Rights Reserved</p>
	    		</Footer>

	    	</AboutWrapper>

	    </ErrorBoundary>
    );
  }
}

export default App;
