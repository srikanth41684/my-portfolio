import css from "styled-jsx/css";

export const aboutPageStyles = css`
  .aboutMainContainer {
    max-width: 1366px;
    margin: 0 auto;
    padding: 65px 30px 30px;
  }

  .aboutDataContainer {
    margin: 20px;
    display: flex;
    gap: 60px;
    padding: 70px 50px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .profileIMageContainer {
    width: 354px;
    height: 354px;
    border-radius: 50%;
    overflow: hidden;
  }

  :globa(.profileImage) {
    object-fit: cover;
  }

  .description {
    flex: 1;
    color: white;
    font-size: 20px;
    align-items: center;
    display: flex;
    font-weight: 500;
    line-height: 32px;
    padding: 10px 30px;
  }

  @media screen and (max-width: 768px) {
    .aboutMainContainer {
      padding: 65px 20px 30px;
    }
    .aboutDataContainer {
      flex-direction: column;
      padding: 10px;
      margin: 50px 0px 20px;
      align-items: center;
      gap: 30px;
    }
    .profileIMageContainer {
      width: 252px;
      height: 252px;
    }

    .description {
      font-size: 16px;
      line-height: 27px;
      padding: 10px;
    }
  }
`;
