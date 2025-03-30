import React, { useContext } from 'react'
import { dataContext } from '../context/Context'

const Loading = () => {
  let {loading,setLoading}= useContext(dataContext)
  return (
    <div className='flex items-center justify-center  h-full'>
      <div className='animate-spin border-4 border-t-transparent rounded-full w-10 h-10 scale-200 border-blue-800'></div>
    </div>
  )
}

export default Loading