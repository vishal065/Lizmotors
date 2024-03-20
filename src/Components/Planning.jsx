import { useState } from "react";
import img2 from "/img2.png";
import img3 from "/img3.png";
import img4 from "/img4.png";

function Planning() {
  const staticText =
    "Car manufacturing and development is a complex process that involvesyears of planning and execution. It all starts with a vision for a newcar, which is then translated into detailed specifications anddesigns. These specifications are crucial for every stage of the manufacturing process, from sourcing materials to assembling the finalproduct.";

  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  const displayText = showFullText
    ? staticText
    : staticText.split(" ").slice(0, 40).join(" ");
  return (
    <div className="mb-10 bg-fin1 ">
      <div className="p-8 bg-fine1 text-white">
        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          <h1 className="text-5xl text-center font-bold mb-11">Planning</h1>
        </span>

        <p className="mb-6">{staticText}</p>
        <h1 className="text-3xl font-bold mb-4">Product Design Review (PDR)</h1>
        <p className="mb-6">
          (PDR) is a critical stage in car development where the design of the
          car is thoroughly reviewed by a team of engineers and other
          stakeholders. The PDR process ensures that the car meets all of the
          specifications that have been set for it, and that it can be
          manufactured safely and efficiently.
        </p>
        <p className="mb-6">
          Here a breakdown of the car manufacturing and development planning
          process with PDR and specifications:
        </p>
      </div>
      {/* // section2 */}
      <div className="flex flex-col w-5/6 md:flex-row items-center justify-center bg-fine p-8 md:space-x-8 mx-auto">
        {/* Image Section */}
        <div className="flex-none p-4">
          <img
            src={img3}
            alt="Description of your image"
            className="w-68 h-auto"
          />
        </div>

        {/* Text Area */}
        <div className="flex-grow p-4 bg-fine2 text-white rounded-lg min-h-60">
          <h2 className="text-3xl font-bold mb-4">Concept Development:</h2>
          <p className="text-lg p-1">
            {displayText}
            {/* 40 words k bd readmore ka button display hoga */}
            {staticText.split(" ").length > 40 && !showFullText && (
              <button
                onClick={toggleShowFullText}
                className="text-blue-500 hover:text-blue-700 focus:outline-none"
              >
                Read More
              </button>
            )}
          </p>
        </div>
      </div>{" "}
      <div className="flex flex-col w-5/6 md:flex-row items-center justify-center bg-fine p-8 md:space-x-8 mx-auto">
        {/* Text Area */}
        <div className="flex-grow p-4 bg-fine2  text-white rounded-lg min-h-60">
          <h2 className="text-3xl font-bold mb-4">Feasibility Study:</h2>
          <p className="text-lg p-1">
            Once a concept has been chosen, a feasibility study is conducted to
            assess whether the car can be built profitably. The feasibility
            study will consider factors such as the cost of materials, labor,
            and tooling, as well as the potential market for the car.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex-none p-4 w-2/5 h-auto bg-fine ">
          <img
            src={img4}
            alt="Description of your image"
            className="w-68 h-auto"
          />
        </div>
      </div>
      <div className="flex flex-col w-5/6 md:flex-row items-center justify-center bg-fine  p-8 md:space-x-8 mx-auto">
        {/* Image Section */}
        <div className="flex-none p-4 w-2/5 h-auto bg-fine4">
          <img
            src={img2}
            alt="Description of your image"
            className="w-68 h-auto"
          />
        </div>
        {/* Text Area */}
        <div className="flex-grow p-4 bg-fine2  text-white rounded-lg min-h-60">
          <h2 className="text-3xl font-bold mb-4">Design Development:</h2>
          <p className="text-lg p-1">
            If the car is deemed feasible, the design team will begin to develop
            a more detailed design. The design team will create blueprints,
            computer-aided design (CAD) models, and prototypes of the car.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Planning;
