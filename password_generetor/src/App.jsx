import { useState ,useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [Password,SetPassword]=useState("")

  

  // useCallback hooks
  const passwordGeneretor = useCallback(()=>{
    let pass=""
    let str="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if (numberAllowed) {
      str+="0123456789"  
    }
    if (charAllowed) {
       str+="!@#$%^&*()_{}"
    }
    for (let index = 1; index <=length; index++) {
      let char=Math.floor(Math.random()*str.length + 1)
      pass+=str.charAt(char)
    }
     SetPassword(pass)
     },[length,numberAllowed,charAllowed,SetPassword])

     // copy clipboard

     const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(Password)
   },[Password])

    //  useEffect hooks

     useEffect(()=>{
     passwordGeneretor()
     },[length,numberAllowed,charAllowed])
     
     // ref hooks

     const passwordRef= useRef(null)
  

  return (
   <>
     
     <div className='w-full max-w-md mx-auto shadow-md px-4 
     my-8 rounded-lg text-orange-600 py-3  bg-gray-600'>

      <h1 className=' text-3xl text-white text-center my-3'>PASSWORD GENERETOR</h1>

      <div className='flex  shadow rounded-lg  overflow-hidden mb-4  '>
         <input type="text" 
        
          placeholder='Password'
          value={Password}
          readOnly
          ref={passwordRef}

          className='w-full outline-none py-1 px-3'
         />
         <button className=' bg-blue-600 p-2  text-white outline-none shrink-0'
         onClick={copyPasswordToClipboard}
         >copy</button>
         </div>
     
      <div className='flex gap-x-2 items-center'>
        <input type="range" 
        min={8}
        max={100}
        value={length}
        className=' cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
         <label >Length:{length}</label>

         <div className='flex gap-x-2 items-center'>
          <input type="checkbox" 
          id='character' 
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }} 
          />
          <label htmlFor="character">Character</label>

          <input type="checkbox"
          id='number'
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}        
          />
          <label htmlFor="number">Number</label>

         </div>
      </div>
     </div>
     
     
      
   
 
   </>
  )
}

export default App
