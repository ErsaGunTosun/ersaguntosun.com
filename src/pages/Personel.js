import React, { useEffect } from 'react'

// utils
import ChangeTitle from '../utils/DynamicTitle.js';

// components
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import SevenWonders from '../components/SevenWonders.js'
import World from '../components/World.js';

function Personel() {
    useEffect(() => {
        ChangeTitle('Personel - ErsaGun Tosun');
    }, [])
    return (
        <div className='flex'>
            <div className='grow my-11 mx-auto max-w-mdx pt-0 px-4 pb-5.5'>
                <Header islogo={true} ispage={'personel'} />
                <div className='mt-10'>
                    <h1 className='text-4xl font-bold mb-6'>personel</h1>
                    <div className='mt-10 text-xl font-normal tracking-tighter text-start'>
                        <p className='font-bold'>🦠Community of eukaryotic cells</p>
                        {/* <p className='font-bold'> Personality type: INTJ-T</p> */}
                    </div>

                    {/* 
                    I have never been to any country and I have never been to the 7 wonders of the world 😟
                    <SevenWonders  actives={[]} />
                    <World /> 
                    */}
                </div>
                <hr className='my-8 opacity-20' />
                <Footer />
            </div>
        </div>
    )
}

export default Personel