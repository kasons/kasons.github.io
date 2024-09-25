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
            return <Image src={s} width={1000} className='h-[500px] w-[100%] min-w-[-webkit-fill-available]' alt="Pixelchess slide"/>;
          })}
        </div>
  
        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-2 text-4xl">
          <div className='bg-opacity-50 bg-black h-[36px] absolute left-0'>
            <button onClick={previousSlide} className='hover:opacity-50'>
              <IoIosArrowBack />
            </button>
          </div>
          <div className='bg-opacity-50 bg-black h-[36px] absolute right-0'>
            <button onClick={nextSlide} className='hover:opacity-50'>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
  
        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
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