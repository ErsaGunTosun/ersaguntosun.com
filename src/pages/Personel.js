import React from 'react'

// components
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import SevenWonders from '../components/SevenWonders.js'
import World from '../components/World.js';

function Personel() {
    return (
        <div className='flex'>
            <div className='grow my-11 mx-auto max-w-mdx pt-0 px-4 pb-5.5'>
                <Header islogo={true} ispage={'personel'} />
                <div className='mt-10'>
                    <h1 className='text-4xl font-bold mb-6'>personel</h1>
                    <p className='text-lgx leading-8 font-light mt-6 tracking-tight'>
                        "It doesn’t interest me what you do for a living. I want to know what you ache for – and if you dare to dream of meeting your heart’s longing.
                        It doesn’t interest me how old you are.
                        I want to know if you will risk looking like a fool – for love – for your dream – for the adventure of being alive."
                        – <span className='italic text-lg text-gray-400'>Oriah Mountain Dreamer</span>
                    </p>
                    <div className='mt-10 text-lg font-normal tracking-tighter'>
                        <p className='font-bold'> Personality type: ENFP-T</p>
                        <p className='my-3'><strong>Collections:</strong> postcard, flag patch and paper money</p>
                        <p className='my-3'><strong>Music:</strong> fleetwood mac, dire straits, jungle, paradis, sohn... // me on <i className="fa-brands fa-spotify text-2xl"></i></p>
                        <p className='my-3'> <strong>Books:</strong> “life holds one great but quite commonplace mystery.
                            though shared by each of us and known to all, seldom rates a second thought.
                            that mystery, which most of us take for granted and never think twice about, is time.</p>
                        <p className='my-3'>
                            calendars and clocks exist to measure time,
                            but that signifies little because we all know that an hour can seem as eternity or pass in a flash,
                            according to how we spend it.
                        </p>
                        <p className='my-3'>time is life itself, and life resides in the human heart.” - momo // me on <i className="fa-brands fa-goodreads text-2xl"></i></p>
                        <p className='my-3'><strong>Movies:</strong> the ones that made me feel somehow different than others</p>
                        <p className='my-3'><strong>Games:</strong> I especially love story-driven games a lot! here are some that I enjoyed playing so far</p>
                    </div>

                    <SevenWonders  actives={['colosseum','machu','redeemer']} />

                    <World />
                </div>
                <hr className='my-8 opacity-20' />
                <Footer />
            </div>
        </div>
    )
}

export default Personel