"use client";

import Expertise from "./_component/Expertise";
import AboutMe from "./_component/AboutMe";
import ContactMe from "./_component/ContactMe";
import { Spacer } from "@nextui-org/react";
import SocialLinks from "./_component/SocialLinks";

export default function Home() {
  return (
    <div className="">
      <AboutMe />
      <Spacer y={5} />
      <Expertise />
      <Spacer y={5} />
      <ContactMe />
      <Spacer y={5} />
      <SocialLinks />
    </div>
  );
}
