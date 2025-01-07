import React from "react";
import StepCard from "../stepCard/stepCard";

const StepCardDetails = {
    1: {
        name: "Create a Project",
        desc: "Explore the future with our visionary innovation project.",
    },
    2: {
        name: "Invite Transaction Members",
        desc: "An exclusive opportunity awaits, encouraging collaboration.",
    },
    3: {
        name: "Begin Collaborating",
        desc: "Team up with us for an adventure in cooperation and new ideas.",
    },
    4: {
        name: "Close Deal",
        desc: "Secure success as deals flow smoothly and effortlessly.",
    },
    5: {
        name: "Close Deal",
        desc: "Secure success as deals flow smoothly and effortlessly.",
    },
    6: {
        name: "Close Deal",
        desc: "Secure success as deals flow smoothly and effortlessly.",
    },
}

const HowWeWorkSection = () => (
    <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-gray-500 mb-12">
                Delving into the intricacies of everything from technology and nature to societal structures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {Object.keys(StepCardDetails).map((key) => (
                    <StepCard
                        step={key}
                        name={StepCardDetails[key].name}
                        desc={StepCardDetails[key].desc}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default HowWeWorkSection;
