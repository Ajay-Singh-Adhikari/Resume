import React from "react";

const App = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <iframe
        src="/Ajay_Resume.pdf"
        title="My Resume"
        className="w-[100%] h-[100%] border shadow-lg rounded"
      ></iframe>
    </div>
  );
};

export default App;
