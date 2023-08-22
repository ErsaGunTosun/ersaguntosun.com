import React from 'react'

//utils 
import useMenu from '../utils/useMenu.js'

function Header({ islogo, ispage }) {
    const { isMenuOpen, toggleMenu } = useMenu();

    return (
        <div className='flex flex-row pb-5 justify-center w-100 mb-5 overflow-hidden'>
            <div className='flex-grow-1 m-0 p-0 basis-1/4'>
                <a href='/' className={` m-0 p-0 ms-4 text-lg font-semibold hidden mdx:block`}>{islogo ? "ersaguntosun." : ""}</a>
                <a href='/' className={` m-0 p-0 ms-4 text-lg font-semibold block mdx:hidden `}>ersaguntosun.</a>
            </div>
            <div className='text-end w-auto basis-3/4 hidden mdx:block tracking-tighter'>
                <a href='/journey' className={`mr-2 text-lg ${ispage === 'journey' ? 'underline decoration-black font-semibold' : ''}`}>journey</a>
                <span className='text-lg mr-2'>·</span>
                <a href='/tech-stack' className={`mr-2 text-lg ${ispage === 'tech-stack' ? 'underline decoration-black  font-semibold' : ''}`}>tech stack</a>
                <span className='text-lg mr-2'>·</span>
                <a href='/projects' className={`mr-2 text-lg ${ispage === 'projects' ? 'underline decoration-black  font-semibold' : ''}`}>projects</a>
                <span className='text-lg mr-2'>·</span>
                <a href='/personel' className={`mr-2 text-lg ${ispage === 'personel' ? 'underline decoration-black  font-semibold' : ''}`}>personel</a>
            </div>
            <div className='block mdx:hidden basis-3/4 w-auto text-end'>
                <i className={`${!isMenuOpen ? 'fa-sharp fa-solid fa-bars' : 'fa-solid fa-xmark'}  text-2xl me-4 hover:text-gray-600`} onClick={toggleMenu}></i>
            </div>
            {
                isMenuOpen ? (
                    <div className='absolute flex-1 w-full h-full text-end bg-white' onClick={toggleMenu}>
                        <div className='block mdx:hidden basis-3/4 w-auto text-end px-4' id='card overflow-hidden'>
                            <p onClick={toggleMenu}><i className={`${!isMenuOpen ? 'fa-sharp fa-solid fa-bars' : 'fa-solid fa-xmark'}  text-2xl me-4 hover:text-gray-600`}></i></p>
                            <div className='flex-row text-start'>
                                <p><a href='/' className={`block basis-1 mb-2 font-bold text-3xl ${ispage === 'home' ? 'underline decoration-black font-semibold' : ''}`}>home</a></p>
                                <p><a href='/journey' className={`block basis-1 mb-2 font-bold text-3xl ${ispage === 'journey' ? 'underline decoration-black font-semibold' : ''}`}>journey</a></p>
                                <p><a href='/tech-stack' className={`block basis-1 mb-2 font-bold text-3xl ${ispage === 'tech-stack' ? 'underline decoration-black  font-semibold' : ''}`}>tech stack</a></p>
                                <p><a href='/projects' className={`block basis-1 mb-2 font-bold text-3xl ${ispage === 'projects' ? 'underline decoration-black  font-semibold' : ''}`}>projects</a></p>
                                <p><a href='/personel' className={`block basis-1 mb-2 font-bold text-3xl ${ispage === 'personel' ? 'underline decoration-black  font-semibold' : ''}`}>personel</a></p>
                            </div>
                        </div>
                    </div>
                )
                    : ""
            }

        </div>
    )
}

export default Header