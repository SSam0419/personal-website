import { Project } from "@/lib/types/Project";
import { Button, Chip, Spacer } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="w-full bg-white p-5 rounded">
      <div className="">
        <p className="text-2xl">{project.projectName}</p>
        <p className="text-small">{project.projectType}</p>
        <div className="flex gap-3 my-3">
          {project.techStacks.map((tech) => (
            <Chip color="secondary" key={tech}>
              {tech}
            </Chip>
          ))}
        </div>

        <div className="flex justify-between gap-2">
          {project.githubLink && (
            <Link href={project.githubLink} target="_blank" className="w-full">
              <Button color="primary" className="w-full">
                <FaGithub size={25} />
                <p className="text-lg">Github</p>
              </Button>
            </Link>
          )}

          {project.demoLink && (
            <Link href={project.demoLink} target="_blank" className="w-full">
              <Button color="primary" variant="bordered" className="w-full">
                <HiOutlineDesktopComputer size={25} />
                <p className="text-lg">Demo</p>
              </Button>
            </Link>
          )}
        </div>
      </div>
      <Spacer y={5} />
      <div className="bg-default rounded p-5">
        <code className="">{project.description}</code>
      </div>
      <Spacer y={5} />
    </div>
  );
};

export default ProjectCard;
