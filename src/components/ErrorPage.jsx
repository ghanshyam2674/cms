import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const ErrorPage = () => {
    const Nav = useNavigate()
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 to-purple-300 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <div className="flex justify-center items-center mb-4">
                    <div className="bg-gray-200 p-2 rounded-full">
                        <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <h2 className="text-center text-2xl font-extrabold text-gray-900 mb-4">Error</h2>
                <p className="text-center text-gray-500 mb-4">This Page is no Found.</p>
                <button className="w-full py-2 px-4 bg-green-500 text-white rounded-md mb-4" onClick={() => Nav('/')}>GO BACK</button>
            </div>
        </div>
    );
};

export default ErrorPage;
