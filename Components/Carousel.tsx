import { StaticImageData } from 'next/image';
import { useState } from 'react'
import {
    IoIosArrowBack,
    IoIosArrowForward,
  } from "react-icons/io";
import Image from "next/image";

const Carousel = ({slides} : {slides:StaticImageData[]}) => {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
      if (current === 0) setCurrent(slides.length - 1);
      else setCurrent(current - 1);
    };
  
    let nextSlide = () => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    };
  
    return (
      <div className="overflow-hidden relative">
        <div
          className={`flex transition ease-out duration-500`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((s) => {
            return <Image key={s.src} src={s} width={1000} className='h-auto xl:h-[500px] w-[100%] min-w-[-webkit-fill-available]' alt="Pixelchess slide"/>;
          })}
        </div>
  
        <div className="absolute top-0 h-[90%] w-full justify-between items-center flex text-white px-2 text-4xl">
          <div className='bg-white text-black rounded-full w-[40px] h-[40px] text-center flex justify-center absolute left-2 hover:opacity-80 transition-all duration-[0.3s] ease-[ease] shadow-lg'>
            <button onClick={previousSlide}>
              <IoIosArrowBack />
            </button>
          </div>
          <div className='bg-white text-black rounded-full w-[40px] h-[40px] text-center flex justify-center absolute right-2 hover:opacity-80 transition-all duration-[0.3s] ease-[ease] shadow-lg'>
            <button onClick={nextSlide}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
  
        <div className="py-6 flex justify-center gap-3 w-full">
          {slides.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full w-3 h-3 cursor-pointer  ${
                  i == current ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    );
}

export default Carousel