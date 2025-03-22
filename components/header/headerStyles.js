import css from "styled-jsx/css";

export const headerStyles = css`
  .header {
    background-color: var(--bg-color);
    backdrop-filter: blur(10px);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1366px;
    margin: 0 auto;
    padding: 30px;
  }

  .logo {
    font-size: 24px;
    line-height: 16px;
    font-weight: 700;
    color: var(--text-color);
  }

  .menu-button {
    display: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  .nav {
    display: flex;
  }

  .nav-list {
    display: flex;
    list-style: none;
    gap: 30px;
  }

  .nav-item {
    // padding: 0.5rem;
  }

  .nav-link {
    font-size: 16px;
    line-height: 14px;
    font-weight: 500;
    color: #a6acaf;
    text-decoration: none;
    text-transform: upperCase;
    transition: color 0.3s ease;
    position: relative;
    padding: 5px;
  }

  .nav-link:hover {
    color: #ffffff; /* White on hover */
  }

  .nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease-out, right 0.3s ease-out;
  }

  .nav-link:hover::after {
    width: 100%;
    right: 0;
  }

  .nav-link:not(:hover)::after {
    width: 0;
    right: 100%;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .menu-button {
      display: block;
    }

    .nav {
      position: absolute;
      top: 60px;
      right: 0;
      background: #1f2937;
      width: 100%;
      display: none;
      flex-direction: column;
      text-align: center;
    }

    .nav.open {
      display: flex;
    }

    .nav-list {
      flex-direction: column;
      gap: 0;
    }

    .nav-item {
      border-bottom: 1px solid #374151;
    }
  }
`;
