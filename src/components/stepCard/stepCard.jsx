import React from "react";

const StepCard = ({ name, desc, step }) => {
    return (
        <div className="align-left bg-gray-200 p-6 rounded-lg">
            <div className="flex gap-3 text-2xl font-bold mb-4 justify-left items-center space-x-2">
                <span className="py-2 px-4 rounded-lg bg-gray-100 text-[#FC6A02]">{step}</span>
                <span>{name}</span>
            </div>
            <p className="text-left text-gray-400">
                {desc}
            </p>
        </div>
    );
};

export default StepCard;