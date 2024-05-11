import styles from "./services.module.css";

const Vision = () => {
  return (
    <div className="bg-[#f4f8f6] py-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl">Our Vision</h1>
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

      <div className="flex flex-wrap justify-center gap-5 px-36"></div>
    </div>
  );
};

export default Vision;
