import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex gap-10 justify-between">
        <div className="p-20 flex flex-col gap-10">
          <h1 className="text-6xl">Get in touch with us</h1>
          <p>Send your enquiry now!</p>
          <div className="border-[1px] border-gray-200 flex justify-between rounded-full">
            <input
              type="text"
              placeholder="Enter email address"
              className="p-5 rounded-full"
            />
            <button className="bg-[#272e5c] border-[1px] border-white text-white p-3 px-14 rounded-full hover:bg-white hover:text-black hover:border-gray-300">
              Request <br />
              Demo
            </button>
          </div>
        </div>
        <div>
          <img
            className="w-[600px]"
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_2_white.1bdb3808.png&w=1920&q=75"
            alt="map"
          />
        </div>
      </div>
      <div className="flex justify-between px-24 py-20">
        <div>
          <Image
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=256&q=75"
            width={100}
            height={100}
          />
          <p className="text-md mt-5 mb-14">Tomorrow's Vision, Today!</p>
          <div className="flex gap-x-5">
            <Facebook />
            <Instagram />
            <Linkedin />
            <Twitter />
          </div>
        </div>
        <div>
          <p className="font-semibold">SITEMAP</p>
        </div>
        <div>
          <p className="font-semibold">CONNECT</p>
        </div>
      </div>
      <div className="flex justify-between bg-[#272e5c] p-10">
        <a href="#" className="text-[#58748d]">
          2023 <span className="text-white">LENS, Inc.</span> All rights
          reserved.
        </a>
        <div className="flex gap-10 text-white">
          <a href="#">Code Of Conduct</a>
          <a href="#">Sustainability Goals</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
