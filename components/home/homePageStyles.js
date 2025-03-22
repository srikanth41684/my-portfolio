import css from "styled-jsx/css";

export const homePageStyles = css`
  .homeMainContainer {
    max-width: 1366px;
    margin: 0 auto;
    padding: 78px 30px 30px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
  }

  .titlesContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .nameTitle {
    color: var(--text-color);
    font-size: 42px;
    line-height: 32px;
    font-weight: 700;
  }

  .jobTitle {
    color: var(--text-color);
    font-size: 32px;
    line-height: 25px;
    font-weight: 700;
  }

  .ButtonsContainer {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .socilaMediaContainer {
    display: flex;
    gap: 20px;
  }

  .socialIconsParent {
    background-color: #0e2335;
    border-radius: 4px;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  :global(.socialIcon) {
    padding: 8px;
  }

  .resumeBtnContainer {
    text-decoration: none;
  }

  .resumeBtn {
    cursor: pointer;
    background-color: #0e2335;
    border-radius: 8px;
    text-align: center;
    padding: 18px 30px;
    font-size: 16px;
    line-height: 12px;
    color: #fff;
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    .nameTitle {
      font-size: 22px;
      line-height: 18px;
    }

    .jobTitle {
      font-size: 20px;
      line-height: 17px;
    }

    .socialIconsParent {
      width: 40px;
      height: 40px;
    }

    .resumeBtn {
      padding: 15px 25px;
      font-size: 14px;
      line-height: 12px;
    }
  }
`;
