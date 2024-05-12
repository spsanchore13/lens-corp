"use client";

import Image from "next/image";

import { Menu, Moon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  return (
    <nav className="relative border-b-[1px] border-gray-300 py-1 px-10 flex md:px-24 justify-between items-center">
      <div>
        <Image
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=256&q=75"
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
        <a href="/" className={`${showMobileNavbar ? "text-white" : ""}`}>
          MakeMyWeb.
        </a>
        <a href="/" className={`${showMobileNavbar ? "text-white" : ""}`}>
          Home
        </a>
        <a href="/" className={`${showMobileNavbar ? "text-white" : ""}`}>
          Company
        </a>
        <a href="/" className={`${showMobileNavbar ? "text-white" : ""}`}>
          Blogs
        </a>

        <button>
          <Moon
            className={`${showMobileNavbar && "text-white"} h-6 w-6`}
            fill
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
