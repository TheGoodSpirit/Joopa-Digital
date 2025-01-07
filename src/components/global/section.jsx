import React from "react";
import HomeSection from "../Parts/HomeSection.jsx";
import AboutSection from "../Parts/AboutSection.jsx";
import ServicesSection from "../Parts/ServicesSection.jsx";
import CTASection from "../Parts/CTASection.jsx";
import HowWeWorkSection from "../Parts/HowWeWorkSection.jsx";

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