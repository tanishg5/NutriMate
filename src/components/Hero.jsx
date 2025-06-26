import React from 'react';
import { useNavigate } from 'react-router-dom';
import hero from '../assets/hero.jpg';
import banner from '../assets/banner.jpg'
function Hero() {
    const navigate = useNavigate();
    
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-24 bg-gray-50">
            {/* Text Content */}
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 text-center md:text-left">
                <p className="text-green-600 font-semibold mb-4 tracking-wider">
                    RECOVERY AND INJURY PREVENTION
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                    Supplements for Fitness, Health and Vitality
                </h1>
                <button 
                    onClick={() => navigate('/shop')}
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
                >
                    Shop Now
                </button>
            </div>
            
            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
                <img 
                    src={banner} 
                    alt="Healthy supplements" 
                    className="rounded-lg shadow-xl max-h-[500px] object-cover w-full"
                />
            </div>
        </section>
    );
}

export default Hero;