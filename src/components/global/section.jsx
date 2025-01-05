import React from 'react';
import Button from '../button';
import vid01 from "../../assets/Vid/vid01.mp4";
import img01 from "../../assets/Images/img-1.jpg";
import img02 from "../../assets/Images/img-2.png";
import { BsCheckCircleFill } from "react-icons/bs";
import ServiceCard from '../serviceCard.jsx';
import StepCard from '../stepCard.jsx';

const Section = ({ name }) => {

    if (name === "home") {
        return (
            <>
                <section className="bg-gradient-to-r from-[#271F53] to-[#3D3D96]">
                    <div className="gap-16 items-center py-8 pt-32 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">"Empowering Innovation,
                                Securing Solutions –Your IT Partner for the Future!"</h1>
                            <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>

                            <Button value="Learn more" className={"mt-8 bg-[#FC6A02] hover:bg-[#C65301] hover:shadow-sm"} />
                            <Button value="Learn more" className={"ml-8 hover:bg-transparent"} />
                        </div>

                        <div className="hidden grid-cols-1 gap-4 mt-8 lg:grid">
                            <video
                                className="w-full rounded-lg"
                                src={vid01}
                                alt="office content 1"
                                autoPlay
                                loop
                            />
                        </div>
                    </div>
                </section>
            </>
        );
    } else if (name === "about") {
        return (
            <>
                <section class="bg-gray-100">
                    <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                            <div class="mt-12 md:mt-0">
                                <img src={img01} alt="About Us Image" class="object-cover rounded-lg " />
                            </div>
                            <div class="">
                                <span class="text-[#FC6A02] font-semibold uppercase">who we are</span>
                                <h2 class="text-3xl mt-3 font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                                <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                                    eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                                    Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                                    malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                                <ul class="mt-8 ml-8 text-gray-600 font-semibold marker:text-[#FC6A02] list-disc">
                                    <li> {BsCheckCircleFill}Innovative Digital Experts</li>
                                    <li>Client-Focused Approach</li>
                                    <li>Proven Excellence</li>
                                    <li>Future-Ready Vision</li>
                                </ul>
                                <div class="mt-8">
                                    <Button value="Learn more about us &#8594;" className={"bg-[#FC6A02] hover:bg-[#C65301] hover:shadow-sm ml-5"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    } else if (name === "services") {
        return (
            <>
                <section class="bg-gray-100">
                    <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                            <div class="">
                                <span class="text-[#FC6A02] font-semibold uppercase">our services</span>
                                <h2 class="text-3xl mt-3 font-extrabold text-gray-900 sm:text-4xl">Our Expertise, Your Advantage</h2>
                            </div>
                        </div>
                        <div className=" flex flex-wrap gap-5 justify-center container py-16 px-4 sm:px-6 lg:px-8">
                            <ServiceCard name="Butwal Annapurna Home Tuition" img={img01} />
                            <ServiceCard name="Facebook Boosting" img={img02} price={20} />
                            <ServiceCard name="Instagram Boosting" img={img01} price={99} />
                            <ServiceCard name="Social Media Management" img={img02} price={99} />
                        </div>
                        <div className='flex justify-center'>
                            <Button value="Explore All Services &#8594;" className={"bg-[#FC6A02] hover:bg-[#C65301] hover:shadow-sm ml-5"} />
                        </div>
                    </div>
                </section>
            </>
        );
    } else if (name === "CTA") {
        return (
            <>
                <div class="bg-gradient-to-r from-[#271F53] to-[#3D3D96] w-full font-[sans-serif]">
                    <div class="grid md:grid-cols-2 gap-4 items-center md:max-h-[475px] overflow-hidden">
                        <div class="relative w-full h-full md:min-h-[470px]">
                            <img src="https://readymadeui.com/team-image.webp" class="w-full h-full object-cover shrink-0" />
                            <span class="w-full h-full absolute inset-0 bg-[#271F53] opacity-50"></span>
                        </div>
                        <div class="p-6 max-w-xl mx-auto">
                            <h1 class="sm:text-4xl text-2xl font-bold text-white">Let us build the bridge between your brand and the world</h1>
                            <div class="mt-6">
                                <p class="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nuncet
                                    tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
                                    ultrices, non consequat mauris tincidunt.</p>
                                <p class="mt-2 text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nuncet
                                    tempus blandit, metus mi consectetur nibh.</p>
                            </div>
                            <Button value="Boost Your Businesses &#8594;" className={"mt-8 bg-[#FC6A02] hover:bg-[#C65301] hover:shadow-sm"} />
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (name === "How We Work") {
        return (
            <>
                <section class="bg-gray-100 py-16 px-8">
                    <div class="max-w-4xl mx-auto text-center">
                        <h2 class="text-4xl font-bold mb-4">How We Works</h2>
                        <p class="text-lg text-gray-500 mb-12">
                            Delving into the intricacies of everything from technology and nature to societal structures, this book offers readers a comprehensive understanding of how things function.
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <StepCard step={1} name={"Create your account"} desc={"\"Create Your Account\" is your step-by-step guide to establishing a personalized online presence tailored to your needs. This comprehensive handbook walks you through the process of setting."}/>
                        <StepCard step={2} name={"Create your account"} desc={"\"Create Your Account\" is your step-by-step guide to establishing a personalized online presence tailored to your needs. This comprehensive handbook walks you through the process of setting."}/>
                        <StepCard step={3} name={"Create your account"} desc={"\"Create Your Account\" is your step-by-step guide to establishing a personalized online presence tailored to your needs. This comprehensive handbook walks you through the process of setting."}/>
                        <StepCard step={4} name={"Create your account"} desc={"\"Create Your Account\" is your step-by-step guide to establishing a personalized online presence tailored to your needs. This comprehensive handbook walks you through the process of setting."}/>
                        </div>
                    </div>
                </section>
            </>
        );
    }

}

export default Section;