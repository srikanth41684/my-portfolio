import React from "react";
import { aboutPageStyles } from "@/components/about/aboutPageStyles";
import Image from "next/image";
import profile from "../../public/myImage.jpg";
import { globalStyles } from "@/styles/globalStyles";

const AboutPage = () => {
  return (
    <>
      <style jsx>{globalStyles}</style>
      <style jsx>{aboutPageStyles}</style>
      <div className={"commonContainer"}>
        <div className={"aboutMainContainer"}>
          <div className={"mainTitle"}>About</div>
          <hr className="hrLine" />
          <div className={"aboutDataContainer"}>
            <div className={"profileIMageContainer"}>
              <Image
                className={"profileImage"}
                src={profile}
                width={0}
                height={0}
                alt="My-Profile"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className={"description"}>
              Hello, I'm Vishal Sawai! I have a lot of fun creating interesting
              things, exploring new ideas, and learning new skills. I'm a quick
              learner and enjoy the process of figuring out solutions to
              challenges. I get a real kick out of solving problems and facing
              challenges. It's like a puzzle, and finding the right solution is
              pretty thrilling. I truly enjoy what I do because it's not just
              about writing code; it's about making things work in creative and
              functional ways.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
