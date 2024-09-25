import React, { useState } from 'react';
import Nav from "@/Components/Nav";
import MobileNav from '@/Components/MobileNav';
import Footer from '@/Components/Footer';
import { Analytics } from "@vercel/analytics/react"

type LayoutProps = {
    children: React.ReactNode,
}

const Layout = ({ children }: LayoutProps) => {
    const [nav, setNav] = useState(false);
    const openNav = () => setNav(true);
    const closeNav = () => setNav(false);

    return (
        <div className=''>
            <MobileNav nav={nav} closeNav={closeNav}/>
            <Nav openNav={openNav}/>
            { children }
            <Analytics />
            <Footer />
        </div>
    )
}

export default Layout