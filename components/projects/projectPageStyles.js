import css from "styled-jsx/css";

export const projectPageStyles = css`
  .projectsSection {
    max-width: 1366px;
    margin: 0 auto;
    padding: 65px 30px 30px;
  }

  .projectMainTitle {
    position: sticky;
    top: 80px;
  }

  .hrLine {
    position: sticky;
    top: 130px;
  }

  .title {
    font-size: 2.5rem;
    margin-bottom: 50px;
  }

  .projectsContainer {
    position: relative;
  }

  .projectFullContainer {
    flex-direction: column;
    align-items: center;
    height: 81vh;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 132px;
  }

  .projectContainer {
    display: flex;
    gap: 30px;
    background: #ffffff0d;
    max-width: 999px;
    border-radius: 20px;
    overflow: hidden;
    transition: background-color 0.3s ease;
  }

  .projectContainer:hover {
    background: #ffffff20;
  }

  .projectTitleContainer {
    display: flex;
    padding: 40px 5px 30px 40px;
    flex-direction: column;
    gap: 20px;
    width: 150%;
  }

  .aboutProjectContainer {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .projectTitle {
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 25px;
    background: linear-gradient(to right, #f32170, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 100% 100%;
    background-position: center;
    display: inline-block;
  }

  .projectAbout {
    font-size: 14px;
    line-height: 21px;
    color: #cbd5e1;
    font-weight: 400;
  }

  .projectViewContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .projectView {
    border: 1px solid #f32170;
    border-radius: 5px;
    font-size: 16px;
    color: #cbd5e1;
    padding: 8px 15px;
    display: inline-flex;
    cursor: pointer;
  }

  .techContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding-top: 10px;
  }

  .tectTitle {
    background: #be123c;
    border-radius: 25px;
    padding: 5px 15px;
    display: inline-flex;
    color: #cbd5e1;
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
    text-transform: uppercase;
  }

  .projectImageContainer {
    display: flex;
    align-items: flex-end;
    width: 40%;
  }

  :global(.projectImage) {
    width: 400px;
    height: 78%;
    object-fit: cover;
    object-position: left;
  }
`;
