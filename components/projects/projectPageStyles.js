import css from "styled-jsx/css";

export const projectPageStyles = css`
  .projectsSection {
    padding: 100px 20px;
    background: var(--bg-color);
    color: white;
    text-align: center;
    min-height: 200vh;
  }

  .title {
    font-size: 2.5rem;
    margin-bottom: 50px;
  }

  .projectsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100vh;
  }
`;
