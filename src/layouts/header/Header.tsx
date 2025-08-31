import React from "react";
import Logo from '../../assets/images/logo1.svg';
import {TbCodeCircle, TbInfoCircle, TbPhoneCall, TbTable, TbUser} from "react-icons/tb";
import {GoSignIn, GoSingleSelect} from "react-icons/go";
import { BsInputCursor, BsTable } from "react-icons/bs";
import { LuComponent } from "react-icons/lu";
import { CgSelect } from "react-icons/cg";

const Header: React.FC = () => {
    return (
        <header className="bg-gray-100 shadow-lg h-[60px] flex items-center px-6 gap-2">
            <img src={Logo} className='w-5' alt=""/>
            <div className="text-2xl font-bold text-gray-800 flex">
                پیچک
            </div>
            <nav className="space-x-6 ms-10 flex">
                {/* کامپوننت های پایه */}
                 <div className="relative group">
                    <button className="text-gray-600 hover:text-blue-600 transition flex items-center focus:outline-none">
                        <LuComponent size={20} className='mx-1'/>
                        <span className='self-end'>کامپوننت های پایه</span>
                    </button>
                    <div className="absolute right-0 w-48 p-1 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity z-10">
                        <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                            <BsInputCursor size={18} className="me-2"/>
                            جعبه متن (Input)
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                            <GoSingleSelect size={18} className="me-2"/>
                            لیست باز شو (Select)
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                            <TbPhoneCall size={18} className="me-2"/>
                            تماس
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                            <GoSignIn size={18} className="me-2"/>
                            ورود
                        </a>
                    </div>
                </div>
                {/* کامپوننت های پیشرفته */}
                <div className="relative group">
                    <button className="text-gray-600 hover:text-blue-600 transition flex items-center focus:outline-none">
                        <TbCodeCircle size={20} className='mx-1'/>
                        <span className='self-end'>کامپوننت های پیشرفته</span>
                    </button>
                    <div className="absolute right-0 w-48 p-1 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity z-10">
                        <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                            <BsTable size={18} className="me-2"/>
                            جدول
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                            <TbInfoCircle size={18} className="me-2"/>
                            اطلاعات
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                            <TbPhoneCall size={18} className="me-2"/>
                            تماس
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                            <GoSignIn size={18} className="me-2"/>
                            ورود
                        </a>
                    </div>
                </div>
                {/* درباره ما */}
                <a href="#" className="text-gray-600 hover:text-blue-600 transition flex items-center">
                    <TbInfoCircle size={20} className='mx-1'/>
                    <span className='self-end'>درباره ما</span>
                </a>
                {/* ارتباط با ما */}
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