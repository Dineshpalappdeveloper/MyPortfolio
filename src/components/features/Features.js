import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Website Development"
          des="Creating stunning, functional websites tailored to your business objectives, providing an exceptional user experience."
          icon={<FaGlobe />}
        />
        <Card
          title="App Development"
          des="Developing innovative and robust mobile applications that engage users and drive business growth, ensuring seamless performance across devices."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimization"
          des="Implementing effective SEO strategies to enhance your online presence, improve search rankings, and drive targeted traffic to your website."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="Specializing in crafting high-quality mobile applications that offer a seamless user experience, boosting your business's mobile presence."
          icon={<FaMobile />}
        />
      </div>
    </section>
  );
};

export default Features;
