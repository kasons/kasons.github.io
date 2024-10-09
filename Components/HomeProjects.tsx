import React from 'react';
import Image from "next/image";
import JlLogo from "/public/images/projects/JlLogo.jpg"
import OctoRecipesLogo from "/public/images/projects/octorecipeslogo.jpg"
import PixelchessLogo from "/public/images/projects/pixelchesslogo.jpg"
import Link from 'next/link'

const HomeProjects = () => {
    return (
        <div className='bg-[#303136] py-16 md:py-24' id="projects-section">
            <div className='max-w-screen-2xl mx-auto px-8 lg:px-24'>
                <h1 className='text-4xl font-medium text-white mb-[2rem] w-fit'>
                    Projects
                </h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                    <div className='flex flex-wrap justify-center lg:justify-start'>
                        <Link href="/projects/pixelchess" className='w-[390px] h-[390px] overflow-hidden'>
                            <Image src={PixelchessLogo} alt="Pixelchess project image" className="min-h-80 w-[100%] cursor-pointer object-cover transition duration-[0.3s] ease-[ease] hover:scale-110 hover:brightness-50" quality="100"/>
                        </Link>
                        <div className='mt-8'>
                            <h1 className='text-2xl text-slate-300 font-semibold'>
                                Pixelchess
                            </h1>                            
                            <p className='text-[18px] text-slate-300 mt-4 h-40 sm:h-24 lg:h-52 xl:h-40'>Pixelchess is an AR Auto-battler game similar to Auto Chess or TFT but can be played in any environment using Augmented Reality.</p>
                            <hr className='w-3/12 border-sky-500 bg-sky-500 border-2 mb-4'/>
                            <div className='flex w-fit gap-4'>
                                <p className='text-sm text-slate-400'>
                                    Unity
                                </p>
                                <p className='text-sm text-slate-400'>
                                    C#
                                </p>
                                <p className='text-sm text-slate-400'>
                                    AR
                                </p>
                                <p className='text-sm text-slate-400'>
                                    Blender
                                </p>
                            </div>
                            <Link href="/projects/pixelchess" className="bg-[linear-gradient(35deg,white_50%,#212226_50%)] bg-animation bg-right-bottom transition-all duration-[0.3s] ease-[ease] hover:bg-left-top hover:text-black text-white mt-6 mb-8 py-3 px-6 text-md font-medium inline-block">
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center lg:justify-start'>
                        <Link href="/projects/johnsonslist" className='w-[390px] h-[390px] overflow-hidden'>
                            <Image src={JlLogo} alt="Johnsonslist project image" className="min-h-80 w-[100%] cursor-pointer object-cover transition duration-[0.3s] ease-[ease] hover:scale-110 hover:brightness-50" quality="100"/>
                        </Link>
                        <div className='mt-8'>
                            <h1 className='text-2xl text-slate-300 font-semibold'>
                                Johnsonslist
                            </h1>
                            <p className='text-[18px] text-slate-300 mt-4 h-40 sm:h-24 lg:h-52 xl:h-40'>A Craigslist style website designed for  undergraduate and graduate students to trade common goods. This was my first time using React in a full scale project.</p>
                            <hr className='w-3/12 border-sky-500 bg-sky-500 border-2 mb-4'/>
                            <div className='flex gap-4 w-fit'>
                                <p className='text-sm text-slate-400'>
                                    React
                                </p>
                                <p className='text-sm text-slate-400'>
                                    Javascript
                                </p>
                                <p className='text-sm text-slate-400'>
                                    MeteorJS
                                </p>
                                <p className='text-sm text-slate-400'>
                                    MongoDB
                                </p>
                            </div>
                            <Link href="/projects/johnsonslist" className="bg-[linear-gradient(35deg,white_50%,#212226_50%)] bg-animation bg-right-bottom transition-all duration-[0.3s] ease-[ease] hover:bg-left-top hover:text-black text-white mt-6 mb-8 py-3 px-6 text-md font-medium inline-block">
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center lg:justify-start'>
                        <Link href="/projects/octorecipes" className='w-[390px] h-[390px] overflow-hidden'>
                            <Image src={OctoRecipesLogo} alt="Octorecipes project image" className="min-h-80 w-[100%] cursor-pointer object-cover transition duration-[0.3s] ease-[ease] hover:scale-110 hover:brightness-50" quality="100"/>
                        </Link>
                        <div className='mt-8'>
                            <h1 className='text-2xl text-slate-300 font-semibold'>
                                Octorecipes
                            </h1>
                            <p className='text-[18px] text-slate-300 mt-4 h-40 sm:h-24 lg:h-52 xl:h-40'>A cookbook app that allows users to organize their cooking recipes with labels, difficulty and experience. This was a class project that helped me gain experience with React.</p>
                            <hr className='w-3/12 border-sky-500 bg-sky-500 border-2 mb-4'/>
                            <div className='flex gap-4'>
                                <p className='text-sm text-slate-400'>
                                    React
                                </p>
                                <p className='text-sm text-slate-400'>
                                    Javascript
                                </p>
                                <p className='text-sm text-slate-400'>
                                    MeteorJS
                                </p>
                                <p className='text-sm text-slate-400'>
                                    MongoDB
                                </p>
                            </div>
                            <Link href="" className="bg-[linear-gradient(35deg,white_50%,#212226_50%)] bg-animation bg-right-bottom transition-all duration-[0.3s] ease-[ease] hover:bg-left-top hover:text-black text-white mt-6 mb-8 py-3 px-6 text-md font-medium inline-block">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <Link href="/projects" className='text-link mt-[2rem] text-2xl font-semibold w-fit mt-4'>
                    / More Projects
                </Link> */}
            </div>
        </div>
    );
};

export default HomeProjects;