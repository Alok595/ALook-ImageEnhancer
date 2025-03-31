import React, { createContext, useState } from "react";

export const dataContext = createContext();

const Context = ({ children }) => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);

  let value = {
    uploadImage,
    setUploadImage,
    enhancedImage,
    setEnhancedImage,
    loading,
    setLoading,
    index,
    setIndex,
  };
  return (
    <div>
      <dataContext.Provider value={value}>{children}</dataContext.Provider>
    </div>
  );
};

export default Context;
