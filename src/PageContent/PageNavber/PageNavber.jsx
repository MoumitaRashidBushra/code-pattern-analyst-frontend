import Hamburger from "../../Hamburger/Hamburger";
import Theme from "../../Theme/Theme";

// eslint-disable-next-line react/prop-types
const PageNavber = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between gap-2 items-center mt-10 mb-10  ">
      <Hamburger toggleSidebar={toggleSidebar}></Hamburger>
      <div className="flex-1">
        <h1 className="text-center font-extrabold text-xl lg:text-4xl ">
          Code Pattern Analyst
        </h1>
      </div>

      <div>
        <Theme />
      </div>
    </div>
  );
};

export default PageNavber;
