const About = () => {
  return (
    <div className="p-5 md:p-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-raleway font-semibold text-center text-5xl md:text-6xl">
          About Us
        </h1>
        <hr className="border-blue-400 border-2 w-1/6 rounded-full" />
      </div>
      <div className="group flex flex-col-reverse justify-between md:flex-row w-full bg-[#e2f2ff] mt-20 rounded-xl p-5 md:p-10 hover:scale-105 transition ease-in-out delay-150 duration-300">
        <div className="w-full flex flex-col justify-center items-center md:block md:w-[50%]">
          <h1 className="text-center md:text-start text-4xl md:text-5xl text-bold mt-10">
            Welcome To LENS
          </h1>
          <p className="text-center md:text-start my-2 md:my-5">
            We put our hearts, souls and sweat into designing and developing
            custom AI - powered solutions for your business so you don't have
            to.
          </p>
          <button className="bg-transparent border-[1px] border-black text-black p-3 px-4 rounded-md mt-5 hover:bg-black hover:text-white hover:border-gray-300">
            Learn More
          </button>
        </div>
        <div className="w-full md:w-[40%] h-[300px] p-2 mr-5 border-2 border-white rounded-xl bg-white">
          <img
            src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=828&q=75"
            className="h-[100%] w-full object-cover rounded-lg group-hover:scale-105 transition ease-in-out delay-150 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
