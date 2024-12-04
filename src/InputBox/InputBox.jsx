import { useRef, useState } from "react";

const InputBox = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const handleInput = (event) => {
    setText(event.target.value);
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className="w-full  px-2 lg:px-10 mt-20 mr-2 ">
      <div className="label">
        <span className="label-text text-xl font-semibold">Code Analysis</span>
      </div>

      <div className=" flex justify-between items-center">
        <div className="relative w-full px-2">
          {/* Textarea */}
          <textarea
            ref={textareaRef}
            value={text}
            onChange={handleInput}
            placeholder="Paste your code or upload a file..."
            className="textarea textarea-bordered w-72 lg:w-full overflow-y-auto resize-none pr-1 lg:pr-10"
            style={{
              minHeight: "4rem", // Minimum height
              maxHeight: "12rem", // Maximum height
            }}
          ></textarea>

          {/* File Input Section */}

          {/* Plus Icon */}
          <label
            htmlFor="file-upload"
            className="absolute -right-20 lg:right-3 bottom-8 cursor-pointer bg-primary text-white p-1 rounded-full shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </label>
        </div>
        <div>
          <button className="btn btn-outline">AnalyzeCode</button>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
