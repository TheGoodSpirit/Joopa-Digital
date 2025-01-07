import React from "react";
import Button from "../Button/button";

const CTASection = () => (
    <section className="bg-gradient-to-r from-[#271F53] to-[#3D3D96] w-full font-[sans-serif]">
        <div className="grid md:grid-cols-2 gap-4 items-center md:max-h-[475px] overflow-hidden">
            <div className="relative w-full h-full md:min-h-[470px]">
                <img
                    src="https://readymadeui.com/team-image.webp"
                    className="w-full h-full object-cover shrink-0"
                    alt="CTA"
                />
                <span className="absolute inset-0 bg-[#271F53] opacity-50"></span>
            </div>
            <div className="p-6 max-w-xl mx-auto">
                <h1 className="sm:text-4xl text-2xl font-bold text-white">
                    Let us build the bridge between your brand and the world
                </h1>
                <p className="mt-6 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Button
                    value="Boost Your Business →"
                    className="mt-8 bg-[#FC6A02] hover:bg-[#C65301] hover:shadow-sm"
                />
            </div>
        </div>
    </section>
);

export default CTASection;
