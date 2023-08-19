import React from 'react'

// Components
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ArticleCard from '../components/ArticleCard.js';

//assets
import logo from '../assets/images/profil.jpg'


function Home() {
    return (
        <div className='flex'>
            <div className='grow my-11 mx-auto max-w-mdx pt-0 px-4 pb-5.5'>
                <Header islogo={false} ispage={''} />
                <div className='flex mt-2'>
                    <div className='m-0 p-0 text-justify'>
                        <h1 className='text-4xl font-bold mb-6'>Hi, I'm ErsaGun.</h1>
                        {/* <h3 className='text-1.5xl font-semibold my-1 tracking-tight'>Sr. Frontend Engineer at <strong>RoomPriceGenie</strong> 🧞</h3>
                        <h3 className='text-1.5xl font-semibold my-1 tracking-tight'>Founder at <strong>Noe Crafts</strong> 🍃</h3>
                        <h3 className='text-1.5xl font-semibold my-1 tracking-tight'>Co-Founder at <strong>Assistive Cards</strong> 🐥</h3> */}
                        <p className='my-6 text-lg text-justify sm:pr-9 tracking-tighter'>
                            I have always been so curious about the whole software development cycle, from just an idea to the journey of bringing it to life.
                            Therefore spending my time improving myself in full stack development
                        </p>
                        <div className='text-2.5xl text-start m-0 mt-4 p-0 inline'>
                            <a href='www.linkedin.com/in/fatihetosun'><i className="fa-brands fa-linkedin-in me-2"></i></a>
                            <a href='https://github.com/ErsaGunTosun'><i className="fa-brands fa-github me-2"></i></a>
                            <a href='https://dev.to/ersaguntosun'><i className="fa-brands fa-dev me-2"></i></a>
                            <a href='https://twitter.com/ErsaGunTosun'><i className="fa-brands fa-twitter me-2"></i></a>
                        </div>
                    </div>
                    <img src={logo} className='hidden sm:block sm:w-64 h-fit rounded-md' />
                </div>
                <hr className='my-8 opacity-20' />
                <Footer />
            </div>
        </div>
    )
}

export default Home