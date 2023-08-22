import React, {useEffect} from 'react'

// utils
import ChangeTitle from '../utils/DynamicTitle.js';

// components
import Header from '../components/Header.js'
import Footer from '../components/Footer'

function TechStack() {
    useEffect(() => {
        ChangeTitle('Tech Stack - ErsaGun Tosun');
    }, [])
    return (
        <div className='flex'>
            <div className='grow my-11 mx-auto max-w-mdx pt-0 px-4 pb-5.5'>
                <Header islogo={true} ispage={'tech-stack'} />
                <div className='mt-10'>
                    <h1 className='text-4xl font-bold mb-6'>tech stack</h1>
                    
                    <ul className='list-square text-basex md:text-lgtracking-tighter ms-5'>
                        <li className='m-0 p-0'>
                            I'm currently focused on
                            <span className='border-b-3 border-yellow-300 rounded-b-sm bg-tech-item  mx-1 font-bold'> JavaScript </span>,
                            <span className='border-b-3 border-blue-600 rounded-b-sm bg-tech-item mx-1 font-bold'> TypeScript </span> with
                            <span className='border-b-3 border-cyan-500 rounded-b-sm bg-tech-item  mx-1 font-bold'> React </span> and
                            <span className='border-b-3 border-cyan-400 rounded-b-sm bg-tech-item  mx-1 font-bold'> React Native </span>on the frontend,
                            <span className='border-b-3 border-green-700 rounded-b-sm bg-tech-item  mx-1 font-bold'> Node.js </span> on the backend with
                            REST /<span className='border-b-4 border-green-500 rounded-b-sm bg-tech-item  mx-1 font-bold'> MongoDB </span>
                        </li>

                        <li className='my-4 p-0'>I learning on
                            <span className='border-b-4 border-blue-400 rounded-b-sm bg-tech-item mx-1 font-bold'> Docker </span>
                            for containerization and <span className='border-b-4 border-orange-500 rounded-b-sm bg-tech-item mx-1 font-bold'> AWS </span> services to build full stack applications.</li>
                        <li>
                            Currently learning:
                            <span className='font-bold'> Golang</span>,
                            <span className='font-bold'> GraphQL </span>
                        </li>
                    </ul>
                </div>
                <hr className='my-8 opacity-20' />
                <Footer />
            </div>
        </div>
    )
}

export default TechStack