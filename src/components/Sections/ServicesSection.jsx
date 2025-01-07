import React from "react";
import Button from "../Button/button";
import img01 from "../../assets/Images/img-1.jpg";
import img02 from "../../assets/Images/img-2.png";
import ServiceCard from "../serviceCard/serviceCard";

const ServicesSection = () => (
    <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-left">
                <span className="text-[#FC6A02] font-semibold uppercase">Our Services</span>
                <h2 className="text-3xl mt-3 font-extrabold text-gray-900 sm:text-4xl">Our Expertise, Your Advantage</h2>
            </div>
            <div className="flex flex-wrap gap-5 justify-center container py-16 px-4 sm:px-6 lg:px-8">
                <ServiceCard name="Butwal Annapurna Home Tuition" img={img01} />
                <ServiceCard name="Facebook Boosting" img={img02} price={20} />
                <ServiceCard name="Instagram Boosting" img={img01} price={99} />
                <ServiceCard name="Social Media Management" img={img02} price={99} />
            </div>
            <div className="flex justify-center">
                <Button value="Explore All Services →" className="!text-[#FC6A02] hover:shadow-sm" />
            </div>
        </div>
    </section>
);

export default ServicesSection;
