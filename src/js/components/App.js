import React, { Component } from "react";
import { COLORS } from "../../css/styles";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";
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

const AppWrapper = styled.div`
	margin: 0 auto;
	background: url('../../src/media/code-as-kids-medium-desktop-background.png');
	background-size: cover;
`;

const HeaderParent = styled.div`
	display: block;
	width: 100%;
	height: 400px;
	margin: 0 auto;
	border: 0;
`;

const WelcomeIntroduction = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 90vw;
	height: 400px;
	margin: 0 auto;
	border: 0;
`;

const IntroAndMission = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90vw;
	height: 300px;
	margin: 0 auto;
	border: 0;
`;

const IntroVideo = styled.div`
	display: flex;
	justify-content: space-between;
	width: 43.5vw;
	height: 300px;
	border: 0;
	margin-right: 30px;
	background: #fff;
	opacity: .2;
`;

const Mission = styled.div`
	display: flex;
	justify-content: space-between;
	width: 43.5vw;
	height: 300px;
	border: 0;
	background: #fff;
	opacity: .2;
`;

const Timeline = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	margin: 0 auto;
	height: 475px;
	width: 90vw;
	border: 0;
`;

const FooterWrapper = styled.div`
	background: #fff;
	opacity: .5;
`;

const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 99.8%;
	height: 50px;
	color: #000;
	border: 0;
	opacity: 1;
`;

const NavBlock = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 80px;
	width: 100%;
	border: 0;
`;


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

    	<ErrorBoundary>

    	<BodyTag>

	    	<AppWrapper>

	    		<Router>
		    		<Switch>
		    			<Route path="/" />
		    			<Route path="/about" />
		    			<Route path="/blog" />
		    			<Route path="/coding" />
		    			<Route path="/lessons" />
		    			<Route path="/contact" />
		    		</Switch>
		    	</Router>

	    		<HeaderParent>
    				<NavBlock>
    					<button className="btn btn-success btn-lg">Extra</button>
    					<button className="btn btn-success btn-lg">Extra</button>
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
		    			</Router>
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

	    		<FooterWrapper>
		    		<Footer>
		    			<p>Site Map | Mission Statement | Web Accessibility | Privacy Policy</p>
		    			<p>Copyright 2020 Code as Kids, All Rights Reserved</p>
		    		</Footer>
		    	</FooterWrapper>

	    	</AppWrapper>

	    </BodyTag>

	    </ErrorBoundary>
    );
  }
}

export default App;
