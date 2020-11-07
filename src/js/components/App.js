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

const IntroVideo = styled.div`
	display: flex;
	justify-content: space-between;
	width: 43.5vw;
	height: 200px;
	border: 1px solid #000;
	margin-right: 30px;
	background-color: #eee;
`;

const Mission = styled.div`
	display: flex;
	justify-content: space-between;
	width: 43.5vw;
	height: 200px;
	border: 1px solid #000;
	background-color: #aaa;
`;

const Timeline = styled.div`
	display: block;
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


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

    	<ErrorBoundary>

	    	<AppWrapper>

	    		<HeaderParent>
	    			<p>Links, Forest Image, Additional Icon Links</p>
	    		</HeaderParent>

	    		<WelcomeIntroduction>
	    			<p>Headline</p>
	    			<p>Body</p>
	    		</WelcomeIntroduction>

	    		<IntroAndMission>
	    			<IntroVideo>
	    				<p>intro_video</p>
	    			</IntroVideo>
	    			<Mission>
	    				<p>mission</p>
	    			</Mission>
	    		</IntroAndMission>

	    		<Timeline />

	    		<Footer />

	    	</AppWrapper>

	    </ErrorBoundary>
    );
  }
}

export default App;
