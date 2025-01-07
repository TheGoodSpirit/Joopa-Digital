import React, { useState, useEffect } from 'react';
import Button from '../Button/button.jsx';
import logo from '../../assets/Images/Logo.png';
import { RiMenuUnfold4Line } from "react-icons/ri";
import DropdownMenu from '../dropdownMenu.jsx';

const Header = () => {
    
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "/", visible: false },
        { name: "About", href: "/about", visible: true },
        { name: "Services", href: "/services", visible: true },
        { name: "Certificates", href: "/certificates", visible: true },
        { name: "Contact", href: "/contact", visible: true },
        
    ];

    return (
        <header
            className={`fixed z-10 w-full h-[100px] px-10 py-2 flex items-center justify-between bg-gradient-to-r from-[#271F53] to-[#3D3D96] 
                ${isScrolled ? 'bg-white shadow-lg bg-opacity-100' : 'bg-opacity-50 backdrop-filter backdrop-blur-3xl'}`}
        >
            <div className="max-w-screen-xl flex items-center justify-between w-full mx-auto">
                {/* Logo */}
                <a href="/">
                    <img src={logo} alt="Company Logo" className="w-[100px]" />
                </a>

                {/* Navigation */}
                <nav className="max-sm:hidden lg:flex md:flex sm:flex items-center gap-5">
                    {navItems
                        .filter(item => item.visible)
                        .map((item) => (
                            item.name === "About" ? (
                                <DropdownMenu key={item.name} /> // Show DropdownMenu for "About"
                            ) : (
                                <li key={item.name} className="list-none">
                                    <a
                                        href={item.href}
                                        className={`text-white hover:text-[#FC6A02] ${isScrolled && 'text-gray-900'}`}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            )
                        ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="sm:hidden">
                    <Button value={<RiMenuUnfold4Line />} className="bg-[#FC6A02] rounded-lg text-white text-3xl" />
                </div>
            </div>
        </header>
    );
};

export default Header;