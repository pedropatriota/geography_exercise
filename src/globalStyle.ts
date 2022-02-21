import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased; 
  width: 90%;
  margin: 0 auto;

  @media(min-width: 768px){
    width:80%;
  }
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root {
  isolation: isolate;
  height: 100%;
}
`;
/* END - CSS Reset */
