import React from "react";
import { headerStyles } from "./headerStyles";
import Link from "next/link";

const Header = () => {
  const data = [
    {
      title: "Home",
      link: "/about",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Project",
      link: "/about",
    },
    {
      title: "Skills",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/about",
    },
  ];
  return (
    <>
      <style jsx>{headerStyles}</style>
      <header className="header">
        <div className="container">
          <div className="logo">SRIKANTH</div>
          <nav className={`nav`}>
            <ul className="nav-list">
              {data.map((tab) => (
                <li key={tab} className="nav-item">
                  <Link href={tab.link} legacyBehavior>
                    <a className="nav-link">{tab.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
