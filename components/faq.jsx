import { ChevronDown } from "lucide-react";

const Faq = () => {
  return (
    <div className="bg-[#fcfbf7] py-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-raleway font-semibold text-center text-2xl">
          GET TO KNOW US
        </h1>
        <hr className="border-blue-400 border-2 w-[80px] rounded-full" />
      </div>

      <h1 className="text-4xl md:text-6xl w-[80%] text-center m-auto mt-20">
        Frequently Asked Questions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-10 w-[75%] m-auto">
        <details>
          <summary className="list-none cursor-context-menu border-[1px] border-black rounded-lg p-3 flex justify-between">
            Do i need to sign a contract?
            <ChevronDown />
          </summary>
          <div className="mt-5">
            We will first work with you to comprehend your requirements in
            detail. Thereafter, we would draft an agreement with proposed
            solutions.After assessing possible challenges and pitfalls and
            identifying ways to overcome them, we will jointly sign an
            agreement, not a binding contract.
          </div>
        </details>

        <details>
          <summary className="list-none cursor-context-menu border-[1px] border-black rounded-lg p-3 flex justify-between">
            What services do we offer?
            <ChevronDown />
          </summary>
          <div className="mt-5">
            We will first work with you to comprehend your requirements in
            detail. Thereafter, we would draft an agreement with proposed
            solutions.After assessing possible challenges and pitfalls and
            identifying ways to overcome them, we will jointly sign an
            agreement, not a binding contract.
          </div>
        </details>
        <details>
          <summary className="list-none cursor-context-menu border-[1px] border-black rounded-lg p-3 flex justify-between">
            How do we ensure quality of deliverables?
            <ChevronDown />
          </summary>
          <div className="mt-5">
            We will first work with you to comprehend your requirements in
            detail. Thereafter, we would draft an agreement with proposed
            solutions.After assessing possible challenges and pitfalls and
            identifying ways to overcome them, we will jointly sign an
            agreement, not a binding contract.
          </div>
        </details>
        <details>
          <summary className="list-none cursor-context-menu border-[1px] border-black rounded-lg p-3 flex justify-between">
            How do I begin collaboration?
            <ChevronDown />
          </summary>
          <div className="mt-5">
            We will first work with you to comprehend your requirements in
            detail. Thereafter, we would draft an agreement with proposed
            solutions.After assessing possible challenges and pitfalls and
            identifying ways to overcome them, we will jointly sign an
            agreement, not a binding contract.
          </div>
        </details>
        <details>
          <summary className="list-none cursor-context-menu border-[1px] border-black rounded-lg p-3 flex justify-between">
            How do you ensure user privacy?
            <ChevronDown />
          </summary>
          <div className="mt-5">
            We will first work with you to comprehend your requirements in
            detail. Thereafter, we would draft an agreement with proposed
            solutions.After assessing possible challenges and pitfalls and
            identifying ways to overcome them, we will jointly sign an
            agreement, not a binding contract.
          </div>
        </details>
        <details>
          <summary className="list-none cursor-context-menu border-[1px] border-black rounded-lg p-3 flex justify-between">
            How can I pay for the services?
            <ChevronDown />
          </summary>
          <div className="mt-5">
            We will first work with you to comprehend your requirements in
            detail. Thereafter, we would draft an agreement with proposed
            solutions.After assessing possible challenges and pitfalls and
            identifying ways to overcome them, we will jointly sign an
            agreement, not a binding contract.
          </div>
        </details>
      </div>
    </div>
  );
};

export default Faq;
