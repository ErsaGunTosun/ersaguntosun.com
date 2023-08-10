import React from 'react'

function Footer() {
    return (
        <div className='grid grid-cols-2 text-xs sm:text-sm mb-11'>
            <div className='justify-self-start text-start'>
                <p className='m-0 p-0 mb-2'>Currently in</p>
                <p className='m-0 p-0'>🇩🇪 Berlin, Germany</p>
            </div>
            <div className='justify-self-end text-end'>
                <p className='m-0 p-0 mb-2'>© 2023 Ebru Kaya</p>
                <a href='mailto:fatihetosun@gmail' className='m-0 p-0 '>ebru[at]ebrukaya.me 📮</a>
            </div>
        </div>
    )
}

export default Footer