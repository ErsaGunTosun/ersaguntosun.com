import React from 'react'

// Components
import Header from '../components/Header.js';

import Footer from '../components/Footer.js';
function Home() {
    return (
        <div className='col-9 d-flex flex-column'>
            <Header islogo={false} />
            <div className=' container flex-fill w-100 h-100'>
                <div className='mt-4 px-5 p-0'>
                    <div id='top' className=''>
                        <div className='row d-flex mt-0'>
                            <div className='col-7 d-flex jusitfty-content-center align-items-center'>
                                <div className='row'>
                                    <h1 className='m-0 mb-4 p-0 w-100  fw-bold'>Hi, I'm Ebru.</h1>
                                    <p className='m-0 p-0 fs-5 fst-italic' >Sr.Frontend Engineer at <a className='fw-bold text-dark text-decoration-none' style={{ cursor: 'pointer' }}>RoomPriceGenie 🧞</a>
                                    </p>
                                    <p className='m-0 p-0 fs-5 fst-italic'>
                                        Founder at <a className='fw-bold text-dark text-decoration-none' style={{ cursor: 'pointer' }}> Noe Crafts 🍃</a>
                                    </p>
                                    <p className='m-0 mb-4 p-0 fs-5 fst-italic'>
                                        Co-Founder at <a className='fw-bold text-dark text-decoration-none' style={{ cursor: 'pointer' }}>Assistive Cards 🐥</a>
                                    </p>
                                    <p className='my-1 p-0 fs-6 lh-lg pe-5'>
                                        I have always been so curious about the whole software development cycle,
                                        from just an idea to the journey of bringing it to life.
                                        Therefore I enjoy spending my time improving myself in full stack development while mostly focusing on the frontend.
                                    </p>
                                    <div className='col-12 fs-4 text-start m-0 my-4 p-0'>
                                        <i className="fa-brands fa-linkedin-in me-2"></i>
                                        <i className="fa-brands fa-github me-2"></i>
                                        <i className="fa-brands fa-medium me-2"></i>
                                        <i className="fa-brands fa-twitter"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='col justify-content-center d-flex align-items-center'>
                                <img src={require("../images/profil.png")} className='img-fluid bg-transparent border-0 h-75'></img>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="border border-secondary border-1 mt-4" style={{ opacity: '10%' }} />

                <div id='journal' className='m-0 p-0 d-flex justify-content-center'>
                    <div className='row d-flex justify-content-center m-0 p-0 ps-4'>

                        <div className='col-12 mt-3'>
                            <h3 className='m-0 p-0 fw-bold'>facing this meaninglessness courageously</h3>
                            <h7 className='mt-2 fst-italic'>2022-09-21, by ebru</h7>
                            <p className='fw-medium'>Today I finished reading Optimistic Nihilism: A Psychologist's Personal Story,
                                and as always I am in love with a quote. The book itself was…</p>
                        </div>

                        <div className='col-12 mt-3'>
                            <h3 className='m-0 p-0 fw-bold'>optimistic nihilism</h3>
                            <h6 className='mt-2 fst-italic'>2022-09-21, by ebru</h6>
                            <p className='fw-medium'>I asked DALL·E to draw me an image for this post saying optimist nihilist enjoying life in mountains,
                                digital art and did an amazing job as…</p>
                        </div>

                        <div className='col-12 mt-3'>
                            <h3 className='m-0 p-0 fw-bold'>the games</h3>
                            <h6 className='mt-2 fst-italic'>2022-09-21, by ebru</h6>
                            <p className='fw-medium'>This week I have been on sick leave and not productive at all since I somehow managed to catch a cold after a lake trip,
                                but there is no…</p>
                        </div>

                        <div className='col-12 mt-3'>
                            <h3 className='m-0 p-0 fw-bold'>dreamers and realists</h3>
                            <h6 className='mt-2 fst-italic'>2022-09-21, by ebru</h6>
                            <p className='fw-medium'>"There are dreamers and there are realists in this world.
                                You'd think the dreamers would find the dreamers and the realists would find the…</p>
                        </div>

                        <div className='col-12 mt-3'>
                            <h3 className='m-0 p-0 fw-bold'>the movies</h3>
                            <h6 className='mt-2 fst-italic'>2022-09-21, by ebru</h6>
                            <p className='fw-medium'>How the quarantine is going?
                                I have recently been watching a lot of movies. I started a list at the beginning of this year, I was going to…</p>
                        </div>

                        <div className='col-12 mt-3'>
                            <p className='m-0 p-0 mb-2 fs-5'>
                                <span className='fw-bold'>1 /</span>
                                <span className='fw-lighter'> 2 /</span>
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        </div>
    )
}

export default Home