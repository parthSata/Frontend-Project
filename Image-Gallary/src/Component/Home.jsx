import React, { useState } from "react";
import Css from "../App";
import Header from "./Header";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentText, setCurrentText] = useState("Image 1");

  // Array of image URLs
  const images = [
    "https://images.pexels.com/photos/17251314/pexels-photo-17251314/free-photo-of-building-of-wernigerode-castle-in-germany.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6088130/pexels-photo-6088130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8799029/pexels-photo-8799029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2464449/pexels-photo-2464449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/18743694/pexels-photo-18743694/free-photo-of-reflection-of-buildings-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const Text = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5"];

  // Function to handle clicking on the previous button
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    setCurrentText(
      Text[currentSlide === 0 ? images.length - 1 : currentSlide - 1]
    );
  };

  // Function to handle clicking on the next button
  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    setCurrentText(
      Text[currentSlide === images.length - 1 ? 0 : currentSlide + 1]
    );
  };

  return (
    <>
      <div className="">
        {/* icons  */}

        <Header />

        <div className="">
          <div className="flex justify-center items-center mt-16 font-bold">
            <span className="text-2xl" style={{ fontFamily: "Bai Jamjuree" }}>
              Image Gallary
            </span>
          </div>

          {/* Images  */}

          <div
            id="indicators-carousel"
            className="relative w-full mt-2"
            data-carousel="static"
          >
            <div className=" h-56 overflow-hidden rounded-lg mt-8 md:h-96">
              {/* Image slider */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500`}
                >
                  <img
                    src={image}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={prevSlide}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={nextSlide}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="font-semibold" style={{ fontFamily: "Bai Jamjuree" }}>
              {currentText}
            </p>
          </div>

          {/* Images  */}
        </div>

        {/* icons  */}
      </div>
    </>
  );
}

export default Home;
