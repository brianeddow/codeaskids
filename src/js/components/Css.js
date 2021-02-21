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


class Css extends Component {
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
							<a href="https://www.instagram.com/code_as_kids" target="_blank" rel="noopener noreferrer"><button className="btn btn-success btn-sm"><i class="fab fa-instagram fa-3x"></i></button></a>
							<a href="https://twitter.com/codeaskids" target="_blank" rel="noopener noreferrer"><button className="btn btn-success btn-sm"><i class="fab fa-twitter fa-3x"></i></button></a>
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

				<Summary className="row">
				 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<img src="../../src/media/css-title.png" width="350" />
							<p className="summary-text">CSS is one of three cornerstone technologies used on the web (the other two are HTML and JavaScript). CSS stands for Cascading Style Sheets. The key words being ‘cascading’ and ‘style’ with cascading describing the way that one style can cascade from one to another. CSS is used to control the style of a web document in a simple and easy way. This lesson covers both the versions CSS1,CSS2 and CSS3, and gives a complete understanding of CSS, starting from its basics to advanced concepts.</p>
	    		 </div>
				</Summary>

				<History className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<img src="../../src/media/history-title.png" width="250" />
							<p className="history-text">CSS creation is credited to Norwegian Håkon Wium Lie, who in 1994 wanted to create a universal standardised style sheet for the World Wide Web. The first site that Lie trialled CSS on was the Arena web browser. From its first creation, Lie went on to co-create CSS1, CSS2 and RFC 2318 versions with Tim Berners-Lee and Robert Cailliau. In its first decade of existence (1994 – 2004) CSS, in all its specifications, became an established web standard greatly influencing the look and accessibility of the world wide web as we know it today. CSS3 was issued in 1999.
							 Web standards are a topic that are close to Lie’s heart. Since delivering CSS he has petitioned major technology players such as Microsoft and other browsers to support common web standards and continues to develop CSS’s uses for web printing and pagination on screens. </p>
						</div>

						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<img src="../../src/media/css1-css2-css3-title.png" width="250" />
						 <ul>
							<li><strong>CSS (1996)</strong> - allows the user to select font style and size and change the colour of the text and background.</li>
							<li><strong>CSS2 (1998)</strong> - has capabilities that allows the user to design page layout.</li>
							<li><strong>CSS3 (1999)</strong> - allows the user to create presentations from documents and to select from a wider range of fonts including those from Google and Typecast. Uniquely, CSS3 allows the user to incorporate rounded borders and use multiple columns.</li>
                         </ul>
						</div>
					</History>


					<KeyWords className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<img src="../../src/media/keywords-title.png" width="350" />
							<p className="keyword">Selector</p>
							<p className="keyword-definition">This is the HTML element name at the start of the ruleset. It defines the element(s) to be styled (in this example, "p" elements). To style a different element, change the selector.</p>
							<p className="keyword">Declaration</p>
							<p className="keyword-definition">This is a single rule like color: red;. It specifies which of the element's properties you want to style.</p>
							<p className="keyword">Properties</p>
							<p className="keyword-definition">These are ways in which you can style an HTML element. (In this example, color is a property of the p elements.) In CSS, you choose which properties you want to affect in the rule.</p>
							<p className="keyword">Property value</p>
							<p className="keyword-definition">To the right of the property—after the colon—there is the property value. This chooses one out of many possible appearances for a given property. (For example, there are many color values in addition to red.)</p>
							<p>Note the other important parts of the syntax:</p>
			                <ul>
								<li>Apart from the selector, each ruleset must be wrapped in curly braces. (<code>{ }</code>)</li>
								<li>Within each declaration, you must use a colon (<code>:</code>) to separate the property from its value or values.</li>
								<li>Within each ruleset, you must use a semicolon (<code>;</code>) to separate each declaration from the next one.</li>
			                </ul>
                              <p>Let’s start with learning how we can include CSS in our projects. There are typically three ways we do that.</p>
                       </div>
					</KeyWords>

					<Lessons>
						<p className="lesson-one">1. Inline CSS First off, we can include CSS directly in our HTML elements. For this, we make use of the style attribute and then we provide properties to it.  Advice: In more advanced languages and development you should not use inline CSS whenever possible.</p>

						<p><code><h1 style=&quot;color: green&quot;> I love Code as Kids! </h1></code></p>

					   <p>Here we&rsquo;re giving it the property of color, and setting the value to blue, which results in the following:</p>

					   <p>We can also set multiple properties inside the style tag if we wanted. However, I don&rsquo;t want to continue down this path, as things start to get messy if our HTML is cluttered with lots of CSS inside it.</p>

					   <p className="lesson-two">2. Internal CSS The other way to include CSS is using the style element in the head section of the HTML document. This is called internal styling. <code><head>   <style>   h1 {color: green;   }   </style>  </head></code></p>

					   <p>In the style element, we can give the styling to our HTML elements by selecting the element(s) and provide styling</p>

					   <p><code><div class='container'>   <h1 class='heading1'>   Learning CSS on Code as Kids is so fun!  </h1> </div></code></p>

					   <p><code>.container {width: 500px;   height: 100px;   background-color: lightcyan;   text-align: center;  } .heading1 {font - family: 'Courier New';   color: tomato;  }</code></p>

					   <p>As you can see in the above example, we have a div element with the class of container. Inside this div, there is an h1 tag with some text inside it. In the stylesheet, we select the container class and set its width, height, background-color, and text-align.</p>

					   <p>Finally, we select the .heading1 class&#8202;&mdash;&#8202;which is applied to the h1 tag&#8202;&mdash;&#8202;and give it the attributes of font-family and color.</p>
					</Lessons>


						<Faq className="row">
						 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<img src="../../src/media/faq-title.png" width="250" />

						    <a href="#question-one" className="btn btn-info" data-toggle="collapse">What should I know/have before starting this lesson?</a>
						    <div id="question-one" className="collapse">
							<p><strong>A:</strong> You should be familiar with:</p>
							 <ul>
								<li>Basic word processing using any text editor.</li>
								<li>How to create directories and files.</li>
								<li>How to navigate through different directories.</li>
								<li>Internet browsing using popular browsers like Internet Explorer or Firefox.</li>
								<li>Developing simple Web Pages using HTML or XHTML.</li>
						     </ul> 

							</div>
                            <br/>
						    <a href="#question-two" className="btn btn-info" data-toggle="collapse">Why to Learn CSS?</a>
							<div id="question-two" className="collapse">
							<p><strong>A:</strong> Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.
                                Even if you eventually want to focus on the backend of programing, knowing the basics of the frontend  I will list down some of the key advantages of learning CSS:</p>
							<ul>
								<li>Create Stunning Website - CSS handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs,
									how columns are sized and laid out, what background images or colors are used, layout designs,variations in display for different devices and screen sizes as well as a variety of other effects.</li>
								<li>Become a web designer - If you want to start a career as a professional web designer, HTML and CSS designing is a must skill.</li>
								<li>Control web - CSS is easy to learn and understand but it provides powerful control over the presentation of an HTML document. Most commonly, CSS is combined with the markup languages HTML or XHTML.</li>
								<li>Learn other languages - Once you understand the basics of HTML and CSS then other related technologies like javascript, php, or angular are become easier to understand.</li>
							</ul>

							</div>
							<br/>
						    <a href="#question-three" className="btn btn-info" data-toggle="collapse">What are the Benefits of CSS?</a>
							<div id="question-three" className="collapse">
							<p><strong>A:</strong> As mentioned before, CSS is one of the most widely used style languages over the web. I'm going to list few of them here:</p>
							<ul>
								<li>CSS saves time - You can write CSS once and then reuse the same sheet in multiple HTML pages. You can define a style for each HTML element and apply it to as many Web pages as you want.</li>
								<li>Pages load faster - If you are using CSS, you do not need to write HTML tag attributes every time. Just write one CSS rule of a tag and apply it to all the occurrences of that tag. So less code means faster download times.</li>
								<li>Easy maintenance - To make a global change, simply change the style, and all elements in all the web pages will be updated automatically.</li>
								<li>Superior styles to HTML - CSS has a much wider array of attributes than HTML, so you can give a far better look to your HTML page in comparison to HTML attributes.</li>
								<li>Multiple Device Compatibility - Style sheets allow content to be optimized for more than one type of device. By using the same HTML document, different versions of a website can be presented for handheld devices such as PDAs and cell phones or for printing.</li>
								<li>Global web standards - Now HTML attributes are being deprecated and it is being recommended to use CSS. It's a good idea to start using CSS in all the HTML pages to make them compatible with future browsers.</li>
							</ul>
							</div>
							<br/>
						    <a href="#question-four" className="btn btn-info" data-toggle="collapse">What about CSS4?</a>
							<div id="question-four" className="collapse">
							<p><strong>A:</strong> <p>The Working Group of W3C (w3.org), the group who discuss all technical aspects of CSS&rsquo;s progression and answers queries from a public mailing list, are continuously working on improvements within CSS. Rather than creating an entirely
							new version called CSS4 it seems that the w3.org are adding new, smaller components to the existing CSS versions via extensions. But before we ask where CSS4 is, it&rsquo;s worth noting that many argue that CSS3 doesn&rsquo;t exist. Instead, CSS 3 and 4 are rather
							terms used to define any updates that happened after CSS2 (and are, therefore, officially called CSS2.1). In these terms, CSS4 has happened but it will never be called CSS4. The limits to CSS&rsquo;s capabilities are endless, hence they are continually developing.
							CSS-Tricks, a site that covers stories about the development of CSS amongst others, regularly encourages its readers to expand and experiment with CSS. For instance, one story reveals the fun/useful things to try with the Universal (*) selector. For instance, using
							a border-box on web pages or transitions to pimp a WordPress site.</p></p>
							</div>

					      </div>
	    			 </Faq>

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

	    	</AboutWrapper>

	    	</BodyTag>

	    </ErrorBoundary>
    );
  }
}

export default Css;
