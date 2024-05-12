"use client";

import Image from "next/image";

import { Menu, Moon, Sun } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    console.log(dark);
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="relative border-b-[1px] dark:bg-[#162538] border-gray-300 py-1 px-10 flex md:px-24 justify-between items-center">
      <div>
        <Image
          src={
            dark
              ? "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewLogo.9985891c.png&w=256&q=75"
              : "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=256&q=75"
          }
          width={80}
          height={80}
        />
      </div>

      <button
        className="md:hidden"
        onClick={() => setShowMobileNavbar(!showMobileNavbar)}
      >
        <Menu className="h-10 w-10" />
      </button>

      <div
        className={`${
          showMobileNavbar
            ? "fixed top-20 right-0 flex flex-col gap-y-7 z-10 p-5 bg-black h-screen w-[50%]"
            : "hidden md:flex gap-8"
        }`}
      >
        <a
          href="#"
          className={`${
            showMobileNavbar ? "text-white hover:font-bold" : "hover:font-bold"
          } dark:text-white`}
        >
          MakeMyWeb.
        </a>
        <a
          href="#"
          className={`${
            showMobileNavbar ? "text-white hover:font-bold" : "hover:font-bold"
          } dark:text-white`}
        >
          Home
        </a>
        <a
          href="#company"
          className={`${
            showMobileNavbar ? "text-white hover:font-bold" : "hover:font-bold"
          } dark:text-white`}
        >
          Company
        </a>
        <a
          href="#blogs"
          className={`${
            showMobileNavbar ? "text-white hover:font-bold" : "hover:font-bold"
          } dark:text-white`}
        >
          Blogs
        </a>

        <button onClick={() => darkModeHandler()}>
          {dark ? (
            <Sun
              className={`${
                showMobileNavbar && "text-white"
              } h-6 w-6 dark:text-yellow-500`}
              fill
            />
          ) : (
            <Moon
              className={`${
                showMobileNavbar && "text-white"
              } h-6 w-6 dark:text-white`}
              fill
            />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
