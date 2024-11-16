import { useRef, useState } from "react";
import Birthday_wishing_Page from "./components/Birthday_wishing_Page";
import {wish_context} from "./components/wish_context"

const App = () => {

let [wish,setwish]= useState(false)
let [name,setname] = useState(null)
let [image,setimage] = useState(null)
let reader = new FileReader

 let inputref = useRef()

 let handleclick=()=>{
  if(!name){
    alert("Please enter a name")
    return

  }

  if(!image){
    alert("Please  upload image")
  }
  setwish(!wish)
 }


 let fileaccess=(e)=>{
 
  const file = e.target.files[0]
  // if(!file){
  //   alert("upload an image")
  // }
  reader.onload=(()=>{
    setimage(reader.result)
 
  })
  reader.readAsDataURL(file)

 }




  
  return (
    <wish_context.Provider  value={{wish,setwish,name,image}}>
    <div className="w-full h-full sm:w-full md:w-full lg:w-full xl:w-full  bg-gradient-to-tr  from-orange-100  to-green-300  relative  z-10">
      <div className="w-full h-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2   rounded-xl absolute z-20 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  shadow-md shadow-black bg-orange-500">
        <p className="w-full h-1/5 text-center place-content-center text-xl text-blue-600 ">
          Welcome 
        </p>
       
        <div className="w-full h-1/4 flex flex-col gap-2 items-center sm:w-full md:w-full lg:w-full xl:w-full  ">
         
        <input onChange={(e)=>{fileaccess(e)}} className="w-3/4 h-1/2 sm:w-3/4 md:w-3/4  lg:w-1/2 xl:w-1/2  rounded-lg w- bg-gradient-to-tr from-indigo-500 to-pink-400" type="file" name="" id="" />
         
          <input ref={inputref} onChange={()=>setname(inputref.current.value)} className="w-3/4 h-1/2 sm:w-3/4 md:w-3/4  lg:w-1/2 xl:w-1/2 rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-400" type="text"  placeholder="Please enter your name"/>

        </div>

        <div className="w-full h-3/5 absolute z-30 sm:w-full md:w-full lg:w-full xl:w-full flex justify-center items-center  md:flex md:justify-center  ">
          <button  onClick={()=>handleclick()} className="w-1/2  sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 h-20 bg-green-500 text-center  rounded-lg cursor-pointer shadow-inner shadow-black   ">
            {" "}
            Tap to Reveal the Magic 🎉
          </button>
        </div>
      </div>
    </div>
    <Birthday_wishing_Page  />    
  </wish_context.Provider>
    
  );
};

export default App;
