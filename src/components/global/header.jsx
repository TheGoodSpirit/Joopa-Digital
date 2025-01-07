import React, { useState, useEffect } from 'react';
import Button from '../button.jsx';
import '../../index.css';
import logo from '../../assets/Images/Logo.png';
import { RiMenuUnfold4Line } from "react-icons/ri";
import DropdownMenu from '../dropdownMenu.jsx';

const Header = () => {
    const [top, setTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setTop(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`bg-gradient-to-r from-[#271F53] to-[#3D3D96] z-10 h-[100px] w-full fixed bg-opacity-50 backdrop-filter backdrop-blur-3xl flex justify-around items-center px-10 py-2 max-sm:px-4
                    ${!top ? '' : 'bg-white shadow-lg'}`}
            >
                <div className="flex flex-wrap items-center lg:gap-y-2 gap-y-4 gap-x-4 w-full max-w-screen-xl mx-auto">
                    <a href="#">
                        <img src={logo} alt="Company Logo" className="w-[100px] top-0" />
                    </a>
                </div>
                <nav>
                    <ul className="gap-5 flex justify-evenly items-center max-sm:hidden">
                        {/* <li>
                            <a className="text-white hover:text-[#FC6A02]" href="/">Home</a>
                        </li> */}
                        <li>
                        <DropdownMenu />
                        </li>
                        <li>
                            <a className="text-white hover:text-[#FC6A02]" href="/services">Services</a>
                        </li>
                        <li>
                            <a className="text-white hover:text-[#FC6A02]" href="/certificates">Certificates</a>
                        </li>
                        <li>
                            <a className="text-white hover:text-[#FC6A02]" href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="text-3xl hidden max-sm:block text-white">
                    <Button value={<RiMenuUnfold4Line />} className={"bg-[#FC6A02] rounded-lg"} /> 
                </div>
            </header>
        </>
    );
};

export default Header;