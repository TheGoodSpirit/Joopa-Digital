import Button from '../button.jsx';
import '../../index.css';

const  Header = () => {
    return <>
        <header className=" z-10 bg-white w-full fixed bg-opacity-20 backdrop-filter backdrop-blur-2xl flex justify-between items-center p-4 shadow-sm">
            <img src="" alt="Company Logo" className="logo" />
            <nav>
                <ul className="gap-5 flex justify-evenly items-center">
                    <li><a className="hover:text-[#FC6A02] active" href="/">Home</a></li>
                    <li><a className="hover:text-[#FC6A02]" href="/about">About</a></li>
                    <li><a className="hover:text-[#FC6A02]" href="/services">Services</a></li>
                    <li><a className="hover:text-[#FC6A02]" href="/contact">Contact</a></li>
                </ul>
            </nav>
            <Button value="Get in Touch" className={"text-white bg-[#FC6A02] hover:bg-transparent  hover:text-[#FC6A02]"}/>
        </header>
    </>
}

export default Header;