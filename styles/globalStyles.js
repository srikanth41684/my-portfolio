import css from "styled-jsx/css";

export const globalStyles = css`
  .commonContainer {
    background-color: var(--bg-color);
  }

  .mainTitle {
    text-align: center;
    text-transform: uppercase;
    margin: 15px 0px;
    color: var(--text-color);
    font-size: 28px;
    line-height: 36px;
    letter-spacing: 8px;
    font-weight: 600;
  }

  .hrLine {
    width: 250px;
    height: 1px;
    text-align: center;
    margin: 10px auto auto;
    background-color: white;
    border-radius: 50px;
  }

  @media screen and (max-width: 768px) {
    .mainTitle {
      font-size: 22px;
      line-height: 29px;
    }

    .hrLine {
      width: 200px;
    }
  }
`;
