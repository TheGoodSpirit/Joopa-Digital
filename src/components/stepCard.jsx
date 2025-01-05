import React from "react";

const stepCard = ({ name, desc, step }) => {
    return (
        <>
            <div class="bg-gray-200 p-6 rounded-lg">
                <div class="text-2xl font-bold mb-4 flex items-center space-x-2">
                    <span class="py-2 px-4 rounded-lg bg-[#FC6A20] text-white mr-5">{step}</span>
                    <span>{name}</span>
                </div>
                <p class="text-gray-400">
                    {desc}
                </p>
            </div>
        </>
    );
}

export default stepCard;