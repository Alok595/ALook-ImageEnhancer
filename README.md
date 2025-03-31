# ALook: The AI Image Enhancer

ALook is an AI-powered image enhancement web application that allows users to upload images and get an AI-enhanced version in just seconds. Built using ReactJS and TailwindCSS, it seamlessly integrates an AI API to enhance image quality and resolution.

## 🚀 Features

- 📷 **Upload and Enhance**: Upload an image and let AI upscale it instantly.
- ⚡ **Fast Processing**: AI-based enhancement with minimal delay.
- 🎨 **User-Friendly UI**: Simple drag-and-drop interface.
- 🖥️ **Real-Time Preview**: Compare original and enhanced images side by side.
- 🔄 **Auto-Retry Mechanism**: Ensures images are processed without interruptions.
- 🔐 **Secure API Calls**: Environment variables protect API credentials.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, TailwindCSS
- **State Management**: Context API
- **Backend API**: AI Image Enhancement API
- **Deployment**: Vercel / Netlify (Optional)

---

## 📂 Project Structure

```
ALook/
│── public/
│── src/
│   ├── Components/
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── ImgPreview.jsx
│   │   ├── Loading.jsx
│   │   ├── UploadImage.jsx
│   ├── context/
│   │   ├── Context.jsx
│   ├── utils/
│   │   ├── enhanceImageApi.js
│   ├── App.jsx
│   ├── main.jsx
│── .env
│── index.css
│── package.json
│── README.md
```

---

## 🎯 Getting Started

### 1️⃣ Clone the Repository
```sh
$ git clone https://github.com/Alok595/ImageEnhancer
$ cd imageEnhancer
```

### 2️⃣ Install Dependencies
```sh
$ npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```sh
VITE_API_KEY=your_api_key
VITE_BASE_URL=https://techhk.aoscdn.com/
```

### 4️⃣ Run the Project
```sh
$ npm run dev
```

The application will run at `http://localhost:5173/` by default.

---

## 🖼️ How It Works

1️⃣ Upload an image using the **UploadImage** component.
2️⃣ The image is sent to an AI-powered API for enhancement.
3️⃣ A loading animation appears while processing.
4️⃣ The enhanced image is displayed alongside the original.
5️⃣ Compare the before-and-after results in real-time.

---

## 🛠️ Key Components

- **Home.jsx**: Manages image upload and enhancement requests.
- **UploadImage.jsx**: Handles file input and drag-drop functionality.
- **ImgPreview.jsx**: Displays original and enhanced images.
- **Loading.jsx**: Shows a spinner while processing images.
- **Header.jsx**: Displays a dynamic tagline about AI image enhancement.
- **Context.jsx**: Manages global state using React Context API.
- **enhanceImageApi.js**: Handles API communication for image processing.

---

## 🤖 API Integration

The app uses an external AI API to enhance images. It follows these steps:
1️⃣ **Upload Image** → Get a `task_id` from the API.
2️⃣ **Poll for Results** → Wait until enhancement is complete.
3️⃣ **Display Enhanced Image** → Fetch and show the improved image.

---


## 🏆 Author
Developed with ❤️ by **@AlokRanjan**

---

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

---

### 🚀 Ready to Enhance Your Images? Give It a Try Now!

