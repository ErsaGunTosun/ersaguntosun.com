import React from 'react'

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function Projects() {
    return (
        <div className='col-9 d-flex flex-column'>
            <Header />
            <div className='container flex-fill w-100 h-100'>
                <div className='mt-4 px-5 p-0'>
                    <h1 className='text-start'>side projects</h1>
                    <div className='mt-4'>
                        <h5>Present</h5>
                        <p className='m-0 my-2 p-0 fs-5'>🥜 Co-Building Run Wild Peanut, a community and apparel store for outdoor and nature enthusiasts. #Stay cozy and adventure on. (2023)</p>
                        <p className='m-0 my-2 p-0 fs-5'> 💟Building Date Ideas, a web app powered by AI for generating customized date ideas for any occasion. (2023)</p>
                        <p className='m-0 my-2 p-0 fs-5'>💹 Co-Building Temettü 2.0, a new version is on the way that will make the following dividends experience better. (2023)</p>
                        <p className='m-0 my-2 p-0 fs-5'>🪙 Building Infie, a mobile app for tracking all kinds of investments in one place. (2023)</p>
                    </div>

                    <div className='mt-4'>
                        <h5>Past</h5>
                        <p className='m-0 my-2 p-0 fs-5'>🏗️ Co-Built Mockup Generator, an online tool that helps you to create free mockups in seconds and saves a lot of time for bulk mockup generations. (2023)</p>
                        <p className='m-0 my-2 p-0 fs-5'>🖼️ Co-Built MakePrintable.AI, a web app powered by AI for creating high-resolution printable assets. (2023)</p>
                        <p className='m-0 my-2 p-0 fs-5'>🦊 Built Go Gift'em, a web app to explore curated gift ideas for many interests. (2022)</p>
                        <p className='m-0 my-2 p-0 fs-5'>🐦 Co-Built Wingo, a daily planner mobile app for kids. (2022)</p>
                        <p className='m-0 my-2 p-0 fs-5'>💹 Built Temettü, a mobile app that helps you to follow the dividend calendar and track the dividend payments of your stock investments. (2020)</p>
                        <p className='m-0 my-2 p-0 fs-5'>🤿 Built Bucketmap, a project to map some bucket list ideas to discover around the world. Here is the story. (2020) (2016)</p>
                        <p className='m-0 my-2 p-0 fs-5'>🧶 Co-Founded MUKAVVA, a design brand that we created together with my two close friends in a very amateur way, an adventure inspired by nature and our travels... (2018)</p>
                        <p className='m-0 my-2 p-0 fs-5'>🚀 Created Hayallerimde Ben, a storytelling project that I started to share my experiences through my bucket list journey between ages 18 and 25. (2013)</p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Projects