import React, { useContext } from "react";
import { dataContext } from "../context/Context";
import Loading from "./Loading";

const ImgPreview = () => {
  let { uploadImage, enhancedImage, loading, setLoading } =
    useContext(dataContext);
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/* original img */}
      <div className="bg-white  shadow-black rounded-xl overflow-hidden shadow-lg  ">
        <h1 className="text-xl font-semibold text-center bg-red-800 text-white py-2">
          Original Image
        </h1>
        {uploadImage ? (
          <img
            src={uploadImage}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200">
            No Image Selected
          </div>
        )}
      </div>

      {/* enhanced img */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden shadow-black">
        <h1 className="text-xl font-semibold text-center bg-blue-800 text-white py-2 ">
          Enhanced Image
        </h1>
        {enhancedImage && !loading && (
          <img
            src={enhancedImage}
            alt=""
            className="w-full h-full object-cover"
          />
        )}
        {loading ? (
          <Loading />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200">
            No Enhanced Image
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default ImgPreview;
