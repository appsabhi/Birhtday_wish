const App = () => {
  return (
    <div className="w-full h-full sm:w-full md:w-full lg:w-full xl:w-full  bg-gradient-to-tr  from-orange-100  to-green-300  relative  z-10">
      <div className="w-full h-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2   rounded-xl absolute z-20 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  shadow-md shadow-black bg-orange-500">
        <p className="w-full h-1/3 text-center place-content-center text-xl text-blue-600 ">
          Welcome .Hit the Button See the Magic
        </p>

        <div className="w-full h-2/3 absolute z-30 sm:w-1/2 md:w-1/2 lg:w-full xl:w-full flex justify-center items-center  ">
          <button className="w-1/2  sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 h-20 bg-green-500 text-center  rounded-lg cursor-pointer shadow-inner shadow-black   ">
            {" "}
            Tap to Reveal the Magic 🎉
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;