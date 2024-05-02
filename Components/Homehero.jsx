import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import styles from './style.module.css'; // Import the CSS module

export default function Services() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Simulate a loading delay
        const timeout = setTimeout(() => {
            setShowContent(true);
        }, 100); // Adjust the delay time as needed

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={showContent ? "transition-opacity duration-1000 ease-in opacity-100" : "opacity-0"}>
            <div className="relative">
                <div className="absolute inset-0" style={{ backgroundImage: `url("/images/home.jpg")`, backgroundSize: 'cover' }}></div>
                <div className="relative bg-gradient-to-b from-black flex flex-col h-screen">
                    <div className="text-white ml-12 mt-16 md:mt-32 rounded-lg">
                        <h2 className='text-6xl text-green-500 mb-4 font-mono'>
                            SandBox Software Company, <br /> <span className='text-4xl text-white'>Unlocking Infinite Possibilities</span>
                        </h2>
                        <div className="relative">
                            <input
                                type="text"
                                className={`text-2xl bg-transparent border-none focus:outline-none ${styles.typewriterInput}`}
                                readOnly
                            />
                            <div className={`absolute right-0 mr-4 top-1/2 transform -translate-y-1/2 ${styles.cursor}`}></div>
                        </div>
                        {showContent && (
                            <Typewriter className="text-2xl"
                                options={{
                                    strings: [
                                        'Welcome to SandBox Software Company!',
                                        'We craft solutions for your business needs.',
                                        'Transforming ideas into reality.',
                                        'Innovating the future.'
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    cursor: ' ',
                                    delay: 50,
                                }}
                            />
                        )}
                        <button className={` mt-8 py-1 px-4 border-black rounded-full bg-green-500 text-white font-bold text-lg ${styles['animate-blink']}`}>
                            KARIBU
                        </button>
                    </div>
                    <div className='container mt-4 md:mt-32 bg-black rounded-2xl ml-12 py-4 px-8 w-3/4'>
                        <div className='flex flex-row justify-between items-center'>
                            <h2 className='text-white'>Trusted by</h2>
                            <div className='flex flex-row items-center'>
                                <img src="./images/trustee1.webp" alt="" className='w-10 h-10 mx-2' />
                                <img src="./images/trustee2.webp" alt="" className='w-10 h-10 mx-2'/>
                                <img src="./images/trustee3.webp" alt="" className='w-10 h-10 mx-2'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
