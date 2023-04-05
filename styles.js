import { createGlobalStyle } from "styled-components";
import Link from "next/link";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0 auto;
    font-family: system-ui;
  }
  
  h1 {
    font-size:1.5rem;
  }

  ul {
     padding: 0;
  }

  p {
    margin:5px;
  }
  
  a{
     text-decoration: none;
     color:black;
  }

  :root {
    --red-vine-color:#9C4041;
    --rosehip-color:#E5CBC1;
    --antique-color:#F0E7DA;
    --rain-storm-color:#46B4B3;
    --linen-color:#E3E4E0;
    --white-color:#F5F5F5;
  }
}
`;
