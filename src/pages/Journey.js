import React from 'react'

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function Journey() {
    return (
        <div className='col-9 d-flex flex-column'>
            <Header />
            <div className='container flex-fill w-100 h-100'>
                <div className='mt-4 px-5 p-0'>
                    <h1>the journey</h1>
                    <div className='mt-4'>
                        <h5>Present</h5>
                        <p className='m-0 my-1 p-0 fs-5'>Senior Frontend Engineer at RoomPriceGenie 🧞 (Aug 2023 – )</p>
                        <p className='m-0 my-1 p-0 fs-5'>Running a design and software studio called Noe Crafts since June of 2020.</p>
                        <p className='m-0 my-1 p-0 fs-5'>Joined as Co-Founder at Assistive Cards. Helping the growth of the.</p>
                        <p className='m-0 my-1 p-0 fs-5'>Investing in stocks and startups.</p>
                    </div>

                    <div className='mt-4'>
                        <h5>Past</h5>
                        <p className='m-0 my-2 p-0 fs-5'>🥦 Senior Frontend Engineer at Cara Care. (Nov 2021 – Apr 2023)</p>
                        <p className='m-0 my-2 p-0 fs-5'>🛵 Frontend Engineer at Getir. (Dec 2019 – Jun 2020)</p>
                        <p className='m-0 my-2 p-0 fs-5'>🕹 Software Engineer at Sony.</p>
                        <p className='m-0 my-2 p-0 fs-5'>Senior Software Engineer (Oct 2019 – Nov 2019), Software Engineer (Nov 2017 – Oct 2019)</p>
                        <p className='m-0 my-2 p-0 fs-5'>🚞 Took a gap year after graduation before starting my professional career.</p>
                        <p className='m-0 my-2 p-0 fs-5'>🎓 Graduated from Istanbul University with a degree in Computer Engineering. (2016)</p>
                        <p className='m-0 my-2 p-0 fs-5'>🇪🇪 Exchange Student at Tallinn University in Estonia. (2015)</p>
                        <p className='m-0 my-2 p-0 fs-5'>🐴 Graduated from Nişantaşı Anadolu Lisesi with high school diploma. (2012)</p>
                        <p className='m-0 my-2 p-0 fs-5'>🐣 My interest in software development has started in my early ages while trying to design a website from free providers and I've built many, many others later on.</p>
                    </div>
                </div>

                <Footer />

            </div>
        </div>
    )
}

export default Journey