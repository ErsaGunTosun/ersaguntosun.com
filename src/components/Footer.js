import React from 'react'

function Footer() {
    return (
        <div className='grid grid-cols-2 text-xs sm:text-sm mb-10'>
            <div className='justify-self-start text-start'>
                <p className='m-0 p-0 mb-2'>Currently in</p>
                <p className='m-0 p-0'>🇹🇷 Turkey</p>
            </div>
            <div className='justify-self-end text-end'>
                <p className='m-0 p-0 mb-2'>© 2023 Ersagun Tosun</p>
                <a href='mailto:ersagun@ersaguntosun.com' className='m-0 p-0 '>ersagun[at]ersaguntosun.com 📮</a>
            </div>
        </div>
    )
}

export default Footer