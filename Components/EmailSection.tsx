"use client"
import React, { useState } from 'react'

const EmailSection = () => {
    const [show, setShow] = useState(false);
    const handleSubmit = async (e: React.ChangeEvent<any>) => {
        e.preventDefault();

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: e.target.email.value,
                name: e.target.name.value,
                message: e.target.message.value,
            }),
        });

        const { error } = await res.json();
        if (error) {
            console.log(error);
            return;
        } else {
            setShow(!show);
        }
    }
    return (
        !show ?
            <form onSubmit={handleSubmit}>
                <div className='sm:flex gap-6 mb-6'>
                    <input
                        name='name'
                        type='name'
                        id='name'
                        required
                        className='bg-slate-300 border border-[#33353F] placeholder-slate-600 placeholder:italic text-[#212226] text-lg rounded block w-full md:w-[20vw] 2xl:w-[17vw] py-3 px-4 mb-6 sm:mb-0'
                        placeholder='Name'
                    />
                    <input
                        name='email'
                        type='email'
                        id='email'
                        required
                        className='bg-slate-300 border border-[#33353F] placeholder-slate-600 placeholder:italic text-[#212226] text-lg rounded block w-full md:w-[20vw] 2xl:w-[17vw] py-3 px-4'
                        placeholder='Email'
                    />
                </div>
                <textarea
                    name='message'
                    id='message'
                    required
                    className='bg-slate-300 border border-[#33353F] placeholder-slate-600 placeholder:italic text-[#212226] text-lg rounded block w-full py-3 px-4 min-h-44 mb-6'
                    placeholder='Message'
                />
                <button type='submit' className='bg-[linear-gradient(35deg,white_50%,#303136_50%)] bg-animation bg-right-bottom transition-all duration-[0.3s] ease-[ease] hover:bg-left-top hover:text-black text-white py-3 text-xl w-32 font-medium rounded inline-block'>Send</button>
            </form>
        :
        <div className='bg-gray-700 rounded w-full h-fit md:w-[50vw] 2xl:w-[34vw] text-slate-300 text-semibold text-lg p-10 text-center'>Your message has been successfully sent. Thanks for reaching out!</div>
    )
}

export default EmailSection