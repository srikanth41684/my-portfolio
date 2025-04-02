import React from "react";
import dwelloWeb from "@/public/projects/dwello.png";
import { projectPageStyles } from "./projectPageStyles";
import Image from "next/image";
import { globalStyles } from "@/styles/globalStyles";
import Link from "next/link";

const ProjectPage = () => {
  const projects = [
    {
      id: 1,
      title: "Dwello",
      about:
        "Dwello is a real estate platform that helps users buy, sell, and explore properties with detailed insights. It offers property listings with real-time updates, advanced search filters, and location-based recommendations. The website is designed to provide a seamless experience for home buyers by integrating interactive maps, virtual property tours, and expert guidance. It connects buyers with verified developers and agents, ensuring a transparent and hassle-free property search. The platform focuses on user-friendly navigation, fast-loading pages, and mobile responsiveness, making real estate transactions easier and more efficient.",
      url: "https://dwello.in",
      technologies: ["nextjs", "javascript", "reactjs", "styled-jsx", "axios"],
      image: dwelloWeb,
    },
    {
      id: 2,
      title: "Dwello",
      about:
        "Dwello is a real estate platform that helps users buy, sell, and explore properties with detailed insights. It offers property listings with real-time updates, advanced search filters, and location-based recommendations. The website is designed to provide a seamless experience for home buyers by integrating interactive maps, virtual property tours, and expert guidance. It connects buyers with verified developers and agents, ensuring a transparent and hassle-free property search. The platform focuses on user-friendly navigation, fast-loading pages, and mobile responsiveness, making real estate transactions easier and more efficient.",
      url: "https://dwello.in",
      technologies: ["nextjs", "javascript", "reactjs", "styled-jsx", "axios"],
      image: dwelloWeb,
    },
    {
      id: 3,
      title: "Dwello",
      about:
        "Dwello is a real estate platform that helps users buy, sell, and explore properties with detailed insights. It offers property listings with real-time updates, advanced search filters, and location-based recommendations. The website is designed to provide a seamless experience for home buyers by integrating interactive maps, virtual property tours, and expert guidance. It connects buyers with verified developers and agents, ensuring a transparent and hassle-free property search. The platform focuses on user-friendly navigation, fast-loading pages, and mobile responsiveness, making real estate transactions easier and more efficient.",
      url: "https://dwello.in",
      technologies: ["nextjs", "javascript", "reactjs", "styled-jsx", "axios"],
      image: dwelloWeb,
    },
  ];
  return (
    <>
      <style jsx>{globalStyles}</style>
      <style jsx>{projectPageStyles}</style>
      <div className={"commonContainer"}>
        <div className={"projectsSection"}>
          <div className={"mainTitle projectMainTitle"}>Project</div>
          <hr className="hrLine" />
          <div className={"projectsContainer"}>
            {projects.map((project, index) => (
              <div className={"projectFullContainer"}>
                <div className={"projectContainer"}>
                  <div className={"projectTitleContainer"}>
                    <div className={"aboutProjectContainer"}>
                      <div className={"projectTitle"}>{project?.title}</div>
                      <div className={"projectAbout"}>{project?.about}</div>
                    </div>
                    <div classNmae={"projectViewContainer"}>
                      <Link href={project?.url} target="_blank">
                        <div className={"projectView"}>Live view</div>
                      </Link>
                      <div className={"techContainer"}>
                        {project?.technologies?.map((tech, index) => (
                          <div className={"tectTitle"} key={index}>
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={"projectImageContainer"}>
                    <Image
                      src={project?.image}
                      className={"projectImage"}
                      width={400}
                      height={400}
                      alt={project?.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
