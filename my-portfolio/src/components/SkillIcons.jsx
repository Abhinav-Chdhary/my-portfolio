import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiUnrealengine } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { VscTerminalLinux } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { BiLogoAndroid } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoGit } from "react-icons/bi";
import { BiLogoFlask } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoMicrosoft } from "react-icons/bi";
import { BiLogoRedux } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoVisualStudio } from "react-icons/bi";
import { BsCCircle } from "react-icons/bs";
import { TbBrandCSharp } from "react-icons/tb";
import { SiSolidity } from "react-icons/si";

export default function SkillCubes() {
  const icons = [
    <FaReact color="#46d3f2" size={32} />,
    <FaNodeJs color="green" size={32} />,
    <SiExpress size={32} />,
    <FaUnity size={32} />,
    <SiMongodb color="green" size={32} />,
    <SiUnrealengine size={32} />,
    <FaPython color="#2027b0" size={32} />,
    <IoLogoJavascript color="#f5dd07" size={32} />,
    <SiMysql color="#f78f07" size={32} />,
    <VscTerminalLinux size={32} />,
    <FaJava color="#6d7ecf" size={32} />,
    <TbBrandCpp color="#002aff" size={32} />,
    <BiLogoAndroid color="#09ff00" size={32} />,
    <BiLogoGithub size={32} />,
    <BiLogoGit color="#fa1919" size={32} />,
    <BiLogoFlask size={32} />,
    <BiLogoHtml5 color="#fc0303" size={32} />,
    <BiLogoMicrosoft color="blue" size={32} />,
    <BiLogoRedux color="#46d3f2" size={32} />,
    <BiLogoTailwindCss color="#03f4fc" size={32} />,
    <BiLogoVisualStudio color="#0390fc" size={32} />,
    <BsCCircle color="#01056b" size={32} />,
    <TbBrandCSharp color="#a004d4" size={32} />,
    <SiSolidity size={32} />,
  ];

  return (
    <div className="grid grid-cols-6 2xl:grid-cols-8 gap-4">
      {icons.map((icon, index) => (
        <div key={index} className="p-2">
          {icon}
        </div>
      ))}
    </div>
  );
}
