import { Link } from "react-scroll";
import { faPhone, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const navClick = () => {
        setClick(prev => !prev)
    }

    return (
        <div>
            <header className="w-full md:flex bg-cyan-600 items-center justify-between py-8 md:py-4 px-2 fixed top-0 z-40">

                <div className="text-center">
                    <h1 className=" text-white text-2xl font-serif font-bold">FoodieBruv</h1>
                </div>
                <nav className={`font-medium gap-x-9 text-white ${click ? `block ` : `hidden`}   md:flex text-2xl mr-8 h-full items-center justify-center`} >
                    <NavLink to="home" onClick={setClick}>
                        Home
                    </NavLink>
                    <NavLink to="about">
                        About
                    </NavLink>
                    <NavLink to="specialties">
                        Specialties
                    </NavLink>

                    <Link to="contact" className="hover:text-yellow-400 bg-red-700 rounded-md py-1 text-xl px-4 cursor-pointer"
                        activeClass="active" spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        Contact

                    </Link>
                </nav>

                {click ? <FontAwesomeIcon icon={faXmark} onClick={navClick} className="md:hidden absolute top-7 right-4 text-3xl text-white cursor-pointer" /> : <FontAwesomeIcon onClick={navClick} icon={faBars} className="absolute top-7 right-4 text-3xl text-white cursor-pointer md:hidden" />}

            </header>
        </div>
    );
};

export default Navbar;


// <NavLink to="contact" className="bg-red-500">
// Contact
// </NavLink>


const NavLink = ({ to, children, props }) => {
    return <Link {...props} to={to} className="hover:text-yellow-400 cursor-pointer block mb-2"
        activeClass="active" spy={true}
        smooth={true}
        offset={-100}
        duration={500}>
        {children}
    </Link>
}