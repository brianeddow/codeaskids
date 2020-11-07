import React, { Component } from "react";
import { COLORS } from "../../css/styles";
import styled from "styled-components";
import { ErrorBoundary } from "./ErrorBoundary";

const Colorways = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 30px;
`;

const Block = styled.div`
	display: inline-block;
	width: 60px;
	height: 500px;
	margin: 0 auto;
	border: 1px solid #000;
	background-color: ${props => props.color};
	filter: drop-shadow(10px 10px 4px #aaa);
`;

class Palette extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<ErrorBoundary>
	    	<Colorways>
	    	 <Block color={COLORS.dark_green} />
	    	 <Block color={COLORS.soft_blue} />
	    	 <Block color={COLORS.leaf_green} />
	    	 <Block color={COLORS.hilight_yellow} />
	    	</Colorways>

	    	<Colorways>
	    	 <Block color={COLORS.regular_wheat} />
	    	 <Block color={COLORS.light_brown} />
	    	 <Block color={COLORS.regular_brown} />
	    	 <Block color={COLORS.dark_orange} />
	    	</Colorways>
	    </ErrorBoundary>
    );
  }
}

export default Pallete;
