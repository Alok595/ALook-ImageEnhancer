import React from "react";
import Home from "./Components/Home";
import Header from "./Components/Header";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 py-8 px-4">
     <Header/>
      <Home />
      <footer className="text-lg text-gray-300 mt-6">Powered By @AlokRanjan</footer>
    </div>
  );
};

export default App;
