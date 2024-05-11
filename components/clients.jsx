import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <div className="bg-[#fcfbf7]">
      <h1 className="font-raleway font-semibold  text-center text-4xl">
        We Work With Amazing Clients
      </h1>
      <div className="flex gap-x-5 justify-center p-10">
        <Image
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_1.ad2ee302.png&w=640&q=75"
          width={200}
          height={200}
        />
        <Image
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_3.37f82c98.png&w=640&q=75"
          width={200}
          height={200}
        />
        <Image
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_2.7e06895b.png&w=640&q=75"
          width={200}
          height={200}
        />
        <Image
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrov.97a72987.png&w=256&q=75"
          width={200}
          height={200}
        />
      </div>
      <div className="bg-[#272e5c] py-14">
        <h1 className="text-center text-3xl text-white">By the numbers</h1>
        <div className="flex justify-center text-center gap-x-20 text-white pt-10">
          <div className="w-[100px]">
            <h1 className="text-4xl">15 +</h1>
            <h3 className="text-md">Solutions for Global crises</h3>
          </div>
          <div className="border-l-2" />
          <div className="w-[100px]">
            <h1 className="text-4xl">10 +</h1>
            <h3 className="text-md">University Collaborations</h3>
          </div>
          <div className="border-l-2" />
          <div className="w-[100px]">
            <h1 className="text-4xl">25 +</h1>
            <h3 className="text-md">Employees Worldwide</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
