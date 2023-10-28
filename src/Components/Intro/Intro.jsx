import React from "react";

const Introduction = () => {
  return (
    <div className="text-center text-black">
      <h1 className="text-3xl font-bold mb-4">Hii... I'm Roby</h1>
      <p className="text-lg">
        Experienced and imaginative game developer with 3 years of industry
        expertise. Known for adaptability, I have a proven track record of
        mastering new programming languages, tools, and software swiftly. As a
        patient and creative problem solver, I am deeply passionate about
        crafting innovative storytelling experiences, conducting rigorous game
        testing, and implementing enhancements to elevate gameplay. Thriving in
        fast-paced, deadline-driven environments, I bring in-depth knowledge of
        gaming trends and a commitment to continually refining my proficiency in
        diverse programming languages
      </p>
    </div>
  );
};
const Intro = () => {
  return (
    <div className="relative bg-green-200 p-6 rounded-lg shadow-lg ">
      <Introduction />
    </div>
  );
};

export default Intro;
