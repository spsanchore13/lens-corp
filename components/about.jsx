const About = () => {
  return (
    <div className="p-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-raleway font-semibold text-center text-[64px]">
          About Us
        </h1>
        <hr className="border-blue-400 border-2 w-1/6 rounded-full" />
      </div>
      <div className="flex justify-between w-full bg-[#e2f2ff] mt-20 rounded-xl p-10 hover:scale-105 transition ease-in-out delay-150 duration-300">
        <div className="w-[40%]">
          <h1 className="text-5xl text-bold mt-10">Welcome To LENS</h1>
          <p className="my-10">
            We put our hearts, souls and sweat into designing and developing
            custom AI - powered solutions for your business so you don't have
            to.
          </p>
          <button className="bg-black text-white p-2 px-4 rounded-md mt-5 hover:bg-white hover:text-black hover:border-gray-300">
            Learn More
          </button>
        </div>
        <div className="w-[40%] h-[300px] p-2 mr-5 border-2 border-white rounded-xl bg-white">
          <img
            src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=828&q=75"
            className="h-[100%] w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
