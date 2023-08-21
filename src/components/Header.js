import React from 'react'

function Header({ islogo, ispage }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const changeMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='flex flex-row pb-5 justify-center w-100 mb-5'>
            <div className='flex-grow-1 m-0 p-0 basis-1/4'>
                <a href='/' className={` m-0 p-0 ms-4 text-lg font-semibold`}>{islogo ? "ersaguntosun." : ""}</a>
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
                <i className={`${!isMenuOpen ? 'fa-sharp fa-solid fa-bars' : 'fa-solid fa-xmark'}  text-2xl me-4 hover:text-gray-600`} onClick={changeMenu}></i>
            </div>
            {
                isMenuOpen ? (
                    <div className='absolute flex-grow-1 w-full h-full text-end bg-white'>
                        <div className='block mdx:hidden basis-3/4 w-auto text-end px-4'>
                            <i className={`${!isMenuOpen ? 'fa-sharp fa-solid fa-bars' : 'fa-solid fa-xmark'}  text-2xl me-4 hover:text-gray-600`} onClick={changeMenu}></i>
                            <div className='flex-row text-start'>
                                <p><a href='/journey' className={`basis-1 mr-2 text-lg ${ispage === 'journey' ? 'underline decoration-black font-semibold' : ''}`}>journey</a></p>
                                <p><a href='/tech-stack' className={`basis-1 mr-2 text-lg ${ispage === 'tech-stack' ? 'underline decoration-black  font-semibold' : ''}`}>tech stack</a></p>
                                <p><a href='/projects' className={`basis-1 mr-2 text-lg ${ispage === 'projects' ? 'underline decoration-black  font-semibold' : ''}`}>projects</a></p>
                                <p><a href='/personel' className={`basis-1 mr-2 text-lg ${ispage === 'personel' ? 'underline decoration-black  font-semibold' : ''}`}>personel</a></p>
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