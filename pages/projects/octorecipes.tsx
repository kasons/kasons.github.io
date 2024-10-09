import React from 'react'
import Carousel from '@/Components/Carousel';
import { FiExternalLink } from "react-icons/fi";
import Link from 'next/link'
import Octorecipeshome from "/public/images/projects/octorecipeshome.png"
import Spammusubirecipe from "/public/images/projects/spammusubirecipe.png"
import Addrecipe from "/public/images/projects/addrecipe.png"

const pixelchess = () => {
    let slides = [
        Octorecipeshome,
        Spammusubirecipe,
        Addrecipe,
        ];
  return (
    <div className='bg-[#303136] py-16 md:pt-24 md:pb-36'>
        <div className='max-w-screen-xl mx-auto px-8 lg:px-24'>
            <h1 className='text-4xl font-medium text-white mt-[2rem]'>
                Octorecipes
            </h1>
            <hr className='my-3 w-4/12 border-sky-500 bg-sky-500 border-2'/>
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
                <Link href="https://github.com/ics491-kkj/Octo-Recipes" target="_blank" className='text-link text-xl font-semibold text-white mt-5 md:mt-0 w-fit'>
                    View Code
                    <FiExternalLink className='inline-block ml-2 mb-[6px]'/>
                </Link>
            </div>
            <div className="w-[100%] m-auto pt-11">
                <Carousel slides={slides} key="octorecipes"/>
            </div>
            <p className='text-xl text-slate-300 mt-16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Octorecipes allows users to conveniently organize their favorite recipes. You can save and categorize your favorites, add photos and notes, and mark down recipes you&apos;ve tried or have yet to try.</p>
            <p className='text-xl text-slate-300 mt-6'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This was a project for my ICS 491 Software Engineering that allowed me to gain more experience working with React.</p>
        </div>

    </div>
  )
}

export default pixelchess