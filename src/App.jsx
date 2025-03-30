import React from "react";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">ALook:The AI Image Enhancer </h1>
        <p className="text-lg text-gray-500">"Upload Your Image & Let AI Work Its Magic—Enhanced in Seconds!"</p>
      </header>
      <Home />
      <footer className="text-lg text-gray-500 mt-6">Powered By @AlokRanjan</footer>
    </div>
  );
};

export default App;
