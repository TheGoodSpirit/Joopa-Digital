import React from "react";
import HomeSection from "../sections/HomeSection.jsx";
import AboutSection from "../sections/AboutSection.jsx";
import ServicesSection from "../sections/ServicesSection.jsx";
import CTASection from "../Sections/CTASection.jsx";
import HowWeWorkSection from "../Sections/HowWeWorkSection.jsx";

const sectionsData = [
    {
        name: "hero",
        content: (
            <HomeSection />
        ),
    },
    {
        name: "about",
        content: (
            <AboutSection />
        ),
    },
    {
        name: "services",
        content: (
           <ServicesSection />
        ),
    },
    {
        name: "CTA",
        content: (
            <CTASection />
        ),
    },
    {
        name: "How We Work",
        content: (
            <HowWeWorkSection />
        ),
    },
];

const Section = ({ name }) => {
    const section = sectionsData.find((s) => s.name.toLowerCase() === name.toLowerCase());
    return section ? section.content : <h1> {name} section not found</h1>;
};

export default Section;