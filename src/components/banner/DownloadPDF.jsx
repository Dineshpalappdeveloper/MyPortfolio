import React from "react";
import resumeFile from "../../assets/images/resume.pdf";
const DownloadPDF = () => {
  const pdfUrl = process.env.PUBLIC_URL + "/resume.pdf"; // Path to your PDF file

  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.setAttribute("download", "resume.pdf"); // Set the download attribute

    // Append the anchor to the body
    document.body.appendChild(link);

    // Trigger the click event on the anchor element
    link.click();

    // Clean up: Remove the anchor element from the DOM
    document.body.removeChild(link);
  };

  return (
    <div>
      <div style={{ height: "500px", marginBottom: "20px" }}>
        <object data={pdfUrl} type="application/pdf" width="100%" height="100%">
          {/* Fallback message if the browser does not support PDF rendering */}
          <p>
            It appears you don't have a PDF plugin for this browser. No worries,
            you can <a href={pdfUrl}>click here to download the PDF file.</a>
          </p>
        </object>
      </div>
      <button
        className="bg-black-800 border border-red-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleDownload}
      >
        Download CV
      </button>
      <h1>
        <a href={resumeFile} download="resume.pdf">
          download01
        </a>
      </h1>
    </div>
  );
};

export default DownloadPDF;
