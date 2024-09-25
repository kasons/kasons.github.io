import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";
import Link from 'next/link'

interface Props {
    openNav: () => void;
}

const Nav = ({openNav} : Props) => {
    return (
        <div className="w-[100%] fixed z-[10000] top-0 h-[7.5vh] bg-[#212226] shadow-md">
            <div className="flex items-center justify-between w-[90%] mx-auto h-[100%]">
                <div className="flex flex-1 sm:items-stretch sm:justify-start font-[livvic] text-white">
                    <Link href="/" className="text-link text-5xl">
                        k.
                    </Link>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* <div className="text-sky-500 font-bold ml-8 hidden md:block">|</div> */}
                    <Link href="/resume" className="nav-link">Resume</Link>
                    <Link href="/#projects-section" className="nav-link ml-8">Projects</Link>
                    <Link href="/#about-section" className="nav-link ml-8">About</Link>
                </div>
                <div onClick={openNav}>
                    <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-sky-400"/>
                </div>
            </div>
        </div>
    );
};

export default Nav;