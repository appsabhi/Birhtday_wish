import { useContext, useEffect, useRef } from "react";
import { wish_context } from "./wish_context";
import confetti from "canvas-confetti";
import birthday_song from "../assets/Music/happy-birthday-song.mp3";
import birthday_image from "../assets/images/akhila_image.jpg";

const Birthday_wishing_Page = () => {
  let { wish, name } = useContext(wish_context);
  let audioRef = useRef(null);
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (wish) {
      playAudio();
      confetti({
        particleCount: 1000, // More particles for a larger burst
        spread: 120, // Wider spread for dramatic effect
        startVelocity: 30, // Faster burst velocity
        decay: 0.9, // Slower decay (particles stay longer)
        origin: { x: 0.5, y: 0.5 }, // Confetti starts from the center
        gravity: 0.7, // Moderate gravity for slower fall
        colors: ["#ff6347", "#ff0", "#ff69b4", "#00ff00", "#1e90ff", "#800080"], // Vibrant colors
        shapes: ["circle", "square", "star", "triangle"], // Different shapes
        zIndex: 10000,
      });
    } else {
      stopAudio();
    }
  }, [wish]);
  console.log(name);

  return (
    <div
      className={
        wish
          ? "w-full h-2/3 sm:w-full md:w-full lg:w-1/2 xl:w-1/2 bg-gradient-to-tr from-pink-500 to-yellow-400 animate-gradient bg-blast  sm:text-xs md:text-sm lg:text-base xl:text-xl absolute z-50  top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  flex flex-col rounded-lg shadow-black shadow-lg "
          : "w-1/2 h-1/2 bg-green-900 text-white text-3xl absolute z-50  top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  hidden "
      }
    >
      <div className="w-full  h-3/5 sm:1/2 md:w-1/2 lg:w-full xl:w-full flex justify-center ">
        <img
          src={birthday_image}
          alt="Birthday Card"
          className="w-full h-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2  mb-4"
        />
      </div>
      <p className="w-full h-2/5  text-center place-content-end absolute z-60   text-2xl  top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2    ">
        <p className="text-pink-800 ">
          Wishing you all the happiness in the world! 🥳
        </p>
        <strong className="text-yellow-400">
          🎉 Happy Birthday, {name}! 🎉
        </strong>{" "}
      </p>
      <audio ref={audioRef} src={birthday_song} />
    </div>
  );
};

export default Birthday_wishing_Page;
