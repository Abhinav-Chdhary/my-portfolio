import React from "react";
import SkillIcons from "./SkillIcons";

export default function Skills() {
  return (
    <div className="bg-white container flex flex-col items-center justify-center mx-auto">
      <h2 className="text-3xl font-bold text-black">Skills</h2>
      <p className="text-gray-950 mx-auto">You name it! I've done it!</p>
      <div className="flex justify-center">
        <SkillIcons />
      </div>
    </div>
  );
}
