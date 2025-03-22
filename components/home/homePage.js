import React from "react";
import { homePageStyles } from "./homePageStyles";
import { globalStyles } from "@/styles/globalStyles";

const homePage = () => {
  return (
    <>
      <style jsx>{globalStyles}</style>
      <style jsx>{homePageStyles}</style>
      <div className={"commonContainer"}>
        <div className={"homeMainContainer"}>homePage</div>
      </div>
    </>
  );
};

export default homePage;
