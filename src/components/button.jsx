let Button = ({ onClick, value, className }) => {
    let props = {
        onClick: onClick,
        className: className,
        value: value
    };

    return (
        <>
            <button
                className={
                    `
                    text-white font-semibold  
                    py-2 
                    px-4 
                    border 
                    border-[#FC6A02] 
                    rounded 
                    ${props.className}`
                }
                onClick={props.onClick}
            >
                {props.value}
            </button>
        </>
    );
};

export default Button;