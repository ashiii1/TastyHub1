import React, { useRef, useEffect } from "react";
import { topPicks } from "../data/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const TopPicks = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    // Automatically move to the next slide every 0.5 seconds
    const intervalId = setInterval(() => {
      if (splideRef.current) {
        splideRef.current.go('+1', false);
      }
    }, 500);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Top Picks
      </h1>
      <div className="hidden lg:flex max-w-[1520px] m-auto py-2 px-2">
        <Splide
          options={{
            perPage: 4,
            gap: "0.5rem",
            grag: "free",
            arrows: false,
            pagination: false,
          }}
          ref={splideRef}
        >
          {topPicks.map((item, index) => (
            <SplideSlide key={index}>
              <div className="rounded-3xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                  <p className="px-2 pt-4 font-bold text-2xl ">
                    {item.title}
                  </p>
                  <p className="px-2">{item.price}</p>
                  <button className="border-dotted border-white text-white mx-2 absolute bottom-4">
                    Add To Cart
                  </button>
                </div>
                <img
                  className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105  ease-out duration-300"
                  src={item.img}
                  alt={item.title}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default TopPicks;
