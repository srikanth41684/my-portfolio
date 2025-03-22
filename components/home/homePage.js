import React from "react";
import { homePageStyles } from "./homePageStyles";
import { globalStyles } from "@/styles/globalStyles";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
// import resume from "@/public/Srikanth_Usnagiri.pdf";

const homePage = () => {
  return (
    <>
      <style jsx>{globalStyles}</style>
      <style jsx>{homePageStyles}</style>
      <div className={"commonContainer"}>
        <div className={"homeMainContainer"}>
          <div className={"titlesContainer"}>
            <div className={"nameTitle"}>Hello, I'm Srikanth Usnagiri</div>
            <div className={"jobTitle"}>
              I'm a{" "}
              <TypeAnimation
                sequence={[
                  "Frontend Engineer",
                  1000,
                  "React Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                  "",
                  100,
                ]}
                style={{ color: "#ffff00" }}
                speed={50}
                repeat={Infinity} // Infinite loop
              />
            </div>
          </div>
          <div className={"ButtonsContainer"}>
            <div className={"socilaMediaContainer"}>
              <div className={"socialIconsParent"}>
                <a
                  href="https://www.linkedin.com/in/srikanth-usnagiri-042484213"
                  target="_blank"
                >
                  <Image
                    src={"https://vishalsawai.netlify.app/assets/linkedin.svg"}
                    width={40}
                    height={40}
                    alt="linkIn"
                    className={"socialIconIn"}
                  />
                </a>
              </div>
              <div className={"socialIconsParent"}>
                <a href="https://github.com/srikanth41684" target="_blank">
                  <Image
                    src={"https://vishalsawai.netlify.app/assets/github.svg"}
                    width={40}
                    height={40}
                    alt="linkIn"
                    className={"socialIcon"}
                  />
                </a>
              </div>
            </div>
            <a
              href={"/Srikanth_Usnagiri.pdf"}
              target="_blank"
              className={"resumeBtnContainer"}
            >
              <div className={"resumeBtn"}>Resume</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default homePage;
