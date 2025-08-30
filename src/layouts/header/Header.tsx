import React from "react";
import Logo from '../../assets/images/logo1.svg';
import {TbCodeCircle, TbInfoCircle, TbPhoneCall, TbUser} from "react-icons/tb";
import {GoSignIn} from "react-icons/go";

const Header: React.FC = () => {
    return (
        <header className="bg-gray-100 shadow-lg h-[60px] flex items-center px-6 gap-2">
            <img src={Logo} className='w-5' alt=""/>
            <div className="text-2xl font-bold text-gray-800 flex">
                پیچک
            </div>
            <nav className="space-x-6 ms-10 flex">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition flex items-center">
                    <TbCodeCircle size={20} className='mx-1'/>
                    <span className='self-end'>کامپوننت های آماده</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition flex items-center">
                    <TbInfoCircle size={20} className='mx-1'/>
                    <span className='self-end'>درباره ما</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition flex items-center">
                    <TbPhoneCall size={20} className='mx-1'/>
                    <span className='self-end'>ارتباط با ما</span>
                </a>
            </nav>

            <nav className="space-x-2 ms-auto flex">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition flex items-center">
                    <TbUser size={20} className='mx-1'/>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition flex items-center">
                    <GoSignIn color='red' size={20} className='mx-1'/>
                </a>
            </nav>
        </header>
    );
};

export default Header;