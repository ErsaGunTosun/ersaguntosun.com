import React, { useEffect } from 'react'

// utils
import ChangeTitle from '../utils/DynamicTitle.js';

// components
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function NotFound() {
    useEffect(() => {
        ChangeTitle('404 NOT FOUND - ErsaGun Tosun');
    }, [])
    return (
        <div className='flex'>
            <div className='grow my-11 mx-auto max-w-mdx pt-0 px-4 pb-5.5'>
                <Header islogo={true} ispage={''} />
                <div className='mt-10'>
                    <h1 className='text-5xl font-bold mb-6'>NOT FOUND</h1>
                    <p className='text-lg tracking-tighter'>You just hit a route that doesn't exist... the sadness.</p>
                </div>
                <hr className='my-8 opacity-20' />
                <Footer />
            </div>
        </div>
    )
}

export default NotFound