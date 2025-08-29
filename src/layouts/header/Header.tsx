import React from "react";

const Header: React.FC = () => {
    return (
        <header className="bg-gray-100 shadow-lg ">
            <div className="mx-auto flex items-center justify-between py-4 px-6">
                <div className="flex items-center gap-5">
                <div className="text-2xl font-bold text-gray-800">
                    ReactJs Com
                </div>
                <nav className="space-x-6">
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition">منوی 1</a>

                    <a href="#" className="text-gray-600 hover:text-blue-600 transition">منوی 2</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition">منوی 3</a>
                </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;