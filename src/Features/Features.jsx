import Feedback from "../Feedback/Feedback";
import Pattern from "../Pattern/Pattern";
import Visualization from "../Visualization/Visualization";

const Features = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-4 container px-2 lg:px-10 gap-8 mx-auto mb-16 mt-10">
      <Visualization></Visualization>
      <Pattern></Pattern>
      <Feedback></Feedback>
    </div>
  );
};

export default Features;
