import React from "react";
import Image from "next/image";
import hero from "/public/images/hero_background.jpg";

import avatar from "/public/images/kason-avatar.svg"
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="bg-[#303136]">
            <div className="w-full">
                <Image src={hero} alt="Hero image" className="w-full h-[800px]" quality="100"/>
                <div className="absolute grid grid-cols-1 lg:grid-cols-[60%_40%] top-[30%] inset-x-0 max-w-screen-xl mx-auto px-8 lg:px-24">
                    <div className="text-2xl inline w-[100%] h-[100%] text-white text-center lg:text-left">
                        <div>Hi, I&apos;m</div>
                        <h1 className="text-5xl md:text-6xl xl:text-7xl text-white font-medium">
                            Kason Shiroma
                        </h1>
                        <div className="text-3xl md:text-4xl font-medium md:text-white">Software Developer</div>
                        <hr className='mt-6 w-6/12 border-sky-500 bg-sky-500 border-2 mx-auto lg:mx-0'/>
                        <div className="font-medium my-6 text-xl">I&apos;m passionate about creating engaging and user-friendly web experiences.</div>
                        <Link href="/resume" className="bg-[linear-gradient(35deg,white_50%,#3c3d44_50%)] bg-animation bg-right-bottom transition-all duration-[0.3s] ease-[ease] hover:bg-left-top hover:text-black text-white py-3 px-6 text-xl font-semibold inline-block">
                            Résumé
                        </Link>
                    </div>
                    <div className="w-100% justify-self-end">
                        <Image src={avatar} alt="Profile avatar image" className="w-80 hidden lg:flex" quality="100"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;