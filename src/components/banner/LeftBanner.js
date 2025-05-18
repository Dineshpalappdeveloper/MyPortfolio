import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { FaGithub, FaInstagram } from "react-icons/fa";
import DownloadPDF from "./DownloadPDF";
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer.",
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
          I am a passionate and dedicated Frontend Developer with over 3+ years
          of hands-on experience building scalable, responsive, and user-centric
          web applications. I specialize in modern frontend technologies
          including HTML5, CSS3, JavaScript, React.js, Next.js (App Router),
          Tailwind CSS, Redux Toolkit, and TypeScript. My professional journey
          includes impactful contributions at Global Grand Gaming Pvt. Ltd. and
          MyPustak.com, where I developed high-performance applications and led
          UI/UX enhancements that boosted user engagement.
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I have a strong foundation in application architecture, responsive
          design, and component-driven development. I have built complex
          features like dynamic forms, interactive dashboards, and custom UI
          components using libraries like MUI, Flowbite React, AG Grid, and
          shadcn/ui. My problem-solving skills are backed by solving over 600
          DSA problems in JavaScript and certifications such as the Full Stack
          Web Development (MERN) course from Prepbytes.
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I’m eager to bring my skills and creative mindset to a
          forward-thinking team where I can contribute to innovative projects,
          grow alongside skilled professionals, and continue pushing the
          boundaries of frontend development.
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
