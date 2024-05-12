import styles from "./services.module.css";

const Services = () => {
  return (
    <div className="bg-[#f4f8f6] py-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-raleway font-semibold text-center text-2xl">
          SERVICES
        </h1>
        <hr className="border-blue-400 border-2 w-[80px] rounded-full" />
      </div>

      <h1 className="text-4xl md:text-6xl w-full md:w-[80%] text-center m-auto my-20">
        We provide Artificial Intelligence Services
      </h1>
      <div className="p-5 flex flex-col gap-y-5 md:grid md:grid-cols-2 md:gap-5 lg:px-36">
        <div className="group h-auto lg:h-[300px] w-auto bg-white rounded-lg p-10 hover:border-[1px] border-[#45d6b6]">
          <div className="flex items-center">
            <h1 className="text-7xl text-[#e2e2e2]">
              0<span className="group-hover:text-[#01c99b]">1</span>
            </h1>
            <h2 className="text-4xl text-[#01c99b]">Biometrics</h2>
          </div>
          <p className="text-[#908b89] mt-5">
            Academia-backed & In-house researched State-of-the-Art Face,
            Fingerprint, and Iris Recognition SDKs. Enable real-time automated
            Biometric applications on edge devices even without an active
            internet connection.
          </p>
        </div>
        <div className="group h-auto w-auto bg-white rounded-lg p-8 hover:border-[1px] border-[#3fbdf1]">
          <div className="flex items-center">
            <h1 className="text-7xl text-[#e2e2e2]">
              0<span className="group-hover:text-[#3fbdf1]">1</span>
            </h1>
            <h2 className="text-4xl text-[#3fbdf1]">Image Analysis</h2>
          </div>
          <p className="text-[#908b89] mt-5">
            Outsource the overly complex image analysis work to our intelligent
            machines that adaptively learn, so you can focus on making the best
            decisions for your <business className=""></business>
          </p>
        </div>
        <div className="group h-auto w-auto bg-white rounded-lg p-8 hover:border-[1px] border-[#ff6060]">
          <div className="flex items-center">
            <h1 className="text-7xl text-[#e2e2e2]">
              0<span className="group-hover:text-[#ff605f]">1</span>
            </h1>
            <h2 className="text-4xl text-[#ff605f]">Cross-Media Translation</h2>
          </div>
          <p className="text-[#908b89] mt-5">
            Will something like Siri or Alexa enhance your business? We can
            deliver text-to-speech, text-to-image, speech-to-text,
            speech-to-image, speech-to-image, image-to-text and image-to-speech
            solutions for maximum convenience.
          </p>
        </div>
        <div className="group h-auto w-auto bg-white rounded-lg p-8 hover:border-[1px] border-[#ff9f31]">
          <div className="flex items-center">
            <h1 className="text-7xl text-[#e2e2e2]">
              0<span className="group-hover:text-[#ff9f31]">1</span>
            </h1>
            <h2 className="text-4xl text-[#ff9f31]">
              3D Modelling and Design.
            </h2>
          </div>
          <p className="text-[#908b89] mt-5">
            We offer services for automated generation of 3D assets with
            realistic shapes and textures. We animate the 3D models with voice
            and videos with an aim to retarget voice and/or expressions with
            pose from a single Image/video.
          </p>
        </div>
      </div>

      <div className="md:relative flex justify-center items-center mt-20 h-[300px] md:h-[580px] lg:h-[500px] bg-[#272e5c]">
        <div className={`${styles.shape} hidden md:flex`}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className={styles.shapeFill}
            ></path>
          </svg>
        </div>

        <div className="md:absolute md:bottom-0 w-full md:flex md:justify-between md:items-center  md:pl-10">
          <div className="hidden md:flex">
            <img src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvectorAi.8ec84e23.png&w=750&q=75" />
          </div>
          <div className="w-full md:w-[30%] text-white text-center">
            <h1 className="text-3xl md:text-6xl">
              Meet <span>Tru-AI</span>
            </h1>
            <h3 className="text-2xl my-4">Design. Create. Deploy.</h3>
            <h4>the Future of AI | Power to EDIT</h4>
            <p className="my-4">
              Based On Your Website & Traffic Trends, Tru-AI Optimises Your
              Website
            </p>
            <button className="bg-[#272e5c] border-[1px] border-white text-white p-2 px-5 rounded-md my-5 hover:bg-white hover:text-black hover:border-gray-300">
              Learn More
            </button>
          </div>
          <div className="hidden md:block">
            <div className="rounded-l-full">
              <video
                muted
                autoPlay={true}
                className="h-48 w-full rounded-l-full"
              >
                <source
                  src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
