import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html {
	-webkit-text-size-adjust: 100%;
	-ms-text-size-adjust:     100%;
    overflow-x: hidden;
}

body {
	margin: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
	display: block;
}

audio,
canvas,
progress,
video {
	display: inline-block;
	vertical-align: baseline;
}

audio:not([controls]) {
	display: none;
	height: 0;
}

[hidden],
template {
	display: none;
}

a {
	background-color: transparent;
}

a:active,
a:hover {
	outline: 0;
}

abbr[title] {
	border-bottom: 1px dotted;
}

b,
strong {
	font-weight: bold;
}

dfn {
	font-style: italic;
}

h1 {
	font-size: 2em;
	margin: 0.67em 0;

}
h1, h2, h3, h4, h5, h6{
	font-family: 'Montserrat', sans-serif;
}
p{
	font-family: 'Montserrat', sans-serif;
}
mark {
	background: #ff0;
	color: #000;
}

small {
	font-size: 80%;
}

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sup {
	top: -0.5em;
}

sub {
	bottom: -0.25em;
}

img {
	border: 0;
}

svg:not(:root) {
	overflow: hidden;
}

figure {
	margin: 1em 40px;
}

hr {
	box-sizing: content-box;
	height: 0;
}

pre {
	overflow: auto;
}

code,
kbd,
pre,
samp {
	font-family: monospace, monospace;
	font-size: 1em;
}

button,
input,
optgroup,
select,
textarea {
	color: inherit;
	font: inherit;
	margin: 0;
}

button {
	overflow: visible;
}

button,
select {
	text-transform: none;
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
	-webkit-appearance: button;
	cursor: pointer;
}

button[disabled],
html input[disabled] {
	cursor: default;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
	border: 0;
	padding: 0;
}

input {
	line-height: normal;
}

input[type="checkbox"],
input[type="radio"] {
	box-sizing: border-box;
	padding: 0;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
	height: auto;
}

input[type="search"] {
	-webkit-appearance: textfield;
	box-sizing: content-box;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
	-webkit-appearance: none;
}

fieldset {
	border: 1px solid #c0c0c0;
	margin: 0 2px;
	padding: 0.35em 0.625em 0.75em;
}

legend {
	border: 0;
	padding: 0;
}

textarea {
	overflow: auto;
}

optgroup {
	font-weight: bold;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

td,
th {
	padding: 0;
}

/*--------------------------------------------------------------
# Typography
--------------------------------------------------------------*/
body,
button,
input,
select,
textarea {
	color: #404040;
	font-size: 16px;
	font-size: 1rem;
	line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Arvo', serif;
	clear: both;
}

p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5em;
    font-weight: 600;
	margin-bottom: 1.5em;
}

dfn,
cite,
em,
i {
	font-style: italic;
}

blockquote {
	margin: 0 1.5em;
}

address {
	margin: 0 0 1.5em;
}

pre {
	background: #eee;
	font-family: "Courier 10 Pitch", Courier, monospace;
	font-size: 15px;
	font-size: 0.9375rem;
	line-height: 1.6;
	margin-bottom: 1.6em;
	max-width: 100%;
	overflow: auto;
	padding: 1.6em;
}

code,
kbd,
tt,
var {
	font-family: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
	font-size: 15px;
	font-size: 0.9375rem;
}

abbr,
acronym {
	border-bottom: 1px dotted #666;
	cursor: help;
}

mark,
ins {
	background: #fff9c0;
	text-decoration: none;
}

big {
	font-size: 125%;
}

/*--------------------------------------------------------------
# Elements
--------------------------------------------------------------*/
html {
	box-sizing: border-box;

}

*,
*:before,
*:after { /* Inherit box-sizing to make it easier to change the property for components that leverage other behavior; see http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */
	box-sizing: inherit;
}

body {
	background: #fff; /* Fallback for when there is no custom background color defined. */
	max-width: 1400px;
	margin: 0 auto;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
	content: "";
}

blockquote,
q {
	quotes: "" "";
}

hr {
	background-color: #ccc;
	border: 0;
	height: 1px;
	margin-bottom: 1.5em;
}

ul,
ol {
	margin: 0 0 1.5em 3em;
}

ul {
	list-style: disc;
}

ol {
	list-style: decimal;
}

li > ul,
li > ol {
	margin-bottom: 0;
	margin-left: 1.5em;
}

dt {
	font-weight: bold;
}

dd {
	margin: 0 1.5em 1.5em;
}

img {
	height: auto; /* Make sure images are scaled correctly. */
	max-width: 100%; /* Adhere to container width. */
}

table {
	margin: 0 0 1.5em;
	width: 100%;
}

/*--------------------------------------------------------------
# Forms
--------------------------------------------------------------*/
button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
	border: 1px solid;
	border-color: #ccc #ccc #bbb;
	border-radius: 3px;
	background: #e6e6e6;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 15px 17px rgba(255, 255, 255, 0.5), inset 0 -5px 12px rgba(0, 0, 0, 0.05);
	color: rgba(0, 0, 0, .8);
	font-size: 12px;
	font-size: 0.75rem;
	line-height: 1;
	padding: .6em 1em .4em;
	text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);
}

button:hover,
input[type="button"]:hover,
input[type="reset"]:hover,
input[type="submit"]:hover {
	border-color: #ccc #bbb #aaa;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 15px 17px rgba(255, 255, 255, 0.8), inset 0 -5px 12px rgba(0, 0, 0, 0.02);
}

button:focus,
input[type="button"]:focus,
input[type="reset"]:focus,
input[type="submit"]:focus,
button:active,
input[type="button"]:active,
input[type="reset"]:active,
input[type="submit"]:active {
	border-color: #aaa #bbb #bbb;
	box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.5), inset 0 2px 5px rgba(0, 0, 0, 0.15);
}

input[type="text"],
input[type="email"],
input[type="url"],
input[type="password"],
input[type="search"],
textarea {
	color: #666;
	border: 1px solid #ccc;
	border-radius: 3px;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="password"]:focus,
input[type="search"]:focus,
textarea:focus {
	color: #111;
}

input[type="text"],
input[type="email"],
input[type="url"],
input[type="password"],
input[type="search"] {
	padding: 3px;
}

textarea {
	padding-left: 3px;
	width: 100%;
}


/*--------------------------------------------------------------
# Effects
--------------------------------------------------------------*/
/* Shake */
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

/* Hang */
@keyframes hang {
	50% {
		transform: translateY(3px);
	}

	100% {
		transform: translateY(6px);
	}
}


/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
.header-parent{
  display: block;
  width: 100%;
  height: auto;
  margin: 0 auto;
  border: 0;
}

.social-block{
  display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 120px;
	width: 100%;
	border: 0;
}

.logo{
  height: 400px;
	width: 400px;
	position: absolute;
}


/*--------------------------------------------------------------
# Navigation
--------------------------------------------------------------*/
.nav-block{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 80px;
  width: 100%;
  padding-top: 8em;
  border: 0;
}

 .btn-lg{
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
    background: url(../../src/media/button-background-main-navbar.png);
    background-size: contain;
    background-repeat: no-repeat;
    box-shadow: none;
    border: none;
    margin: 0em 0.5em 0em 0em;
    width: 150px;
    height: 55px;
}

.btn-success:hover {
    background: url(../../src/media/button-background-main-navbar.png);
    background-size: contain;
    background-repeat: no-repeat;
    box-shadow: none;
    border: none;
    margin: 0em 0.5em 0em 0em;
    width: 150px;
    height: 55px;
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.5s;

  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

 .btn-sm{
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
   padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
   background: url(../../src/media/small-banana-background.png) !important;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    box-shadow: none;
    border: none;
    margin: 0em 0.5em 0em 0em;
    width: 150px;
    height: 169px;
    transform: rotate(25deg) translateX(0px);

}

.btn-sm:hover{
    background: url(../../src/media/small-banana-background.png) !important;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    box-shadow: none;
    border: none;
    margin: 0em 0.5em 0em 0em;
    width: 150px;
    height: 169px;
    transform: rotate(15deg) translateX(0px);
    transform: rotate(15deg) translateX(0px);
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: hang 1.5s;

  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}
.nav-link{
  color: #fff;
  display: inline-block;
  font-weight: 800;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
   padding: 10px 16px;
   font-size: 18px;
   line-height: 1.3333333;
   border-radius: 6px;
   background: url(../../src/media/button-background-main-navbar.png);
   background-size: contain;
   background-repeat: no-repeat;
   box-shadow: none;
   border: none;
   margin: 0em 0.5em 0em 0em;
   width: 150px;
   height: 55px;
}

.nav-link:hover {
    color: #fff;
 display: inline-block;
 font-weight: 800;
 text-align: center;
 white-space: nowrap;
 vertical-align: middle;
   background: url(../../src/media/button-background-main-navbar.png);
   background-size: contain;
   background-repeat: no-repeat;
   box-shadow: none;
   border: none;
   margin: 0em 0.5em 0em 0em;
   width: 150px;
   height: 55px;
 /* Start the shake animation and make the animation last for 0.5 seconds */
 animation: shake 0.5s;

 /* When the animation is finished, start again */
 animation-iteration-count: infinite;
}

.social-media-link{
   display: inline-block;
   font-weight: 400;
   text-align: center;
   white-space: nowrap;
   vertical-align: middle;
  padding: 5px 10px;
   font-size: 12px;
   line-height: 1.5;
   border-radius: 3px;
  background: url(../../src/media/small-banana-background.png) !important;
   background-size: 100% 100%;
   background-repeat: no-repeat;
   box-shadow: none;
   border: none;
   margin: 0em 0.5em 0em 0em;
   width: 150px;
   height: 169px;
   transform: rotate(25deg) translateX(0px);

}

.social-media-link:hover{
   background: url(../../src/media/small-banana-background.png) !important;
   background-size: 100% 100%;
   background-repeat: no-repeat;
   box-shadow: none;
   border: none;
   margin: 0em 0.5em 0em 0em;
   width: 150px;
   height: 169px;
   transform: rotate(15deg) translateX(0px);
   transform: rotate(15deg) translateX(0px);
 /* Start the shake animation and make the animation last for 0.5 seconds */
 animation: hang 1.5s;

 /* When the animation is finished, start again */
 animation-iteration-count: infinite;
}

.fa-instagram{
 color: #573F26;
 margin-left: 1em;
}

.fa-twitter{
  color: #573F26;
  margin-left: 1em;
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
.footer-wrapper{
  padding: 10px;
  opacity: 0.7;
}

.footer{
  text-align: center;
  display: table;
  margin-right: auto;
  margin-left: auto;
  color: #000;
}

 .footer-content{
    background: url(../../src/media/footer-wood-textarea.png);
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: auto;
    margin-right: auto;
    display: table;
    width: 650px;
    height: 355px;
}

 .footer-content:hover{
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.5s;

  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

.footer-content p{
  color: white;
   font-size: 1.15em;
}

.footer-content a{
  color: white;
  font-size: 1.15em;
}

.footer-logo{
   margin-top: 5.5em;
   margin-bottom: 1em;
}

/*--------------------------------------------------------------
# Body/Content
--------------------------------------------------------------*/
.body-tag{
  position: absolute;
  left: 0; top: 0;
  right: 0; bottom: auto;
}

.app-wrapper{
  margin: 0 auto;
  background: url('../../src/media/code-as-kids-medium-desktop-background.gif');
  background-size: cover;
}

/*--------------------------------------------------------------
# Home
--------------------------------------------------------------*/
 .timeline-list{
   list-style: none;
   margin: 0 0 1.5em -1em;
 }

.welcome-introduction{
  height: 300px;
  margin: 0 auto;
  border: 0;
  text-align: center;
  width: 900px;
  margin: 2em;
  padding: 7em 10em 7em 10em;
  border: 0;
  background: url(../../src/media/jungle-textbox-v3.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-right: auto;
  margin-left: auto;
  display: table;

}

 .intro-and-mission {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 300px;
	margin: 0 auto;
	border: 0;
}

.intro-video{
    text-align: center;
    width: 900px;
    margin: 2em;
    padding: 7em 10em 7em 10em;
    border: 0;
    background: url(../../src/media/jungle-textbox-v3.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.mission{
    text-align: center;
    width: 900px;
    margin: 2em;
    padding: 7em 10em 7em 10em;
    border: 0;
    background: url(../../src/media/jungle-textbox-v3.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.timeline{
  margin-right: auto;
  margin-left: auto;
  border: 0;
  font-size: 24px;
  color: ffff#;
  width: 100%;
  text-align: center;
  padding-top: 6em;
  padding-bottom: 6em;
  margin-top: 3em;
  border: 0;
  background: url(../../src/media/jungle-textbox-v3.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.about-wrapper{
  margin: 0 auto;
  background: url('../../src/media/code-as-kids-medium-desktop-background.gif');
  background-size: cover;
}

.block-wrapper{
  display: flex;
  justify-content: space-around;
  width: 99.9%;
  border: 0;
}
.faq-block{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 0;
  background: url(../../src/media/jungle-textbox-v3.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.faq{
  display: block;
  justify-content: center;
  height:  auto;
  margin-right: auto;
    margin-left: auto;
    display: table;
    width: min-content;
}

.faq-title{
  margin-left: auto;
  margin-right: auto;
  display: table;  
}

.faq p {
    font-family: 'Montserrat',sans-serif;
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: 1.5em;
    text-align: left;
    margin: 1em 3em 0em 9em;
}

.learn-more{
  display: block;
  margin: 0 auto;
  height: 375px;
  width: 90vw;
  border: 0;
}

.learn-more-item{
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 250px;
  border: 0;
}

.btn-info {
    color: #fff;
    text-align: left;
    background: url(../../src/media/log-background.png);
    background-size: revert;
    background-repeat: no-repeat;
    box-shadow: none;
    border: none;
    background-color: transparent;
    border-color: transparent;
    width: 1666px;
    height: 208px;
    font-size: 3.25em;
    font-weight: 800;
    padding: 2em 1em 1em 5em;
    margin: 1em 1em 1em 1em;
}

btn-info:hover {
    color: #fff;
    text-align: left;
    background: url(../../src/media/log-background.png);
    background-size: revert;
    background-repeat: no-repeat;
    box-shadow: none;
    border: none;
    background-color: transparent;
    border-color: transparent;
    width: 1666px;
    height: 208px;
    font-size: 3.25em;
    font-weight: 800;
    padding: 2em 1em 1em 5em;
    margin: 1em 1em 1em 1em;
}

.accordion {
    color: #fff;
    text-align: left;
    background: url(../../src/media/log-background.png);
    background-size: revert;
    background-repeat: no-repeat;
    box-shadow: none;
    border: none;
    background-color: transparent;
    border-color: transparent;
    width: 1666px;
    height: 208px;
    font-size: 3.25em;
    font-weight: 800;
    padding: 2em 1em 1em 5em;
    margin: 1em 1em 1em 1em;
}

.accordion:hover {
    color: #fff;
    text-align: left;
    background: url(../../src/media/log-background.png);
    background-size: revert;
    background-repeat: no-repeat;
    box-shadow: none;
    border: none;
    background-color: transparent;
    border-color: transparent;
    width: 1666px;
    height: 208px;
    font-size: 3.25em;
    font-weight: 800;
    padding: 2em 1em 1em 5em;
    margin: 1em 1em 1em 1em;
}

.collapse.in {
    display: block;
    background: white;
    margin: -7em 8em 0em 8em;
    padding: 8em 0em 8em 0em;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}

/*--------------------------------------------------------------
# Blog
--------------------------------------------------------------*/


/*--------------------------------------------------------------
# Coding
--------------------------------------------------------------*/


/*--------------------------------------------------------------
# Lessons
--------------------------------------------------------------*/


/*--------------------------------------------------------------
# HTML Lesson
--------------------------------------------------------------*/


/*--------------------------------------------------------------
# CSS Lesson
--------------------------------------------------------------*/


/*--------------------------------------------------------------
# JavaScript Lesson
--------------------------------------------------------------*/


/*--------------------------------------------------------------
# jQuery Lesson
--------------------------------------------------------------*/


/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/


  @media only screen and (max-width: 1441px) {


  }

  @media only screen and (min-width: 1024px) and (max-width: 1440px) {

  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {

  }

  @media only screen and (min-width: 640px) and (max-width: 767px) {

  }

  @media only screen and (min-width: 0px) and (max-width: 639px) {

  }

`;

export default GlobalStyles;
