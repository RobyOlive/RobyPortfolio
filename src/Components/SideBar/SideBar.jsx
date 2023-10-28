import React from "react";
import Intro from "../Intro/Intro";

const RoundedImage = () => {
  return (
    <div className="w-64 h-64 rounded-full overflow-hidden">
      <img
        className="w-full h-full object-cover "
        src="src\assets\WhatsApp Image 2023-10-27 at 3.48.40 PM.jpeg"
        alt="Your Image"
      />
    </div>
  );
};

const SideBar = () => {
  return (
    <>
      <div className="bg-green-200 h-screen w-80 pl-8 pt-8 rounded-r-3xl ">
        <RoundedImage />
      </div>
    </>
  );
};

export default SideBar;
