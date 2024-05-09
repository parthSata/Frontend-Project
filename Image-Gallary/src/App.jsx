import { useState } from "react";
import "./App.css";

function App() {
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
        <div className="flex justify-between items-center">
          <ul className="flex flex-row gap-10">
            <li className="">
              <i className="fa-brands fa-facebook fa-lg"></i>
            </li>
            <li className="">
              <i className="fa-brands fa-twitter fa-lg"></i>
            </li>
            <li className="">
              <i className="fa-brands fa-instagram fa-lg"></i>
            </li>
          </ul>

          <ul className="flex flex-row gap-10 font-medium text-lg">
            <li className="">Home</li>
            <li className="">About</li>
            <li className="">Gallary</li>
            <li className="">Contact</li>
          </ul>

          <ul className="flex flex-row gap-10">
            <li className="">
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </li>
            <li className="">
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
            </li>
          </ul>
        </div>

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
            {/* <div className=" absolute  z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2 ">
              <button
                type="button"
                class="w-5 h-5 rounded-full hover:bg-gray-700 hover:ring-4 bg-gray-500"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="w-5 h-5 rounded-full hover:bg-gray-700 hover:ring-4 bg-gray-500"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="w-5 h-5 rounded-full hover:bg-gray-700 hover:ring-4 bg-gray-500"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                className="w-5 h-5 rounded-full hover:bg-gray-700 hover:ring-4 bg-gray-500"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
              <button
                type="button"
                className="w-5 h-5 rounded-full hover:bg-gray-700 hover:ring-4 bg-gray-500"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              ></button>
            </div> */}
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

export default App;
