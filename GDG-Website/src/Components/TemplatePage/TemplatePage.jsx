import React, { useState } from 'react';
import UserProfileCard from '../UserProfileCard/UserProfileCard.jsx';

const TemplatePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className={`fixed bg-gray-900 text-white h-screen p-4 flex flex-col items-center ${isOpen ? 'w-36' : 'w-16'} transition-all duration-300`}>
                {/* Logo */}
                <button className="text-white mb-4 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Icons */}
                <nav className="flex flex-col gap-6 mt-6">
                    {/* Home Icon */}
                    <a href="#" className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded hover:bg-gray-700 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9m0 0l9 9m-9-9v18" />
                        </svg>
                    </a>

                    {/* Info Icon */}
                    <a href="#" className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded hover:bg-gray-700 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20.5a8.38 8.38 0 108.5-8.5 8.38 8.38 0 00-8.5 8.5z" />
                        </svg>
                    </a>

                    {/* Team Icon */}
                    <a href="#" className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded hover:bg-gray-700 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5m6-10a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </a>

                    {/* Trophy Icon */}
                    <a href="#" className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded hover:bg-gray-700 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-1v-4m-4 0a4 4 0 018 0M3 5h18m-1 0a7 7 0 01-14 0" />
                        </svg>
                    </a>
                </nav>
            </div>

            {/* Main Content */}
            <div className={`flex gap-10 bg-gray-100 p-6 ${isOpen ? 'ml-36' : 'ml-16'} transition-all duration-300 bg-zinc-900 w-full`}>
                {/* <HomePage/> */}
                {/* <AboutPage/> */}
                {/* <TeamPage/> */}
                {/* User Profile Card will be used in Team page */}
                <UserProfileCard/>
            </div>
        </div>
    );
};

export default TemplatePage;
