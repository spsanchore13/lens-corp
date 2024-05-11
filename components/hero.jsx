const Hero = () => {
  return (
    <div className="h-[500px] relative">
      <img
        src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=256&q=75"
        className="h-[90vh] w-full object-cover"
      />

      <div className="absolute top-0 py-10 px-32 w-[60%]">
        <h1 className={`font-raleway text-6xl font-bold mb-10`}>
          We are at the forefront of AI
        </h1>
        <p className={`font-poppins`}>
          From Conserving Wildlife to Automatically Generating Caricatures –{" "}
          <span className="font-bold">We Do It All</span>
        </p>
        <button className="font-poppins bg-black text-white p-3 px-8 rounded-md mt-10 hover:bg-white hover:text-black hover:border-gray-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
