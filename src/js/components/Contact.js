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
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding-top: 20px;
`;

const BlockSection = styled.div`
	display: block;
	width: 90%;
	min-height: 300px;
	border: 1px solid #000;
`;

const Column = styled.div`
	display: inline-block;
	width: 49.84%;
	height: 300px;
	border: 1px solid #000;
`;

const ContactBlockTop = styled.div`
	diplay: block;
	width: 100%;
	height: 100px;
	border: 1px solid #000;
`;


class Contact extends Component {
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
	    			<BlockSection>
	    				<ContactBlockTop>
	    				</ContactBlockTop>
	    				<Column>
	    				</Column>
	    				<Column>
	    				</Column>
		    		</BlockSection>
		    	</BodyWrapper>

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

export default Contact;
