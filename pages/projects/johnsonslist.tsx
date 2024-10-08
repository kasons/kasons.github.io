import React from 'react'
import Carousel from '@/Components/Carousel';
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link'
import JLLanding from "/public/images/projects/jllanding.png"
import JLHome from "/public/images/projects/jlhome.png"
import JLShop from "/public/images/projects/jlshop.png"

const pixelchess = () => {
    let slides = [
        JLLanding,
        JLHome,
        JLShop,
        ];
  return (
    <div className='bg-[#303136] py-16 md:pt-24 md:pb-36'>
        <div className='max-w-screen-xl mx-auto px-8 lg:px-24'>
            <h1 className='text-4xl font-semibold text-white mt-[2rem] mb-[1rem]'>
                Johnsonslist
            </h1>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex w-fit gap-4'>
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
                <Link href="https://johnsonslist.github.io/" target="_blank" className='text-link text-xl font-semibold text-white mt-5 w-fit md:ml-auto md:mr-10 md:mt-0'>
                    View Guide
                    <FiExternalLink className='inline-block ml-2 mb-[6px]'/>
                </Link>
                <Link href="https://github.com/Johnsonslist/Johnsonslist" target="_blank" className='text-link text-xl font-semibold text-white mt-5 md:mt-0 w-fit'>
                    View Code
                    <FaGithub className='inline-block ml-2 mb-[6px]'/>
                </Link>
            </div>
            <hr className='mt-2 w-9/12 md:w-5/12 border-sky-500 bg-sky-500 border-2'/>
            <div className="w-[90%] m-auto pt-11">
                <Carousel slides={slides} key="johnsonslist"/>
            </div>
            <p className='text-xl text-slate-300 mt-16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Johnsonslist is an online marketplace designed for undergraduate and graduate students to trade common goods. Modelled off Craigslist, Johnsonslist allows users to sell and buy items from other users.</p>
            <p className='text-xl text-slate-300 mt-6'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This was a project for my ICS 314 Software Engineering class. It exposed me to Javascript and React for the first time and this was my first full scale web application. I really admire websites with effective and functional UI, so I dedicated significant time designing the UI and front end. I focused on creating an intuitive design, ensuring smooth navigation and incorporating visually appealing elements. My goal was to deliver a polished, user-friendly website that reflects my passion for quality design.</p>
        </div>

    </div>
  )
}

export default pixelchess