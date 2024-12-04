// eslint-disable-next-line react/prop-types
const Hamburger = ({ toggleSidebar }) => {
  return (
    <div>
      <button onClick={toggleSidebar} className="btn  z-50 relative ">
        <span className="hamburger-icon">
          {/* Hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Hamburger;
