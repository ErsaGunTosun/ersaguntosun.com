import React from 'react'

import Header from '../components/Header.js'
import Footer from '../components/Footer'

function TechStack() {
    return (
        <div className='col-9 d-flex flex-column'>
            <Header />
            <div className='bg-secondary container flex-fill w-100 h-100'>
                <div className='mt-4 px-5 p-0 bg-danger'>
                    <h1 className='text-start'>Tech Stack</h1>
                    <lu>
                        <li className='fs-5 my-3 p-0'>I'm currently focused on JavaScript, TypeScript with React and React Native on the frontend, Node.js on the backend with REST / GraphQL</li>
                        <li className='fs-5 my-3 p-0'>I have some knowledge on Docker for containerization and AWS services to build full stack applications.</li>
                        <li className='fs-5 my-3 p-0'>I'm familiar with Agile Methodologies using Scrum and Kanban</li>
                        <li className='fs-5 my-3 p-0'>I might also have a bit sense of UI/UX Design</li>
                    </lu>

                    <p className='fs-5 my-5 p-0'>Currently learning: Business for Developer</p>

                </div>
                <Footer />
            </div>
        </div>
    )
}

export default TechStack