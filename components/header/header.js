import React from "react";
import { headerStyles } from "./headerStyles";

const Header = () => {
  const data = [
    {
      title: "About",
      link: "/about",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "About",
      link: "/about",
    },
  ];
  return (
    <>
      <style jsx>{headerStyles}</style>
      <div className={"headerMainContainer"}>
        <div>helo</div>
      </div>
    </>
  );
};

export default Header;
