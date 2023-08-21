import React, {useEffect} from 'react'

// utils
import ChangeTitle from '../utils/DynamicTitle.js';

// components
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function Projects() {
    useEffect(() => {
        ChangeTitle('Side Projects - ErsaGun Tosun');
    }, [])
    return (
        <div className='flex'>
            <div className='grow my-11 mx-auto max-w-mdx pt-0 px-4 pb-5.5'>
                <Header islogo={true} ispage={'projects'} />
                <div className='mt-10'>
                    <h1 className='text-4xl font-bold mb-6'>side projects</h1>
                    <div className='text-lg text-justify'>
                        <h5 className='font-bold'>Present</h5>
                        <div className='flex items-center'>
                            <div className='text-justify m-0 p-0'>
                                <p className='m-0 mt-3 mb-4 p-0'>👾 Building <strong><a className='hover:text-gray-600' target='_blank' href='https://github.com/ErsaGunTosun/Vampire'>Vampire</a></strong>, a bot running on the discord server that makes a lot of processing easier is still in development. <span className='italic text-smx text-gray-400'>(2023)</span> </p>
                                <p className='m-0 mt-3 mb-4 p-0'>❔ Building <strong><a className='hover:text-gray-600' target='_blank' href='https://github.com/ErsaGunTosun/live_support'>Live Support</a></strong>, a tool used to provide live support on e-commerce sites. <span className='italic text-smx text-gray-400'>(2023)</span> </p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4 text-lg'>
                        <h5 className='font-bold text-lg'>Past</h5>
                        <div className='flex items-center'>
                            <div className='text-justify m-0 p-0'>
                                <p className='m-0 mt-3 mb-4 p-0'>📚 Built <strong><a className='hover:text-gray-600' target='_blank' href='https://github.com/ErsaGunTosun/jar_of_words'>Jar Of Words</a></strong>, I turned a system for learning vocabulary into a digital tool. You can easily add and share words. <span className='italic text-smx text-gray-400'>(2023)</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='my-8 opacity-20' />
                <Footer />
            </div>
        </div>
    )
}

export default Projects