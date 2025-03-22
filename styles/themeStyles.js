import css from "styled-jsx/css";

export const lightTheme = css.global`
  :root {
    --bg-color: #ffffff;
    --text-color: #000000;
    --container-bg: #f9f9f9;
    --button-bg: #0070f3;
    --button-text: #ffffff;
  }
`;

export const darkTheme = css.global`
  :root {
    --bg-color: #080015;
    --text-color: #ffffff;
    --container-bg: #1e1e1e;
    --button-bg: #bb86fc;
    --button-text: #000000;
  }
`;
