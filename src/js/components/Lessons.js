import React, { Component } from "react";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";
import GlobalStyles from '../../css/styles.js';

import { Link } from "react-router-dom";


const BodyTag = styled.div`
	position: absolute;
	left: 0; top: 0;
	right: 0; bottom: auto;
`;

const AboutWrapper = styled.div`
	margin: 0 auto;
	background: url('../../src/media/code-as-kids-medium-desktop-background.gif');
	background-size: cover;
`;

const HeaderParent = styled.div`
	display: block;
	width: 100%;
	height: 400px;
	margin: 0 auto;
	border: 0;
`;

const Logo = styled.div`
	height: 400px;
	width: 400px;
	position: absolute;
`;

const NavBlock = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 80px;
	width: 100%;
	border: 0;
`;

const BlockSection = styled.div`

`;

const Subject = styled.div`

`;

class Lessons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

    	<ErrorBoundary>

    		<BodyTag>

    		<GlobalStyles />

	    	<AboutWrapper>

	    		<HeaderParent>
	    			<Logo>
							<img src="../../src/media/header-title.png" />
						</Logo>
    				<NavBlock>
    					<button className="btn btn-success btn-sm">Extra</button>
    					<button className="btn btn-success btn-sm">Extra</button>
    				</NavBlock>
    				<NavBlock>
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
    				</NavBlock>
	    		</HeaderParent>

	    			<BlockSection>
							<img src="../../src/media/summary-title.png" width="350" />
		    		</BlockSection>
		    		<BlockSection>
							<img src="../../src/media/code-example-title.png" width="250" />
		    		</BlockSection>
		    		<BlockSection>
							<img src="../../src/media/quizzes-title.png" width="250" />
		    		</BlockSection>
		    		<BlockSection>
							<img src="../../src/media/other-subjects-title.png" width="250" />
		    		</BlockSection>
		    		<BlockSection>
		    			<Subject />
		    			<Subject />
		    			<Subject />
		    		</BlockSection>

	    	</AboutWrapper>

	    	</BodyTag>

	    </ErrorBoundary>
    );
  }
}

export default Lessons;
