import React, { useState } from 'react';
import Nav from "@/Components/Nav";
import MobileNav from '@/Components/MobileNav';
import Footer from '@/Components/Footer';

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
            <Footer />
        </div>
    )
}

export default Layout