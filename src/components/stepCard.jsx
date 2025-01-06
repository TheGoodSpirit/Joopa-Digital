import React from "react";

const stepCard = ({ name, desc, step }) => {
    return (
        <>
            <div class=" align-left bg-gray-200 p-6 rounded-lg">
                <div class="flex gap-3 text-2xl font-bold mb-4 flex justify-left items-center space-x-2">
                    <span class="py-2 px-4 rounded-lg bg-gray-100 text-[#FC6A02]">{step}</span>
                    <span>{name}</span>
                </div>
                <p class="text-left text-gray-400">
                    {desc}
                </p>
            </div>
        </>
    );
}

export default stepCard;