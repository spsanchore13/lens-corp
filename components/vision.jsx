import { Fingerprint, Scale, UsersIcon } from "lucide-react";
import styles from "./services.module.css";

const Vision = () => {
  return (
    <div className="bg-[#f4f8f6] py-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-raleway font-semibold text-center text-2xl">
          Our Vision
        </h1>
        <hr className="border-blue-400 border-2 w-[80px] rounded-full" />
      </div>

      <h1 className="text-6xl w-[80%] text-center m-auto mt-20">
        AI for Social Good
      </h1>

      <p className="w-[60%] text-center m-auto my-10">
        Explainable AI (XAI) is an emerging subject of machine learning research
        that refers to strategies that try to provide transparency to typically
        opaque AI models and their predictions.
      </p>

      <div className="h-auto grid grid-cols-2 place-items-center  w-full md:flex md:justify-center mt-20">
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

        <div className="hidden md:flex md:flex-col md:justify-center md:items-center">
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

export default Vision;
