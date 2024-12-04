import Theme from "../../Theme/Theme";

const SideBarNav = () => {
  return (
    <ul className="menu p-4">
      <li>
        <a
          href="#"
          className="text-xl mb-1 text-center font-semibold text-black ms-10 mt-6"
        >
          Coder
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-xl mb-1 text-center font-semibold text-black ms-10"
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-xl mb-1 text-center font-semibold text-black ms-10"
        >
          Help
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-xl mb-1 text-center font-semibold text-black ms-10"
        >
          Settings
        </a>
      </li>
      <li className="ms-12">
        <Theme />
      </li>
    </ul>
  );
};

export default SideBarNav;
