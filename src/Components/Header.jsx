import { useState, useEffect, useContext } from "react";
import { dataContext } from "../context/Context";

const taglines = [
  "Upload Your Image & Let AI Work Its Magic—Enhanced in Seconds!",
  "AI-Powered Image Enhancement Made Easy!",
  "Turn Your Photos Into HD Instantly!",
  "Enhance, Restore & Upscale Your Images Effortlessly!",
];

const Header = () => {
  let { index, setIndex } = useContext(dataContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="text-center mb-8 animate-float">
      <h1 className="text-5xl font-bold text-gray-300 mb-2 drop-shadow-lg">
        ALook: The AI Image Enhancer
      </h1>
      <p className="text-lg text-gray-200 drop-shadow-md transition-opacity duration-500">
        {taglines[index]}
      </p>
    </header>
  );
};

export default Header;
