import Features from "../Features/Features";
import InputBox from "../InputBox/InputBox";
import PageNavber from "./PageNavber/PageNavber";

// eslint-disable-next-line react/prop-types
const PageContent = ({ toggleSidebar }) => {
  return (
    <div className="w-full container px-10 mx-auto ">
      <PageNavber toggleSidebar={toggleSidebar}></PageNavber>
      <InputBox></InputBox>
      <Features></Features>
    </div>
  );
};

export default PageContent;
