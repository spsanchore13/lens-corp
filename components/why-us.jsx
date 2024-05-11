import { Fingerprint, Scale, UsersIcon } from "lucide-react";
import styles from "./services.module.css";

const WhyUs = () => {
  return (
    <div className="bg-[#f4f8f6] py-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-raleway font-semibold text-center text-2xl">
          Why Us
        </h1>
        <hr className="border-blue-400 border-2 w-[80px] rounded-full" />
      </div>

      <h1 className="font-medium text-6xl w-[80%] text-center m-auto mt-20">
        AI-driven solutions backed by science
      </h1>

      <p className="w-[60%] text-center m-auto my-10">
        Every piece of AI technology shipped from LENS is thoroughly benchmarked
        via rigorous evaluations. With a global network of experts and
        academicians, we guarantee the most accurate and robust solutions in the
        market.
      </p>

      <div className="flex flex-wrap justify-center gap-5 px-36">
        <div className="h-[400px] w-[300px]  bg-white rounded-lg p-10">
          <h2 className="text-2xl text-black font-bold">Exclusive Rights</h2>

          <p className="text-[#908b89] mt-5">
            Academia-backed & In-house researched State-of-the-Art Face,
            Fingerprint, and Iris Recognition SDKs. Enable real-time automated
            Biometric applications on edge devices even without an active
            internet connection.
          </p>
        </div>
        <div className="h-[400px] w-[300px]  bg-white rounded-lg p-8">
          <h2 className="text-2xl text-black font-bold">Research Driven</h2>
          <p className="text-[#908b89] mt-5">
            Outsource the overly complex image analysis work to our intelligent
            machines that adaptively learn, so you can focus on making the best
            decisions for your <business className=""></business>
          </p>
        </div>
        <div className="h-[400px] w-[300px]  bg-white rounded-lg p-8">
          <h2 className="text-2xl text-black font-bold">Plug-and-Play</h2>
          <p className="text-[#908b89] mt-5">
            Will something like Siri or Alexa enhance your business? We can
            deliver text-to-speech, text-to-image, speech-to-text,
            speech-to-image, speech-to-image, image-to-text and image-to-speech
            solutions for maximum convenience.
          </p>
        </div>
        <div className="h-[400px] w-[300px]  bg-white rounded-lg p-8">
          <h2 className="text-2xl text-black font-bold">Lifetime Support</h2>
          <p className="text-[#908b89] mt-5">
            We offer services for automated generation of 3D assets with
            realistic shapes and textures. We animate the 3D models with voice
            and videos with an aim to retarget voice and/or expressions with
            pose from a single Image/video.
          </p>
        </div>
      </div>
      <div className="h-auto w-full flex justify-center mt-20">
        <div className="w-[300px] p-5 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-semibold mb-10">
              Diversity & Fairness
            </h1>
            <p className="text-[#bcbab2]">
              When training our AI models, we consider ethical and social
              implications of algorithm-based decision making. Our solutions use
              high-quality and fairly-represented data sets to eliminate human
              cognitive biases.
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-10">
              Diversity & Fairness
            </h1>
            <p className="text-[#bcbab2]">
              When training our AI models, we consider ethical and social
              implications of algorithm-based decision making. Our solutions use
              high-quality and fairly-represented data sets to eliminate human
              cognitive biases.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="border-4 border-[#717171] rounded-full p-2">
            <UsersIcon className="h-7 w-7" />
          </div>
          <div className="h-[250px] w-[1px] border-[1px] border-dashed border-black" />
          <div className="border-4 border-[#717171] rounded-full p-2">
            <Fingerprint className="h-7 w-7" />
          </div>
          <div className="h-[250px] w-[1px] border-[1px] border-dashed border-black" />
          <div className="border-4 border-[#717171] rounded-full p-2">
            <Scale className="h-7 w-7" />
          </div>
          <div className="h-[250px] w-[1px] border-[1px] border-dashed border-black" />
        </div>
        <div className="w-[300px] p-5 flex flex-col justify-between">
          <div />
          <div>
            <h1 className="text-3xl font-semibold mb-10">
              Diversity & Fairness
            </h1>
            <p className="text-[#bcbab2]">
              When training our AI models, we consider ethical and social
              implications of algorithm-based decision making. Our solutions use
              high-quality and fairly-represented data sets to eliminate human
              cognitive biases.
            </p>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
