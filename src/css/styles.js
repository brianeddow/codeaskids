import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  .timeline-list{
   color: red !important;
  }

  @media only screen and (max-width: 1441px) {
      .btn-success{
      color: red !important; 
     }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1440px) {
        .btn-success{
      color: red !important; 
     }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
        .btn-success{
      color: red !important; 
     }
  }

  @media only screen and (min-width: 640px) and (max-width: 767px) {
        .btn-success{
      color: red !important; 
     }
  }

  @media only screen and (min-width: 0px) and (max-width: 639px) {
        .btn-success{
      color: red !important; 
     }
  }

`;

export default GlobalStyles;