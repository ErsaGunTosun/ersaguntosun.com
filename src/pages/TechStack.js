import React from 'react'

import Header from '../components/Header.js'
import Footer from '../components/Footer'

function TechStack() {
    return (
        // <div className='col-9 d-flex flex-column'>
        //     <Header />
        //     <div className='container flex-fill w-100 h-100'>
        //         <div className='mt-4 px-5 p-0'>
        //             <h1 className='text-start fw-bold'>tech stack</h1>
        //             <lu>
        //                 <li className='fs-5 lh-lg my-3 p-0'>I'm currently focused on <span className='tech-item'>JavaScript</span>, <span className='tech-item'>TypeScript</span> with <span className='tech-item'>React</span> and <span className='tech-item'>React Native</span>on the frontend, <span className='tech-item'>Node.js</span> on the backend with <span className='tech-item'>REST / GraphQl</span></li>
        //                 <li className='fs-5 my-3 p-0'>I have some knowledge on <span className='tech-item'>Docker</span> for containerization and <span className='tech-item'>AWS</span> services to build full stack applications.</li>
        //                 <li className='fs-5 my-3 p-0'>I'm familiar with Agile Methodologies using Scrum and Kanban</li>
        //                 <li className='fs-5 my-3 p-0'>I might also have a bit sense of UI/UX Design</li>
        //             </lu>

        //             <p className='fs-5 my-5 p-0'>Currently learning: Business for Developer</p>

        //         </div>
        //         <Footer />
        //     </div>
        // </div>
        <div className='my-11 mx-auto max-w-mdx pt-0 px-4 pb-5.5'>
            <Header islogo={true} ispage={'tech-stack'} />

        </div>
    )
}

export default TechStack