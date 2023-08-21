import React from 'react'

// components
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

// assets
import Nlogo from '../assets/images/n.jpeg'

function Journey() {
    return (
        <div className='flex'>
            <div className='grow my-11 mx-auto max-w-mdx pt-0 px-4 pb-5.5'>
                <Header islogo={true} ispage={'journey'} />
                <div className='mt-10'>
                    <h1 className='text-4xl font-bold mb-6'>the journey</h1>
                    <div className='text-lg text-justify'>
                        <h5 className='font-bold'>Present</h5>
                        <div className='flex items-center'>
                            <div className='text-justify m-0 p-0'>
                                <p className='m-0 mt-3 mb-4 p-0'> 💻 <span className='font-bold'>Full Stack Developer</span> as Freelancer <span className='italic text-smx text-gray-400'>(Jun - 2023 – )</span></p>
                                <p className='m-0 mt-3 mb-4 p-0'> 🏫 Student at <span className='font-bold'>Selcuk University</span> <span className='italic text-smx text-gray-400'>(Sep 2022 – )</span></p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4 text-lg'>
                        <h5 className='font-bold text-lg'>Past</h5>
                        <p>🏅 I successfully completed the pool training of <strong>42 Ecole</strong>. <span className='italic text-smx text-gray-400'>(Jul 2023 – Aug 2023)</span></p>
                        <p className='m-0 my-4 p-0'>🐣 My interest in software development started at a young age when I was trying to design a website from free providers, then I built many websites and experimented with new technologies. </p>
                    </div>

                </div>
                <hr className='my-8 opacity-20' />
                <Footer />
            </div>
        </div>
    )
}

export default Journey