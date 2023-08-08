import React from 'react'

// Components
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function Home() {
    return (
        <div className='col-9 d-flex flex-column'>
            <Header />
            <div className='bg-secondary container flex-fill w-100 h-100'>
                <div className='mt-4 px-5 p-0 bg-danger'>
                    <div id='top' className=''>
                        <div className='row d-flex mt-0'>
                            <div className='col-7 d-flex jusitfty-content-center align-items-center'>
                                <div className='row'>
                                    <h1 className='m-0 mb-4 p-0 w-100'>Hi, I'm Ebru</h1>
                                    <p className='m-0 p-0 fs-5 fw-bold' >
                                        Sr. Frontend Engineer at RoomPriceGenie 🧞
                                    </p>
                                    <p className='m-0 p-0 fs-5 fw-bold'>
                                        Founder at Noe Crafts 🍃
                                    </p>
                                    <p className='m-0 mb-4 p-0 fs-5 fw-bold'>
                                        Co-Founder at Assistive Cards 🐥
                                    </p>
                                    <p className='my-1 p-0 fs-6'>
                                        I have always been so curious about the whole software development cycle,
                                        from just an idea to the journey of bringing it to life.
                                        Therefore I enjoy spending my time improving myself in full stack development while mostly focusing on the frontend.
                                    </p>
                                    <div className='col-12 fs-3 text-start m-0 mt-1 p-0'>
                                        <i className="fa-brands fa-linkedin me-2"></i>
                                        <i className="fa-brands fa-github me-2"></i>
                                        <i className="fa-brands fa-medium me-2"></i>
                                        <i className="fa-brands fa-twitter"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='col justify-content-center d-flex align-items-center'>
                                <img src={require("../images/profil.png")} className='img-thumbnail bg-transparent border-0 h-75'></img>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="border border-danger border-2 opacity-100 mt-4" />

                <div id='journal' className='m-0 p-0 mt-4 bg-primary d-flex justify-content-center'>
                    <div className='row d-flex justify-content-center m-0 p-0'>

                        <div className='col-12 mt-3'>
                            <h3 className='m-0 p-0'>facing this meaninglessness courageously</h3>
                            <h6>2022-09-21, by ebru</h6>
                            <p>Today I finished reading Optimistic Nihilism: A Psychologist's Personal Story,
                                and as always I am in love with a quote. The book itself was…</p>
                        </div>

                        <div className='col-12 mt-3'>
                            <h3 className='m-0 p-0'>facing this meaninglessness courageously</h3>
                            <h6>2022-09-21, by ebru</h6>
                            <p>Today I finished reading Optimistic Nihilism: A Psychologist's Personal Story,
                                and as always I am in love with a quote. The book itself was…</p>
                        </div>

                        <div className='col-12 mt-3'>
                            <h3 className='m-0 p-0'>facing this meaninglessness courageously</h3>
                            <h6>2022-09-21, by ebru</h6>
                            <p>Today I finished reading Optimistic Nihilism: A Psychologist's Personal Story,
                                and as always I am in love with a quote. The book itself was…</p>
                        </div>

                        <div className='col-12 mt-3'>
                            <h3 className='m-0 p-0'>facing this meaninglessness courageously</h3>
                            <h6>2022-09-21, by ebru</h6>
                            <p>Today I finished reading Optimistic Nihilism: A Psychologist's Personal Story,
                                and as always I am in love with a quote. The book itself was…</p>
                        </div>

                        <div className='col-12 mt-3'>
                            <h3 className='m-0 p-0'>facing this meaninglessness courageously</h3>
                            <h6>2022-09-21, by ebru</h6>
                            <p>Today I finished reading Optimistic Nihilism: A Psychologist's Personal Story,
                                and as always I am in love with a quote. The book itself was…</p>
                        </div>

                        <div className='col-12 mt-3'>
                            <p className='m-0 p-0 mb-3 fs-5+'>
                                1/ 2/
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