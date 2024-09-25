import React from 'react';
import Image from "next/image";
import portrait from "/public/images/portrait.jpg"

const About = () => {
    return (
        <div className='bg-[#393943] py-16 md:py-24' id='about-section'>
            <div className='grid grid-cols-1 md:grid-cols-[70%_30%] grid-rows-2 md:grid-rows-1 grid-rows-[40%_60%] sm:grid-rows-2 max-w-screen-2xl mx-auto px-8 lg:px-24'>
                <div>
                    <h1 className='text-4xl font-semibold text-white mb-[1rem] text-left mt-8 sm:mt-0'>
                        About Me
                    </h1>
                    <div className='mb-[3rem] flex justify-center md:justify-normal'>
                        <p className='text-xl text-slate-300 w-[80%] basis-[fit-content] md:basis-auto'>Hi I'm Kason. I'm a software developer with a bachelor's degree in computer science and over two years of professional experience in web application development. I'm passionate about creating intuitive and engaging user interfaces that enhance the overall user experience. I enjoy tackling challenges and continuously improving my skills to build efficient, user-friendly applications.</p>
                    </div>
                    <div className='text-2xl text-slate-300 font-semibold mb-[1rem]'>
                        My Skills
                    </div>
                    <div className='flex text-xl text-slate-300 gap-2 flex-wrap'>
                        <p className='text-lg text-slate-400 w-40'>
                            React
                        </p>
                        <p className='text-lg text-slate-400 w-40'>
                            Next.js
                        </p>
                        <p className='text-lg text-slate-400 w-40'>
                            Javascript
                        </p>
                        <p className='text-lg text-slate-400 w-40'>
                            Typescript
                        </p>
                        <p className='text-lg text-slate-400 w-40'>
                            Tailwind CSS
                        </p>
                        <p className='text-lg text-slate-400 w-40'>
                            Agile
                        </p>
                        <p className='text-lg text-slate-400 w-40'>
                            C++
                        </p>
                        <p className='text-lg text-slate-400 w-40'>
                            MeteorJS
                        </p>
                        <p className='text-lg text-slate-400 w-40'>
                            MongoDB
                        </p>
                        <p className='text-lg text-slate-400 w-40'>
                            Unity
                        </p>
                    </div>
                </div>
                <div className="w-100% md:justify-self-end row-start-1 md:col-start-2">
                    <Image src={portrait} alt="Profile avatar image" className="w-96 md:w-80 mx-auto flex" quality="100"/>
                </div>
            </div>
        </div>
    );
};

export default About;