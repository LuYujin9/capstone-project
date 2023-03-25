import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0 auto;
    font-family: system-ui;
    display:block; 
  }

  li {
    list-style-type:none;
  }
  
  @media only screen and (max-width:414px){
    body {
      width:100vw;
    }
  }
  @media only screen and (min-width:415px && max-width:768px){
    body {
      width:90vw;
    }
  }
  @media only screen and (min-width:769px){
    body {
      width:691px;
    }
  }
  p{
    margin:5px;
  }
:root{
  --red-vine-color:#BA494B;
  --rosehip-color:#E5CBC1;
  --antique-color:#F0E7DA;
  --rain-storm-color:#46B4B3;
  --linen-color:#E3E4E0;
  --white-color:#F5F5F5;
  }
}
`;
