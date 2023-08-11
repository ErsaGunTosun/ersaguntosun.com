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
                                <p className='m-0 mt-3 mb-4 p-0'>Senior Frontend Engineer at <span className='font-bold'>RoomPriceGenie</span> 🧞 <span className='italic text-smx text-gray-400'>(Aug 2023 – )</span></p>
                                <p className='m-0 my-4 p-0'>Running a design and software studio called <span className='font-bold'>Noe Crafts</span> since June of 2020.</p>
                                <p className='m-0 my-4 p-0'>Joined as Co-Founder at <span className='font-bold'>Assistive Cards</span>. Helping the growth of the mission for kids' special education. <span className='italic text-smx text-gray-400'>(Oct 2022 – )</span></p>
                                <p className='m-0 my-4 p-0'>Investing in stocks and startups.</p>

                            </div>
                            <img src={Nlogo} className='w-18 h-fit ml-4 mb-12 rounded-md' />

                        </div>


                    </div>
                    <div className='mt-4 text-lg'>
                        <h5 className='font-bold text-lg'>Past</h5>
                        <p className='m-0 mt-3 mb-4 p-0'>🥦 Senior Frontend Engineer at <strong>Cara Care</strong> . <span className='italic text-smx text-gray-400'>(Nov 2021 – Apr 2023)</span></p>
                        <p className='m-0 my-4 p-0'>🛵 Frontend Engineer at<strong>Getir</strong> . <span className='italic text-smx text-gray-400'>(Dec 2019 – Jun 2020)</span></p>
                        <p className='m-0 my-4 p-0'>🕹 Software Engineer at <strong>Sony</strong>.</p>
                        <p className='m-0 my-4 p-0'>Senior Software Engineer <span className='italic text-smx text-gray-400'>(Oct 2019 – Nov 2019)</span>, Software Engineer <span className='italic text-smx text-gray-400'>(Nov 2017 – Oct 2019)</span></p>
                        <p className='m-0 my-4 p-0'>🚞 Took a gap year after graduation before starting my professional career.</p>
                        <p className='m-0 my-4 p-0'>🎓 Graduated from <strong>Istanbul University</strong> with a degree in Computer Engineering. <span className='italic text-smx text-gray-400'>(2016)</span></p>
                        <p className='m-0 my-4 p-0'>🇪🇪 Exchange Student at <strong>Tallinn University</strong>  in Estonia. <span className='italic text-smx text-gray-400'>(2015)</span></p>
                        <p className='m-0 my-4 p-0'>🐴 Graduated from <strong>Nişantaşı Anadolu Lisesi</strong> with high school diploma. <span className='italic text-smx text-gray-400'>(2012)</span></p>
                        <p className='m-0 my-4 p-0'>🐣 My interest in software development has started in my early ages while trying to design a website from free providers and I've built many, many others later on.</p>
                    </div>
                </div>
                <hr className='my-8 opacity-20' />
                <Footer />
            </div>
        </div>
    )
}

export default Journey