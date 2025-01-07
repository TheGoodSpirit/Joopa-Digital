import React from "react";
import Button from "../Button/button";
import img01 from "../../assets/Images/img-1.jpg";

const AboutSection = () => (
    <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 max-sm:py-5 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                <div className="mt-12 md:mt-0">
                    <img src={img01} alt="About Us" className="object-cover rounded-lg" />
                </div>
                <div>
                    <span className="text-[#FC6A02] font-semibold uppercase">Who we are</span>
                    <h2 className="text-3xl mt-3 font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat hendrerit sed ut tortor.
                    </p>
                    <ul className="mt-8 ml-8 text-gray-600 font-semibold marker:text-[#FC6A02] list-disc">
                        <li>Innovative Digital Experts</li>
                        <li>Client-Focused Approach</li>
                        <li>Proven Excellence</li>
                        <li>Future-Ready Vision</li>
                    </ul>
                    <Button
                        value="Learn more about us →"
                        className="bg-[#FC6A02] hover:bg-[#C65301] hover:shadow-sm mt-8"
                    />
                </div>
            </div>
        </div>
    </section>
);

export default AboutSection;
