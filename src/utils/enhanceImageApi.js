import axios from "axios";

const API_KEY = "wx5gpab8q754d52ci";
const BASE_URL = "https://techhk.aoscdn.com/";
export const enhancedImageAPI = async (file) => {
  // code to call api and get enhanced image url

  try {
    //1 code to uploade image
    const taskId = await uploadImage(file);
    console.log("Image Uploaded successfully, Task ID:", taskId);

    //2 fetch enhance image

    const enhancedImageData = await pollForEnhancedImage(taskId);
    console.log("Image Fetched successfully", enhancedImageData);

    return enhancedImageData;
  } catch (error) {
    console.log("Error enhancing image", error.message);
  }
};

const uploadImage = async (file) => {
  //code to uploade image
  // "/api/tasks/visual/scale"
  const formData = new FormData();
  formData.append("image_file", file); // get the name from api (image_file)

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );
  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image! task ID not found");
  }

  return data.data.task_id;
};

const fetchEnhancedImage = async (taskId) => {
  //fetch enhance image
  // "/api/tasks/visual/scale/{task_id}"

  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,

    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );
  if (!data?.data) {
    throw new Error("Failed To Fetch enhanced Image! Image Not Found");
  }

  return data.data;
};

const pollForEnhancedImage = async (taskId, retries = 0) => {
  const result = await fetchEnhancedImage(taskId);

  if (result.state === 4) {
    console.log("processing...");

    if (retries >= 20) {
      throw new Error("Max retries Reached . please try agian later.");
    }
    // wait for 2 secionds
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return pollForEnhancedImage(taskId, retries + 1);
  }
  console.log("Enhaned Image URL",result)
  return result
};

// {
//   "status": 200,
//   "message": "success",
//   "data": {
//       "task_id": "471becca-0a88-4628-8c7c-ff1faf5a5b93"
//   }
// }
