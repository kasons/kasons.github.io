import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-[#212226] py-16 md:pt-24'>
        <div className='max-w-screen-xl mx-auto px-8 lg:px-24'>
            <div className='flex justify-center mb-10 gap-8'>
                <Link href="https://www.linkedin.com/in/kason-shiroma/" target="_blank">
                    <FaLinkedinIn className='text-slate-400 size-10 hover:brightness-125'/>
                </Link>
                <Link href="https://github.com/kasons" target="_blank">
                    <FiGithub className='text-slate-400 size-10 hover:brightness-125'/>
                </Link>
                <Link href="mailto:kasonkshiroma@gmail.com">
                    <CiMail className='text-slate-400 size-10 hover:brightness-125'/>
                </Link>
            </div>
            <div className='text-center text-slate-400 text-sm md:text-md'>
                Kason Shiroma 2024. &nbsp; Made using Next.js. &nbsp; View code&nbsp;<a className="underline underline-offset-2 hover:brightness-125" href='https://github.com/kasons/kasons.github.io' target="_blank">on Github.</a>
            </div>
        </div>
    </div>
  )
}

export default Footer