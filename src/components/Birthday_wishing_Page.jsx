import { useContext, useEffect, useRef, useState } from "react";
import { wish_context } from "./wish_context";
import confetti from "canvas-confetti";
import birthday_song from "../assets/Music/happy-birthday-song.mp3";

import mute from "../assets/images/mute_icon.svg";

const Birthday_wishing_Page = () => {
  const { wish, name, image } = useContext(wish_context);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  //   const reader = new FileReader()

  // Play Audio
  const playAudio = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true); // Track audio state
    }
  };

  // Stop Audio
  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false); // Track audio state
    }
  };

  // Confetti Animation
  const triggerConfetti = () => {
    confetti({
      particleCount: 500,
      spread: 100,
      startVelocity: 40,
      decay: 0.9,
      origin: { x: 0.5, y: 0.5 },
      gravity: 0.7,
      colors: ["#ff6347", "#ff0", "#ff69b4", "#00ff00", "#1e90ff", "#800080"],
      shapes: ["circle", "square", "star", "triangle"],
      zIndex: 10000,
    });
  };

  // Triggering confetti and audio on wish
  useEffect(() => {
    if (wish) {
      playAudio();
      triggerConfetti();
    } else {
      stopAudio();
    }

    // Cleanup
    return () => {
      stopAudio();
    };
  }, [wish]);

  return (
    <div
      className={
        wish
          ? "w-full h-5/6 sm:w-full md:w-full lg:w-1/2 xl:w-1/2 bg-gradient-to-tr from-pink-500 to-yellow-400 animate-gradient bg-blast sm:text-xs md:text-sm lg:text-base xl:text-xl absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col rounded-lg shadow-black shadow-lg "
          : "w-1/2 h-1/2 bg-green-900 text-white text-3xl absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden "
      }
    >
      <div className="w-full h-3/5 sm:1/2 md:w-1/2 lg:w-full xl:w-full flex justify-center ">
        <img
          src={image}
          alt="Birthday Card"
          className="w-full h-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4"
        />
      </div>
      <div className="w-full h-2/5 text-center place-content-end absolute z-60 text-2xl top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-pink-800">
          Wishing you all the happiness in the world! 🥳
        </p>
        <strong className="text-yellow-400">
          🎉 Happy Birthday, {name}! 🎉
        </strong>
      </div>
      <audio
        ref={audioRef}
        src={birthday_song}
        loop
        aria-label="Birthday Song"
      />

      <button
        onClick={isPlaying ? stopAudio : playAudio}
        className="absolute top-4 right-4 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all"
      >
        <img src={mute} alt="" />
      </button>
    </div>
  );
};

export default Birthday_wishing_Page;
