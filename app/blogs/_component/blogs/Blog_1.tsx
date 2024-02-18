"use client";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { CiLink } from "react-icons/ci";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { TfiBlackboard } from "react-icons/tfi";

const Blog_1 = () => {
  return (
    <>
      <div className="flex flex-col gap-5 py-5">
        <Link
          href="https://nextui.org/docs/guide/introduction"
          target="_blank"
          className="flex items-center gap-2 text-xl"
        >
          <CiLink size={30} />
          What is NextUI
        </Link>
        <p>
          NextUI is a powerful UI library for React that combines the
          flexibility of TailwindCSS with the accessibility features of React
          Aria. It provides a wide range of complete components, including both
          logic and styles, allowing you to easily build accessible and
          customizable user interfaces. By leveraging TailwindCSS, you have
          access to its extensive class utility system, resulting in optimized
          compiled CSS size.
        </p>
        <div className="flex items-center gap-2 text-xl">
          <RiQuestionAnswerLine size={30} />
          Why do I use NextUI
        </div>
        <p>
          One of the standout features of NextUI is its pre-styled animations,
          which greatly enhance the user interface. I have personally utilized
          NextUI in building this website as well as other Next.js projects.
          However, it is worth noting that the size of library is relatively
          large, which can be a potential downside.
        </p>
        <div className="flex items-center gap-2 text-xl">
          <TfiBlackboard size={30} />
          Example
        </div>

        <div className="flex gap-2 justify-between">
          <div className="flex-1 flex flex-col gap-2">
            <p>Loading Button</p>
            <Button isLoading={true}>Loading Button</Button>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <p>Disabled Button</p>
            <Button isDisabled={true}>Disabled Button</Button>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <p>Animated Input</p>
            <Input label="Animated Input"></Input>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <p>Multiple Select</p>
            <Select selectionMode="multiple">
              <SelectItem key="1">Item 1</SelectItem>
              <SelectItem key="2">Item 2</SelectItem>
              <SelectItem key="3">Item 3</SelectItem>
              <SelectItem key="4">Item 4</SelectItem>
            </Select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog_1;
