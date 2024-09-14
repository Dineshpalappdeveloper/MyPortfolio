import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { FaGithub, FaInstagram } from "react-icons/fa";
import DownloadPDF from "./DownloadPDF";
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer.",
      "Web Designer",
      "React Js Developer",
      "Professional Coder.",
      "Next Js Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Dinesh Kumar</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I have more than one year of experience as a Software Developer, and I
          have a solid understanding of both frontend and backend technologies.
          I am skilled in HTML, CSS, JavaScript, React.js, Next.js, Node.js, and
          Express.js. My experience working on high-performance web applications
          at Technix Technology and MyPustak.com has given me the skills needed
          to be a valuable member of your team. Besides my technical skills, I
          have a history of creating websites that are both responsive and
          visually appealing. I am good at writing code that is scalable, easy
          to maintain, and efficient. My recent projects, which include complex
          features like dynamic forms, customizable tables, and responsive
          designs, show that I can handle challenging tasks with accuracy and
          creativity. And, my dedication to continuous learning, as shown by my
          completion of a Full Stack Web Development (MERN) course, ensures that
          I keep up with the latest industry trends.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a
                href="https://github.com/Dineshpalappdeveloper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/dinesh-kumar-310b2a233"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.instagram.com/dinesh_palvansi?igsh=MWo5NWZ2c2Nua3JqMA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </div>
        </div>
      </div>
      <DownloadPDF />
    </div>
  );
};

export default LeftBanner;
