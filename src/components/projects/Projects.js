import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";

import todo from "../../assets/images/projects/todo.png";
import digitalClock from "../../assets/images/projects/clock.png";
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
        <ProjectsCard
          title="Todo Website"
          des="A web application to manage your tasks efficiently, featuring a clean and intuitive interface for adding, editing, and deleting tasks."
          src={todo}
          github="https://github.com/Dineshpalappdeveloper/TODO_APP.git"
          hostlink="https://dineshpalappdeveloper.github.io/TODO_APP/"
        />
        <ProjectsCard
          title="Digital Clock Website"
          des="A sleek and modern digital clock web application displaying the current time with a user-friendly interface."
          src={digitalClock}
          github="https://github.com/Dineshpalappdeveloper/Clock_App.git"
          hostlink="https://dineshpalappdeveloper.github.io/Clock_App/"
        />
      </div>
    </section>
  );
};

export default Projects;
