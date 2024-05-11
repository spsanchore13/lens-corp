import Image from "next/image";

import { Moon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border border-1 border-gray-300 py-2 flex px-24 justify-between items-center">
      <div>
        <Image
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=256&q=75"
          width={80}
          height={80}
        />
      </div>

      <div className="flex gap-8">
        <a href="/" className="ont-poppins hover:font-bold text-[#1e2b34]">
          MakeMyWeb.
        </a>
        <a href="/" className="ont-poppins hover:font-bold text-[#1e2b34]">
          Home
        </a>
        <a href="/" className="ont-poppins hover:font-bold text-[#1e2b34]">
          Company
        </a>
        <a href="/" className="ont-poppins hover:font-bold text-[#1e2b34]">
          Blogs
        </a>

        <button>
          <Moon className="h-6 w-6" fill />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
