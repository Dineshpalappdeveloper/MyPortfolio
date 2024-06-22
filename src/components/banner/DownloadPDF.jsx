import React from "react";
// import { FaDownload } from "react-icons/fa";

const DownloadPDF = () => {
  const handleDownload = () => {
    const pdfUrl = process.env.PUBLIC_URL + "/resume.pdf"; // Path to your PDF file

    // Use a library or create an anchor element to initiate the download
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = "resume.pdf";
    anchor.click();
  };

  return (
    <div>
      <button
        className="bg-black-800 border  border-red-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleDownload}
      >
        {/* <FaDownload className="inline-block mr-2" /> */}
        Download CV
      </button>
    </div>
  );
};

export default DownloadPDF;
