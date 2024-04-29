import { useState } from 'react'


function App() {
  const [color, setColor] = useState("")

  return (



<div className="w-full h-screen duration-200"
style={{backgroundColor:color}}
>
  <div className=" fixed flex flex-wrap justify-center
   inset-x-0 bottom-12 px-2  ">
    <div className=' bg-white rounded-3xl '>
      
   <button onClick={()=>{setColor("red")}} className=' my-3 mx-2 rounded-3xl px-4
    text-white'style={{backgroundColor:"red"}}>
      Red</button>


   <button onClick={()=>{setColor("green")}} className=' bg-green-800 my-3 mx-2
   rounded-3xl px-4 text-white'style={{backgroundColor:"green"}}> 
    Green</button>


   <button onClick={()=>{setColor("yellow ")}} className=' bg-yellow-600 my-3 mx-2 
   rounded-3xl px-4 text-white'style={{backgroundColor:"yellow"}}>
    Yellow</button>


   <button onClick={()=>{setColor("pink")}} className=' bg-pink-800 my-3 mx-2 
   rounded-3xl px-4 text-white'style={{backgroundColor:"pink"}}>
    Pink</button>


   <button onClick={()=>{setColor("blue")}} className=' bg-blue-800 my-3 mx-2
    rounded-3xl px-4 text-white'style={{backgroundColor:"blue"}}>
      Blue</button>
   
</div>
</div> 
</div>

  )
}

export default App;


