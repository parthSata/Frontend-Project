import React from "react";
import Header from "./Header";

function Gallary() {
  const images = [
    "https://images.pexels.com/photos/17251314/pexels-photo-17251314/free-photo-of-building-of-wernigerode-castle-in-germany.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6088130/pexels-photo-6088130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8799029/pexels-photo-8799029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2464449/pexels-photo-2464449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/18743694/pexels-photo-18743694/free-photo-of-reflection-of-buildings-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17251314/pexels-photo-17251314/free-photo-of-building-of-wernigerode-castle-in-germany.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6088130/pexels-photo-6088130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8799029/pexels-photo-8799029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2464449/pexels-photo-2464449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/18743694/pexels-photo-18743694/free-photo-of-reflection-of-buildings-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/18743694/pexels-photo-18743694/free-photo-of-reflection-of-buildings-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/18743694/pexels-photo-18743694/free-photo-of-reflection-of-buildings-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <>
      <div className="">
        <Header />
        <div className="flex justify-center items-center mt-10  mb-6 font-bold">
          <span className="text-2xl" style={{ fontFamily: "Bai Jamjuree" }}>
            Image Collection
          </span>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-gray-200 m-4 h-40 flex items-center  justify-center"
            >
              <img src={image} key={index} alt="" className="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallary;
