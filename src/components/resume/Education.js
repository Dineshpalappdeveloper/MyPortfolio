import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016-2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Web Development (MERN)"
            subTitle="Prepbytes.com , Gurugram, Haryana  (2022-2023)"
            result="84%"
            des="Studied full stack development with MongoDB, Express.js, React, and Node.js. Built dynamic web apps, managed databases, and worked with RESTful APIs. Developed front-end and back-end skills through hands-on projects."
          />

          <ResumeCard
            title="Master of Computer Applications"
            subTitle="Indra Gandhi National Open University, Patna "
            result="84%  "
            des="Learned Advance software development, web design, database management, and networking. Gained hands-on experience with programming languages like Java and python,and also get much more experience in cyber security ,"
          />
          <ResumeCard
            title="Bachelor of Computer Applications"
            subTitle="Anugrah Memorial College, Gaya (2019-2022)"
            result="80%  "
            des="Learned software development, web design, database management, and networking. Gained hands-on experience with programming languages like Java and Python, and collaborated on team projects, preparing for a career in tech."
          />

          {/* <ResumeCard
            title="Intermediate of Science (Math)"
            subTitle="Gurua Collage,Gurua (2018-2019)"
            result="65%"
            des="Studied calculus, algebra, mechanics, thermodynamics, and chemical reactions. Developed strong analytical, problem-solving, and laboratory skills through rigorous coursework and experiments."
          /> */}
          {/* 
          <ResumeCard
            title="High School (10th Grade)"
            subTitle="High School Gurua Gaya (2016 - 2017)"
            result="67.66%"
            des="Completed foundational education with a focus on core subjects including Mathematics, Science, English, and Social Studies. Developed a strong academic base and essential skills for further studies."
          /> */}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023- 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Senior React Developer"
            subTitle="Global Grand Gaming Pvt Ltd - (2024 - Present)"
            result="whitefiled Bengaluru "
            des="Developing and maintaining web applications using React. Collaborating with cross-functional teams to design and implement new features. Ensuring high performance and responsiveness of applications. Working with RESTful APIs and backend services to integrate functionalities."
          />
          <ResumeCard
            title="Software Development Engineer"
            subTitle="MyPustak.com - (2023 - 2024)"
            result="Rajarhat, Kolkata (West Bengal)"
            des="Developed web apps with Next.js, focusing on performance and SEO. Collaborated on new features, optimized existing ones, and ensured high code quality through testing and reviews."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
