import React from 'react'

function Footer() {
    return (
        <div className='footer my-4 bg-warning'>
            <hr class="border border-dark border-2 opacity-100 mt-4 d-flex justify-content-center" />
            <div className='row d-flex justify-content-center m-0 p-0'>
                <div className='col'>
                    <p>Currently in</p>
                    <p>🇩🇪 Berlin, Germany</p>
                </div>
                <div className='col text-end'>
                    <p>© 2023 Ebru Kaya</p>
                    <p>ebru[at]ebrukaya.me 📮</p>
                </div>
            </div>
        </div>
    )
}

export default Footer