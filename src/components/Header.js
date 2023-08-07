import React from 'react'

function Header() {
    return (
        <div className='mt-3 bg-dark text-white d-flex mt-4 py-4'>
            <p className='flex-grow-1 m-0 p-0 d-inline ms-4'>ebrukaya.</p>
            <div className='text-end d-inline justift-self-end'>
                <p className='col m-3 p-0 d-inline'>journey</p>
                <p className='col m-3 p-0 d-inline'>tech stack</p>
                <p className='col m-3 p-0 d-inline'>projects</p>
                <p className='col m-3 p-0 d-inline'>personel</p>
            </div>
        </div>
    )
}

export default Header