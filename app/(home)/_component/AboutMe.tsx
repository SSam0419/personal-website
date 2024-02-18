import React from "react";
import Header from "./Header";

const AboutMe = () => {
  return (
    <div>
      <Header headerText="About Me" />
      <div className="">
        <code className="text-default-500">{"<intro>"}</code>
        <div className="pl-5 ml-5 relative border-l-2 border-l-default-500 my-2">
          <p className="py-1">
            I am a fourth-year student studying Information Systems at HKUST,
            and expected to be graudated in Spring 2024. Over the past four
            years, my time at HKUST has allowed me to explore and develop a deep
            passion for software development.
          </p>
          <p className="py-1">
            Through coursework , self-guided learning and varios internship
            opportunities, I have gained experience with a variety of tech
            stacks and technologies.
          </p>
          <p className="py-1">
            I would love to leverage my expertise and pursue a career as a
            software developer, utilizing my problem-solving skills and
            creativity to develop innovative and impactful solutions.
          </p>
        </div>
        <code className="text-default-500">{"</intro>"}</code>
      </div>
    </div>
  );
};

export default AboutMe;
