import React, { useContext } from 'react'
import UploadImage from './UploadImage'
import ImgPreview from './ImgPreview'
import { dataContext } from '../context/Context'



const Home = () => {
  let {setUploadImage,loading,setLoading,setEnhancedImage}= useContext(dataContext)
  const uploadImageHandler = async (file)=>{
    setUploadImage(URL.createObjectURL(file))
    setLoading(true)
    // calling api to enhance the image

    try{
      // code which may produce error
      const enhancedURL = await enhancedImageAPI(file)
      setEnhancedImage(enhancedURL)
      setLoading(false)

    }
    catch(error){
      // code to handle the error and show message
      console.log(error)
      alert("Error while enhancing the image, please try again later")

    }
   
    
    
    
    
  }


  return (
    <>
      <UploadImage uploadImageHandler={uploadImageHandler}/>
      <ImgPreview/>
    </>
  )
}

export default Home