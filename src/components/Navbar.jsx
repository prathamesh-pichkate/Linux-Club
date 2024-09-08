import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";
import logo from "../assets/images/LinuxLogo.png";  
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo} alt="linux-logo" className="h-14 lg:h-20 md:h-20 mr-2" />
                    </div>
                    
                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex ml-6 space-x-8">
                        {navItems.map((item) => (
                          <li key={item.label}>
                            <NavLink
                              to={item.href}
                              className={({ isActive }) => 
                                `text-xl ${isActive ? "text-orange-400 pb-1 border-b-2 border-orange-400" : "text-white"}`
                              }
                            >
                              {item.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    {/* Join Our Team Button for Desktop */}
                    <div className="hidden lg:flex justify-center space-x-8 items-center">
                        <a href="#" className="bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md">Join Our Team</a>
                    </div>
                     
                    {/* Mobile Menu Toggle Button */}
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                     
                    {/* Mobile Drawer */}
                    {mobileDrawerOpen && (
                        <div className="fixed top-0 left-0 z-20 bg-neutral-900 w-full h-screen p-10 flex flex-col lg:hidden overflow-y-auto">
                            <div className="flex justify-end w-full mb-6">
                                <button onClick={toggleNavbar}>
                                    <X className="text-white h-8 w-8" />
                                </button>
                            </div>
                            <ul className="w-full">
                                {navItems.map((item) => (
                                    <li key={item.label} className="py-4 text-center">
                                        <NavLink
                                            to={item.href}
                                            className={({ isActive }) => 
                                            `block text-xl ${isActive ? "text-orange-400 underline" : "text-white"}`}
                                            onClick={toggleNavbar} // Close the drawer when a link is clicked
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-center space-x-6 mt-6">
                                <a href="#" className="bg-gradient-to-r from-purple-500   to-purple-800 py-2 px-3 rounded-md ">Join Our Team</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
