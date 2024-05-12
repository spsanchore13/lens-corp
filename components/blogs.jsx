import React from "react";

const Blogs = () => {
  return (
    <div id="blogs" className="bg-[#fcfbf7] py-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-raleway font-semibold text-center text-2xl">
          OUR BLOGS
        </h1>
        <hr className="border-blue-400 border-2 w-[80px] rounded-full" />
      </div>

      <h1 className="text-4xl md:text-6xl md:w-[80%] text-center m-auto mt-20">
        Inhouse Mindscape
      </h1>

      <div className="w-[80%] m-auto">
        <div className="flex flex-col md:flex-row justify-center gap-5 py-20">
          <div className="md:w-[400px] h-[500px] flex flex-col justify-between bg-white p-7 rounded-lg">
            <h3 className="text-xl text-red-500">New!</h3>
            <h1 className=" text-2xl">New! Generative AI</h1>
            <div className="bg-[#fff6cd] p-5 rounded-lg">
              <p>
                In today's data-driven marketing world, keeping up with content
                creation demands can be a challenge. Read our latest blog to
                explore the power of Generative AI and its potential to reshape
                the marketing landscape....
              </p>
            </div>
            <a href="#" className="mt-5">
              Read More &gt;&gt;
            </a>
          </div>
          <div className="md:w-[400px] h-[500px] flex flex-col justify-between bg-white p-7 rounded-lg">
            <h3>April 25, 2024</h3>
            <h1 className=" text-2xl">
              April 25, 2024 The Evolution of AI in Games
            </h1>
            <div>
              <p className="bg-[#e2f2ff] p-5 rounded-lg">
                The integration of artificial intelligence (AI) within the
                gaming industry has been a remarkable journey, marked by
                continual innovation. Read our latest blog to dive deep into the
                fascinating history of AI in games and discover the evolution
                that continues to shape the future of play!...
              </p>
            </div>
            <a href="#" className="mt-5">
              Read More &gt;&gt;
            </a>
          </div>
        </div>

        <div className="md:w-[80%] m-auto md:h-[300px] flex flex-col justify-between bg-white p-7 rounded-lg">
          <h3>April 18, 2024</h3>
          <h1 className=" text-2xl">
            Unmasking the Misconceptions of Artificial Intelligence in the
            Workplace
          </h1>
          <div>
            <p className="bg-[#ffe7e6] p-5 rounded-lg">
              The rise of Artificial Intelligence (AI) has sparked both
              excitement and apprehension. Many professionals are unsure how AI
              impacts their work....
            </p>
          </div>
          <a href="#" className="mt-5">
            Read More &gt;&gt;
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-white text-black border-[1px] border-black p-3 px-7 rounded-md mt-5 hover:bg-black hover:text-white hover:border-gray-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Blogs;
