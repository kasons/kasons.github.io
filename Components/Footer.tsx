import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import Link from 'next/link'
import EmailSection from './EmailSection';

const Footer = () => {
  return (
    <div className='bg-[#212226] pt-16 pb-12 md:pt-24'>
        <div className='max-w-screen-xl mx-auto px-8 lg:px-24'>
            <div className='flex flex-col md:flex-row justify-center mb-14 gap-16'>
                <EmailSection />
                <div className='flex-col'>
                    <div className='flex-row'>
                        <div className='text-2xl text-slate-300 font-semibold mb-[1rem]'>
                            Address
                        </div>
                        <div className='text-xl text-slate-400 font-semibold mb-[2rem]'>
                            Honolulu, HI
                        </div>
                        <div className='text-2xl text-slate-300 font-semibold mb-[1rem]'>
                            Email
                        </div>
                        <div className='text-xl text-slate-400 font-semibold mb-[2rem] hover:brightness-125'>
                            <Link href="mailto:kasonkshiroma@gmail.com">
                                kasonkshiroma@gmail.com
                            </Link>
                        </div>
                    </div>
                    <div className='flex-col'>
                        <div className='text-2xl text-slate-300 font-semibold mb-[1rem]'>
                            Socials
                        </div>
                    </div>
                    <div className='flex gap-8'>
                        <Link href="https://www.linkedin.com/in/kason-shiroma/" target="_blank">
                            <FaLinkedinIn className='text-slate-400 size-9 hover:brightness-125'/>
                        </Link>
                        <Link href="https://github.com/kasons" target="_blank">
                            <FiGithub className='text-slate-400 size-9 hover:brightness-125'/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='text-center text-slate-400 text-sm md:text-md'>
                Kason Shiroma 2024. &nbsp; Made using Next.js. &nbsp; View code&nbsp;<a className="underline underline-offset-2 hover:brightness-125" href='https://github.com/kasons/kasons.github.io' target="_blank">on Github.</a>
            </div>
        </div>
    </div>
  )
}

export default Footer