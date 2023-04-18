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
    color:var(--bold-color);
  }
  
  a{
     text-decoration: none;
     color:black;
  }

  :root {
    --white-color:#F5F5F5;
    --background-color:#FAEDCD;
    --frame-color:#C07d53;
    --tag-color:#FFDE6D;
    --button-color:#144E5A;
    --bold-color:#1C2520;
  }
}
`;
