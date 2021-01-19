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
    width: 100%;
    height: 300px;
    margin: 0 auto;
    border: 0;
    text-align: center;
`;

const IntroAndMission = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 300px;
	margin: 0 auto;
	border: 0;
`;

const IntroVideo = styled.div`
   text-align: center;
    width: 900px;
    margin: 2em;
    height: 300px;
    padding-top: 6em;
	border: 0;
	background: url('../../src/media/jungle-textbox.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;

const Mission = styled.div`
    text-align: center;
    width: 900px;
    margin: 2em;
    height: 300px;
    padding-top: 6em;
	border: 0;
	background: url('../../src/media/jungle-textbox.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;

const Timeline = styled.div`
    margin-right: auto;
    margin-left: auto;
	border: 0;
    font-size: 24px; 
    color: ffff#;
    width: 100%;
    text-align: center;
    padding-top: 6em;
    padding-bottom: 6em;
    border: 0;
    background: url(../../src/media/jungle-textbox.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;

const FooterWrapper = styled.div`
	background: #fff;
    padding: 10px;
	opacity: .5;
`;

const Footer = styled.div`
    text-align: center;
    display: table;
    margin-right: auto;
    margin-left: auto;
	color: #000;
`;

const NavBlock = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 80px;
	width: 100%;
	border: 0;
`;

const Logo = styled.div`
   height: 400px;
   width: 400px;
   position: absolute;
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
						<Logo>
							<img src="../../src/media/header-title.png" />
						</Logo>
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

					<WelcomeIntroduction className="row">
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
					</WelcomeIntroduction>

					<IntroAndMission className="row">
						<IntroVideo className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
							<img src="../../src/media/hello-title.png" width="250" />
							<p>A few words from the creators of Code as Kids</p>
	    			</IntroVideo>
						<Mission className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
							<img  src="../../src/media/our-mission-title.png" width="450" />
							<p>Code as Kids mission is to help kids learn to code professionally, creatively and neatly. 
							We want to instill best practices to our users and students.
							While maintaining a safe, fun and supportive community for all.
							The website serves as a great portal and foundation to launch kids' interest in coding, 
							technology and science. A group of growing volunteers that want
							to give the gift of learning.</p>
	    			</Mission>
	    		</IntroAndMission>
						
					<Timeline className="row">
					 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
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
	    		</Timeline>

					<FooterWrapper className="row">
					 <Footer className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					    <img className="footer-logo" src="../../src/media/footer-logo.png" width="100" height="100"/>
						<p><a href="">Site Map</a> | <a href="">Mission Statement</a> | <a href="">Web Accessibility</a> | <a href="">Privacy Policy</a></p>
							<p>Copyright 2021 Code as Kids, All Rights Reserved <i>Version 1.0</i></p>
							
		    		</Footer>
		    	</FooterWrapper>

	    	</AppWrapper>

	    </BodyTag>

	    </ErrorBoundary>
    );
  }
}

export default App;
