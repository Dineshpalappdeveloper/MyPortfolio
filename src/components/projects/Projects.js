import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";

import portfolioImage from "../../assets/images/projects/portfolioImage.png";
import donocareImage from "../../assets/images/projects/donacareecommerce.png";
import reactBlog from "../../assets/images/projects/reactblogapp.png";
import { mypustak, mypustakpartners, mypustakblog } from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="MYPUSTAK ECOMMERCE WEBSITE"
          des="An online platform offering a wide range of new and used books at competitive prices, ensuring an easy and affordable book-buying experience."
          src={mypustak}
          github=""
          hostlink="https://www.mypustak.com/"
        />

        <ProjectsCard
          title="MyPustak E-commerce Partners Website"
          des="A comprehensive platform where partners can upload images, view orders, and manage their order processes efficiently."
          src={mypustakpartners}
          github=""
          hostlink="https://partners.mypustak.com/"
        />
        <ProjectsCard
          title="MyPustak Blog Website"
          des="Explore book reviews, recommendations, and literary articles on the MyPustak Blog. Perfect for book lovers looking for their next great read!"
          src={mypustakblog}
          github=""
          hostlink="https://www.mypustak.com/blog"
        />
        <ProjectsCard
          title="Donocare E-commerce Website"
          des="This  is  an e-commerce website using the MERN stack, offering robust functionality and a seamless user experience"
          src={donocareImage}
          github="https://github.com/Dineshpalappdeveloper/Donocare_MERN_Stack_Project.git"
          hostlink="https://donocare-shoping-site.netlify.app/"
        />
        <ProjectsCard
          title="Blog Website"
          des="This is a blog website where I share my favorite foods, places, and more"
          src={reactBlog}
          github="https://github.com/Dineshpalappdeveloper/React_Blog_Web_App.git"
          hostlink="https://react-blog-app-by-dk.netlify.app/"
        />
        <ProjectsCard
          title="Portfolio Website"
          des="This is my portfolio website showcasing my projects, skills, and professional experience."
          src={portfolioImage}
          github=""
          hostlink="https://dineshdeveloper-portfolio.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
