import React from 'react'

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Nlogo from '../images/n.jpeg'

function Journey() {
    return (
        // <div className='col-9 d-flex flex-column'>
        //     <Header islogo={true}  ispage={'journey'}/>
        //     <div className='container flex-fill w-100 h-100'>
        //         <div className='mt-4 px-5 p-0'>
        //             <h1 className='fw-bold'>the journey</h1>
        //             <div className='mt-4'>
        //                 <h5 className='fw-bold'>Present</h5>
        //                 <p className='m-0 my-3 p-0 fs-5'>Senior Frontend Engineer at <span className='fw-bold'>RoomPriceGenie</span> 🧞 (Aug 2023 – )</p>
        //                 <p className='m-0 my-3 p-0 fs-5'>Running a design and software studio called <span className='fw-bold'>Noe Crafts</span> since June of 2020.</p>
        //                 <p className='m-0 my-3 p-0 fs-5'>Joined as Co-Founder at <span className='fw-bold'>Assistive Cards</span>. Helping the growth of the.</p>
        //                 <p className='m-0 my-3 p-0 fs-5'>Investing in stocks and startups.</p>
        //             </div>

        //             <div className='mt-4'>
        //                 <h5 className='fw-bold'>Past</h5>
        //                 <p className='m-0 my-2 p-0 fs-5'>🥦 Senior Frontend Engineer at Cara Care. (Nov 2021 – Apr 2023)</p>
        //                 <p className='m-0 my-2 p-0 fs-5'>🛵 Frontend Engineer at Getir. (Dec 2019 – Jun 2020)</p>
        //                 <p className='m-0 my-2 p-0 fs-5'>🕹 Software Engineer at Sony.</p>
        //                 <p className='m-0 my-2 p-0 fs-5'>Senior Software Engineer (Oct 2019 – Nov 2019), Software Engineer (Nov 2017 – Oct 2019)</p>
        //                 <p className='m-0 my-2 p-0 fs-5'>🚞 Took a gap year after graduation before starting my professional career.</p>
        //                 <p className='m-0 my-2 p-0 fs-5'>🎓 Graduated from Istanbul University with a degree in Computer Engineering. (2016)</p>
        //                 <p className='m-0 my-2 p-0 fs-5'>🇪🇪 Exchange Student at Tallinn University in Estonia. (2015)</p>
        //                 <p className='m-0 my-2 p-0 fs-5'>🐴 Graduated from Nişantaşı Anadolu Lisesi with high school diploma. (2012)</p>
        //                 <p className='m-0 my-2 p-0 fs-5'>🐣 My interest in software development has started in my early ages while trying to design a website from free providers and I've built many, many others later on.</p>
        //             </div>
        //         </div>

        //         <Footer />

        //     </div>
        // </div>
        <div className='flex'>
            <div className='grow my-11 mx-auto max-w-mdx pt-0 px-4 pb-5.5'>
                <Header islogo={true} ispage={'journey'} />
                <div className='mt-10'>
                    <h1 className='text-4xl font-bold mb-6'>the journey</h1>
                    <div className='text-lg text-justify'>
                        <h5 className='font-bold'>Present</h5>
                        <div className='flex items-center'>
                            <div className='text-justify m-0 p-0'>
                                <p className='m-0 mt-3 mb-4 p-0'>Senior Frontend Engineer at <span className='font-bold'>RoomPriceGenie</span> 🧞 (Aug 2023 – )</p>
                                <p className='m-0 my-4 p-0'>Running a design and software studio called <span className='font-bold'>Noe Crafts</span> since June of 2020.</p>
                                <p className='m-0 my-4 p-0'>Joined as Co-Founder at <span className='font-bold'>Assistive Cards</span>. Helping the growth of the.</p>
                                <p className='m-0 my-4 p-0'>Investing in stocks and startups.</p>

                            </div>
                            <img src={Nlogo} className='w-18 h-fit ml-4 mb-12 rounded-md' />

                        </div>


                    </div>
                    <div className='mt-4 text-lg'>
                        <h5 className='font-bold text-lg'>Past</h5>
                        <p className='m-0 mt-3 mb-4 p-0'>🥦 Senior Frontend Engineer at <strong>Cara Care</strong> . (Nov 2021 – Apr 2023)</p>
                        <p className='m-0 my-4 p-0'>🛵 Frontend Engineer at<strong>Getir</strong> . (Dec 2019 – Jun 2020)</p>
                        <p className='m-0 my-4 p-0'>🕹 Software Engineer at <strong>Sony</strong>.</p>
                        <p className='m-0 my-4 p-0'>Senior Software Engineer (Oct 2019 – Nov 2019), Software Engineer (Nov 2017 – Oct 2019)</p>
                        <p className='m-0 my-4 p-0'>🚞 Took a gap year after graduation before starting my professional career.</p>
                        <p className='m-0 my-4 p-0'>🎓 Graduated from <strong>Istanbul University</strong> with a degree in Computer Engineering. (2016)</p>
                        <p className='m-0 my-4 p-0'>🇪🇪 Exchange Student at <strong>Tallinn University</strong>  in Estonia. (2015)</p>
                        <p className='m-0 my-4 p-0'>🐴 Graduated from <strong>Nişantaşı Anadolu Lisesi</strong> with high school diploma. (2012)</p>
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