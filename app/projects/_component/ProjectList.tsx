"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

import { Chip, Tab, Tabs } from "@nextui-org/react";
import { Project } from "@/lib/types/Project";

const projectList = () => {
  const projects: Project[] = [
    {
      projectName: "TeamUp Pro",
      techStacks: ["Supabase", "NextJs 13", "TailwindCSS", "NextUI"],
      demoLink: "#",
      image: "",
      description: (
        <div className="flex flex-col gap-3">
          <p>
            This is a side project that allows professionals to find and pitch
            requests posted by users.
          </p>
          <p>
            This project allows me to practice the fullstack development the
            hardcore way - ui/ux, database design, frontend, backend, SMTP, user
            authentication etc ..
          </p>
        </div>
      ),

      projectType: "Side Project",
    },
    {
      projectName: "Online Questionbank for DSE students",
      techStacks: ["Django", "PostgreSQL", "Boostrap", "Strip"],
      image: "",
      description: (
        <div className="flex flex-col gap-3">
          <p>
            This is a project that help students to prepare for their DSE Exams.
            The project is built using Django. The fronted is built merely using
            HTML, CSS and Javascript. Although we did not use any fronted
            framework, but it is a great opportunity for me to practice my
            foundation.
          </p>
          <p>
            One insteresting thing I found for Django is the performance issue.
            After retrieving a long list from database, it is actually faster to
            render the html out if I use Javascript instead of Django built-in
            for-loop.
          </p>
        </div>
      ),
      projectType: "Internship",
    },
    {
      projectName: "Stock Management System",
      techStacks: ["Flutter", "Microsoft SQL", "C# ASP.NET CORE 6"],
      image: "",
      description:
        "This project aims to provide efficient stock management functionalities. This is also my first time developing mobile app with Flutter. The widgets in Flutter systeam feel really similar to React actually so I did not take much time to pick it up. The most insteresting part is learn the state management. In this project, we used BLOC. The concept is similar to add event listener to a state.",
      projectType: "Internship",
    },
    {
      projectName: "TwitterClone",
      techStacks: [
        "C# ASP.NET",
        "React.js",
        "React Redux Toolkit",
        "JWT token",
        "NeonDB",
      ],
      githubLink: "https://github.com/SSam0419/TwitterCloneApi/tree/master",
      image: "",
      description:
        "TwitterClone is a project implemented to replicate the core functionalities of Twitter. In this project I aim to practice the full stack development , user authenication and statem management with react redux toolkit",
      projectType: "Side Project",
    },
  ];
  return (
    <div className="bg-white rounded p-3">
      <Tabs>
        <Tab key="Side Projects" title="Side Projects">
          <div className="flex flex-col gap-5">
            {projects
              .filter((p) => p.projectType === "Side Project")
              .map((project, idx) => (
                <ProjectCard project={project} key={idx} />
              ))}
          </div>
        </Tab>
        <Tab key="Internship" title="Internship">
          <div className="flex flex-col gap-5">
            {projects
              .filter((p) => p.projectType === "Internship")
              .map((project, idx) => (
                <ProjectCard project={project} key={idx} />
              ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default projectList;
