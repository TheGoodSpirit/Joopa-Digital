import React, { useState } from "react";

const DropdownMenu = () => {
    const [isHovered, setIsHovered] = useState(false);

    const options = [
        { label: "Introduction", link: "#" },
        { label: "Our Team", link: "#" },
        { label: "Our Activities", link: "#" },
        { label: "How We Work", link: "#" },
    ];

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

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
                className="flex items-center justify-between w-[90px] py-2 font-medium text-white"
            >
                About Us
                <svg
                    className="w-2.5 h-2.5 ms-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                    aria-hidden="true"
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
                className={`absolute rounded-lg z-10 grid w-[300px] text-sm bg-white shadow-lg ${
                    isHovered ? "block" : "hidden"
                }`}
            >
                <div className="w-full p-4">
                    <ul className="space-y-2" aria-labelledby="mega-menu-dropdown-button">
                        {options.map((option, key) => (
                            <a
                                key={key}
                                href={option.link}   
                            >
                                <li
                                className="py-2 px-6 rounded-lg hover:bg-[#FC6A02] hover:text-white" >{option.label}</li>
                            </a>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DropdownMenu;