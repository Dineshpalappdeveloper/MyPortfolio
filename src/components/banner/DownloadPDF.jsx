import React from "react";
import resumeFile from "../../assets/images/resume.pdf";
const DownloadPDF = () => {
  return (
    <div>
      <h1>
        <a href={resumeFile} download="resume.pdf">
          <button className="bg-black-800 border border-red-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Download CV
          </button>
        </a>
      </h1>
    </div>
  );
};

export default DownloadPDF;
