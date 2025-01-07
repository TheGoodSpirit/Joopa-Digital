import React, { useState } from "react";

const DropdownMenu = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                id="mega-menu-dropdown-button"
                aria-expanded={isHovered}
                aria-controls="mega-menu-dropdown"
                className="flex items-center justify-between w-[90px] py-2 px-0 font-medium text-white"
            >
                About Us
                <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1l4 4 4-4"
                    />
                </svg>
            </button>
            <div
                id="mega-menu-dropdown"
                role="menu"
                className={`absolute rounded-lg z-10 grid w-[300px] grid-cols-2 text-sm bg-white md:grid-cols-3 bg-white shadow-lg ${
                    isHovered ? "" : "hidden"
                }`}
            >
                <div className="w-[300px] p-4 pb-0 md:pb-4">
                    <ul className="space-y-2" aria-labelledby="mega-menu-dropdown-button">
                        <li className="py-2 px-6 rounded-lg hover:bg-[#FC6A02] hover:text-white">
                            <a href="#">
                                About Us
                            </a>
                        </li>
                        <li className="py-2 px-6 rounded-lg hover:bg-[#FC6A02] hover:text-white">
                            <a href="#">
                                Library
                            </a>
                        </li>
                        <li className="py-2 px-6 rounded-lg hover:bg-[#FC6A02] hover:text-white">
                            <a href="#">
                                Resources
                            </a>
                        </li>
                        <li className="py-2 px-6 rounded-lg hover:bg-[#FC6A02] hover:text-white">
                            <a href="#">
                                Pro Version
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DropdownMenu;