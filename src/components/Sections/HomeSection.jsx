import React from "react";
import Button from "../Button/button";
import vid01 from "../../assets/Vid/vid01.mp4";

const HomeSection = () => (
    <section className="bg-gradient-to-r from-[#271F53] to-[#3D3D96]">
        <div className="gap-16 items-center py-8 pt-32 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-10 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    "Empowering Innovation, Securing Solutions – Your IT Partner for the Future!"
                </h1>
                <p className="mb-4">
                    We are strategists, designers, and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.
                </p>
                <Button
                    value="Learn more"
                    className="mt-8 bg-[#FC6A02] hover:bg-[#C65301] hover:shadow-sm"
                />
            </div>
            <div className="hidden grid-cols-1 gap-4 mt-20 lg:grid">
                <video
                    className="w-full rounded-lg"
                    src={vid01}
                    autoPlay
                    loop
                />
            </div>
        </div>
    </section>
);

export default HomeSection;
