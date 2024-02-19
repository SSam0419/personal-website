"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const CustomNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <p className="font-bold text-inherit">
          <Link href="/">Sam Lee</Link>
        </p>
      </NavbarBrand>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            href="/"
            className={`${pathname === "/" ? "text-primary" : ""}`}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/projects"
            className={`${pathname === "/projects" ? "text-primary" : ""}`}
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/blogs"
            className={`${pathname === "/blogs" ? "text-primary" : ""}`}
          >
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden md:flex gap-4">
        <NavbarItem className="hidden md:flex">
          <Popover placement="bottom">
            <PopoverTrigger>
              <Button>Contact me</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="py-1">
                  <p className="text-small">Email: </p>
                  <p className="text-small text-default-400">
                    leemingchun419@gmail.com
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="md:hidden gap-4">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/"
            className={`${pathname === "/" ? "text-primary" : ""}`}
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/projects"
            className={`${pathname === "/projects" ? "text-primary" : ""}`}
          >
            Projects
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/blogs"
            className={`${pathname === "/blogs" ? "text-primary" : ""}`}
          >
            Blog
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default CustomNavbar;
