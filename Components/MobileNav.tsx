import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';
import Link from 'next/link'

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({nav, closeNav} : Props) => {
    const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]";

    return (
        <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10001] bg-[#212226]`}>
            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                <Link href="/" className="nav-link-mobile" onClick={closeNav}>Home</Link>
                <Link href="/resume" className="nav-link-mobile" onClick={closeNav}>Resume</Link>
                <Link href="/projects" className="nav-link-mobile" onClick={closeNav}>Projects</Link>
                <Link href="/#about-section" className="nav-link-mobile" onClick={closeNav}>About</Link>
            </div>
            <div onClick={closeNav}>
                <XMarkIcon className='absolute cursor-pointer top-[0.5rem] right-[1.5rem] w-[2.5rem] h-[2.5rem] text-sky-400'/>
            </div>
        </div>
    );
};

export default MobileNav;