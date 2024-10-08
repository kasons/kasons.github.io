import React from 'react'
import Carousel from '@/Components/Carousel';
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import PixelchessTitle from "/public/images/projects/pixelchesstitle.png"
import PixelchessGameplay from "/public/images/projects/pixelchessgameplay.png"
import PixelchessEditor from "/public/images/projects/pixelchesseditor.png"

const pixelchess = () => {
    let slides = [
        PixelchessTitle,
        PixelchessGameplay,
        PixelchessEditor,
        ];
  return (
    <div className='bg-[#303136] py-16 md:pt-24 md:pb-36'>
        <div className='max-w-screen-xl mx-auto px-8 lg:px-24'>
            <h1 className='text-4xl font-semibold text-white mt-[2rem] mb-[1rem]'>
                Pixelchess
            </h1>
            <div className='flex flex-col md:flex-row justify-between'>
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
                <hr className='block md:hidden mt-2 w-5/12 border-sky-500 bg-sky-500 border-2'/>
                <Link href="https://github.com/kasons/Pixelchess" target="_blank" className='text-link text-xl font-semibold text-white mt-5 md:mt-0 w-fit'>
                    View Code
                    <FaGithub className='inline-block ml-2 mb-[6px]'/>
                </Link>
            </div>
            <hr className='hidden md:block mt-2 w-5/12 border-sky-500 bg-sky-500 border-2'/>
            <div className="w-[90%] m-auto pt-11">
                <Carousel slides={slides} key="pixelchess"/>
            </div>
            <p className='text-xl text-slate-300 mt-16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pixelchess is an Augmented Reality Auto-battler game that brings characters to life in a battle simulation. It uses mobile devices to locate, position, and battle virtual characters which appear as if they are in the real world. Similar to Auto Chess or TFT, these characters automatically target an enemy character, each with their own abilities, and the team with the last characters standing wins.</p>
            <p className='text-xl text-slate-300 mt-6'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This was a project for my ICS 486 Virtual and Augmented Reality Programming class. I chose an Auto-battler because having tiny characters battling in the real world shows the potential of AR, blending the virtual world and reality and shows how we can transform the way we experience gaming.</p>
        </div>

    </div>
  )
}

export default pixelchess