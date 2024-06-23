import React from "react";
import axios from "axios";
import { saveAs } from "file-saver";
// import { FaDownload } from "react-icons/fa";

const DownloadPDF = () => {
  const handleDownload = async () => {
    const pdfUrl = process.env.PUBLIC_URL + "/resume.pdf"; // Path to your PDF file

    try {
      const response = await axios({
        url: pdfUrl,
        method: "GET",
        responseType: "blob", // Important
      });

      // Using file-saver library to save the PDF file
      saveAs(response.data, "resume.pdf");
    } catch (error) {
      console.error("Error fetching or saving PDF: ", error);
      // Handle error, e.g., show an error message to the user
    }
  };
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("SamplePDF.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };

  return (
    <div>
      <button
        className="bg-black-800 border border-red-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleDownload}
      >
        {/* <FaDownload className="inline-block mr-2" /> */}
        Download CV
      </button>

      <button onClick={onButtonClick}>Download PDF</button>
    </div>
  );
};

export default DownloadPDF;
