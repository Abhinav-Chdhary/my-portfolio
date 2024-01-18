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
    <FaReact color="#46d3f2" size={64} />,
    <BiLogoFlask size={64} />,
    <FaNodeJs color="green" size={64} />,
    <SiExpress size={64} />,
    <SiMongodb color="green" size={64} />,
    <SiMysql color="#f78f07" size={64} />,
    <FaUnity size={64} />,
    <SiUnrealengine size={64} />,
    <FaPython color="#2027b0" size={64} />,
    <IoLogoJavascript color="#f5dd07" size={64} />,
    <FaJava color="#6d7ecf" size={64} />,
    <TbBrandCpp color="#002aff" size={64} />,
    <BiLogoHtml5 color="#fc0303" size={64} />,
    <TbBrandCSharp color="#a004d4" size={64} />,
    <SiSolidity size={64} />,
    <BiLogoTailwindCss color="#03f4fc" size={64} />,
    <BsCCircle color="#01056b" size={64} />,
    <BiLogoAndroid color="#09ff00" size={64} />,
    <BiLogoGithub size={64} />,
    <BiLogoGit color="#fa1919" size={64} />,
    <VscTerminalLinux size={64} />,
    <BiLogoMicrosoft color="blue" size={64} />,
    <BiLogoRedux color="#46d3f2" size={64} />,
    <BiLogoVisualStudio color="#0390fc" size={64} />,
  ];

  return (
    <div className="grid grid-cols-4 md:grid-cols-6 2xl:grid-cols-8 gap-4">
      {icons.map((icon, index) => (
        <div key={index} className="p-2">
          {icon}
        </div>
      ))}
    </div>
  );
}
