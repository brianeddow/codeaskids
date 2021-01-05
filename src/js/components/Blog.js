import React, { Component } from "react";
import { COLORS } from "../../css/styles";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";

const AboutWrapper = styled.div`
	margin: 0 auto;
	background: url('../../src/media/code-as-kids-medium-desktop-background.png');
	background-size: cover;
`;

const HeaderParent = styled.div`
	display: block;
	width: 100%;
	height: 400px;
	margin: 0 auto;
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

const BodyWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	padding-top: 20px;
`;

const Main = styled.div`
	display: flex;
	justify-content: center;
	width: 70%;
	height: 700px;
	border: 1px solid #000;
`;

const Aside = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 25%;
	height: 700px;
	border: 1px solid #000;
`;

const BlogPost = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 90%;
	height: 205px;
	border: 1px solid #000;
`;

const BlogPostColumn = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	height: 200px;
	width: 400px;
	border: 1px solid #000;
`;

const SocialFeed = styled.div`
	display: flex;
	width: 200px;
	height: 200px;
	border: 1px solid #000;
	margin: 20px;
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


	    		<BodyWrapper>
		    		<Main>
		    			<BlogPost>
		    				<BlogPostColumn>
		    					<h2>Blog Title</h2>
		    					<button>Learn More</button>
		    				</BlogPostColumn>
		    				<BlogPostColumn>
		    					<p>Blog feature image</p>
		    				</BlogPostColumn>
		    			</BlogPost>
		    		</Main>

		    		<Aside>
		    			<SocialFeed></SocialFeed>
		    			<SocialFeed></SocialFeed>
		    			<SocialFeed></SocialFeed>
		    			<button>Volunteer</button>
		    		</Aside>
		    	</BodyWrapper>

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
