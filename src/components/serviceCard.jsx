import React from "react";
import Button from "./button";
const serviceCard = ({ name, img, icon, price }) => {
    return (
        <>
            <div className="relative flex w-80 flex-col  rounded-xl bg-white bg-clip-border text-gray-700">
                <div className="relative mx-4 mt-5 h-40 overflow-hidden rounded-xl bg-[#FC6A02] bg-clip-border text-white shadow-md shadow-black-500">
                    <img src={img} alt="" />
                </div>
                <div className="p-6">
                    <h5 className="flex mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-[#FC6A02] antialiased">
                        {icon} {name}
                    </h5>
                    {name !== "Butwal Annapurna Home Tuition" && (
                        <p>Starting price : <span className="text-[#FC6A02]">{"$" + price}</span></p>
                    )}
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                    </p>
                </div>
                {/* <div className="p-6 pt-0">
                    <Button value={"Read More"} className={"select-none rounded-lg text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:shadow-lg bg-[#FC6A02] hover:bg-[#C65301] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"} />
                </div> */}
            </div>
        </>
    )
}

export default serviceCard;