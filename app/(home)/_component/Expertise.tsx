import React from "react";
import { Spacer } from "@nextui-org/react";
import { FaDatabase } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaMobileButton } from "react-icons/fa6";
import Header from "./Header";

const Expertise = () => {
  const showcaseText = [
    {
      title: "Database",
      icon: <FaDatabase />,
      description:
        "Love both SQL and NoSQL! Tried SQL with Oracle, Microsoft SQL, neonDB, Supabase && NoSQL with Firebase and MongoDB",
    },
    {
      title: "Web Developer",
      icon: <CgWebsite />,
      description:
        "Experienced in developing projects with Next.js 13, React.js, and Django!",
    },
    {
      title: "Mobile Developer",
      icon: <FaMobileButton />,
      description:
        "Experienced in developing projects with React Native and Flutter",
    },
  ];

  return (
    <div className="">
      <Header headerText="My Expertise" />
      <div className="flex gap-5">
        {showcaseText.map((text, index) => (
          <div className="flex-1 bg-white py-5 px-3 rounded" key={index}>
            <p className="text-2xl flex items-center gap-3">
              {text.icon}
              {text.title}
            </p>
            <Spacer />
            <Spacer />
            <div className="bg-default p-3 rounded-lg h-[10rem]">
              <code className="text-small">{text.description}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
