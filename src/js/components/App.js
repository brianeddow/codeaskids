import React, { Component } from "react";
import { COLORS } from "../../css/styles";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";

const AppWrapper = styled.div`
	margin: 0 auto;
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
	flex-direction: column;
	width: 90vw;
	height: 400px;
	margin: 0 auto;
	border: 1px solid #000;
`;

const IntroAndMission = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90vw;
	height: 300px;
	margin: 0 auto;
	border: 1px solid #000;
`;

const IntroVideo = styled.div`
	display: flex;
	justify-content: space-between;
	width: 43.5vw;
	height: 300px;
	border: 1px solid #000;
	margin-right: 30px;
	background-color: #eee;
`;

const Mission = styled.div`
	display: flex;
	justify-content: space-between;
	width: 43.5vw;
	height: 300px;
	border: 1px solid #000;
	background-color: #fff;
`;

const Timeline = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	margin: 0 auto;
	height: 475px;
	width: 90vw;
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

	    	<AppWrapper>

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
	    			<h1>Headline</h1>
	    			<p>
	    				Code as Kids
Welcome to Code as Kids and a new ever growing educational website. A website used to teach, test, and shape kids' knowledge of coding. We update the website monthly to ensure kids (grades 3rd - 12th) can have a solid foundation on their journey to learning code. We strive to better your experience every step of the way and would love to hear your suggestions. Tell your friends! We strive to make 508 compliant content on a web accessible website to leave no kid behind. Here we believe coding is for everyone!
	    			</p>
	    		</WelcomeIntroduction>

	    		<IntroAndMission>
	    			<IntroVideo>
	    				<p>intro_video</p>
	    			</IntroVideo>
	    			<Mission>
	    				<p>Code as Kids mission is to help kids learn to code professionally, creatively and neatly. The website serves as a great portal and foundation to launch kids' interest in coding, technology and science. A group of growing volunteers that want to give the gift of learning.</p>
	    			</Mission>
	    		</IntroAndMission>

	    		<Timeline>
	    			<h1>Website Timeline</h1>
	    			<p>
	    			2020 
						- Idea Created 
						- Website and Foundation creation
						- Social Media Created
						- Website soft launch
						- 
						2021
						- First video content
	    			</p>
	    		</Timeline>

	    		<Footer>
	    			<p>Site Map | Mission Statement | Web Accessibility | Privacy Policy</p>
	    			<p>Copyright 2020 Code as Kids, All Rights Reserved</p>
	    		</Footer>

	    	</AppWrapper>

	    </ErrorBoundary>
    );
  }
}

export default App;
