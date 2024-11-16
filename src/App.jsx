import { useRef, useState } from "react";
import Birthday_wishing_Page from "./components/Birthday_wishing_Page";
import {wish_context} from "./components/wish_context"

const App = () => {

let [wish,setwish]= useState(false)
let [name,setname] = useState(null)
 let inputref = useRef()


  
  return (
    <wish_context.Provider  value={{wish,name}}>
    <div className="w-full h-full sm:w-full md:w-full lg:w-full xl:w-full  bg-gradient-to-tr  from-orange-100  to-green-300  relative  z-10">
      <div className="w-full h-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2   rounded-xl absolute z-20 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  shadow-md shadow-black bg-orange-500">
        <p className="w-full h-1/5 text-center place-content-center text-xl text-blue-600 ">
          Welcome 
        </p>
        <div className="w-full h-1/5 flex justify-center sm:w-full md:w-full lg:w-full xl:w-full ">
          <input ref={inputref} onChange={()=>setname(inputref.current.value)} className="w-3/4 sm:w-3/4 md:w-3/4  lg:w-1/2 xl:w-1/2 rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-400" type="text"  placeholder="Please enter your name"/>
        </div>
        <div className="w-full h-3/5 absolute z-30 sm:w-1/2 md:w-full lg:w-full xl:w-full flex justify-center items-center  md:flex md:justify-center ">
          <button  onClick={()=>setwish(!wish)} className="w-1/2  sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 h-20 bg-green-500 text-center  rounded-lg cursor-pointer shadow-inner shadow-black   ">
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
