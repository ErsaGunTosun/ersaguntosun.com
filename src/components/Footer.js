import React from 'react'

function Footer() {
    return (
        <div className='footer mt-4 mb-5'>
            <hr class="border border-secondary border-1 my-4 d-flex justify-content-center" style={{opacity:'10%'}} />
            <div className='row d-flex justify-content-center  m-0 p-0 px-5'>
                <div className='col mb-5'>
                    <p className='m-0 p-0 fs-6'>Currently in</p>
                    <p className='m-0 p-0'>🇩🇪 Berlin, Germany</p>
                </div>
                <div className='col text-end mb-5'>
                    <p className='m-0 p-0'>© 2023 Ebru Kaya</p>
                    <p className='m-0 p-0'>ebru[at]ebrukaya.me 📮</p>
                </div>
            </div>
        </div>
    )
}

export default Footer