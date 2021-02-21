import React, { Component } from "react";
import { COLORS } from "../../css/styles";
import styled from "styled-components";
import { ErrorBoundary } from "./ErrorBoundary";


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
