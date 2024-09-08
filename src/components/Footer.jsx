import { Instagram, Facebook } from 'lucide-react';
import Logo from "../assets/images/image.png"; 

const Footer = () => {
  return (
    
    <div className="flex flex-col justify-center mx-8 lg:mx-32 p-6">
        <hr />
      <div className="flex flex-col lg:flex-row justify-evenly my-6">
        <div className='flex'>
           <img src={Logo} alt="" className='h-28' />
        </div>
        <div className="flex flex-col mb-6 lg:mb-0">
          <h3 className="text-2xl font-bold">Let's keep in touch!</h3>
          <p className="text-base">Find us on any of these platforms, we respond within 1-2 business days.</p>
          <div className="flex flex-row gap-4 mt-4">
            <a href="https://instagram.com"><Instagram /></a>
            <a href="https://facebook.com"><Facebook /></a>
            <a href="https://facebook.com"><Facebook /></a>
            <a href="https://facebook.com"><Facebook /></a>
          </div>
        </div>
        <div className="flex flex-col">
            <p className='text-bold mb-4' >Useful Links</p>
          <ul className="space-y-2">
            <li><a href="#about-us" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="text-center mt-6">
        <p>Copyright © 2024 Notus JS by Creative Tim.</p>
      </div>
    </div>
  );
};

export default Footer;
