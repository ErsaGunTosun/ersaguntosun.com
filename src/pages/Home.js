import React from 'react'

//logo
import logo from '../images/profil.png'

// Components
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ArticleCard from '../components/ArticleCard.js';

function Home() {
    return (
        <div className='my-11 mx-auto max-w-mdx pt-0 px-4 pb-5.5'>
            <Header islogo={false} ispage={''} />
            <div className='flex mt-2'>
                <div className='m-0 p-0 text-justify'>
                    <h1 className='text-4xl font-bold mb-6'>Hi, I'm Ebru.</h1>
                    <h3 className='text-1.5xl font-semibold my-1 tracking-tight'>Sr. Frontend Engineer at <strong>RoomPriceGenie</strong> 🧞</h3>
                    <h3 className='text-1.5xl font-semibold my-1 tracking-tight'>Founder at <strong>Noe Crafts</strong> 🍃</h3>
                    <h3 className='text-1.5xl font-semibold my-1 tracking-tight'>Co-Founder at <strong>Assistive Cards</strong> 🐥</h3>
                    <p className='my-6 text-lg text-justify sm:pr-9 tracking-tighter'>
                        I have always been so curious about the whole software development cycle, from just an idea to the journey of bringing it to life.
                        Therefore I enjoy spending my time improving myself in full stack development while mostly focusing on the frontend.
                    </p>
                    <div className='text-2.5xl text-start m-0 mt-4 p-0 inline'>
                        <a href='#'><i className="fa-brands fa-linkedin-in me-2"></i></a>
                        <a href='#'><i className="fa-brands fa-github me-2"></i></a>
                        <a href='#'><i className="fa-brands fa-medium me-2"></i></a>
                        <a href='#'><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
                <img src={logo} className='hidden sm:block sm:w-64 h-fit' />
            </div>
            <hr className='my-10 opacity-20' />
            <div className=''>
                <ArticleCard title="facing this meaninglessness courageously" time="2022-09-21, by ebru" content="Today I finished reading Optimistic Nihilism: A Psychologist's Personal Story, and as always I am in love with a quote. The book itself was…" />
                <ArticleCard title="optimistic nihilism" time="2022-08-28, by ebru" content="I asked DALL·E to draw me an image for this post saying optimist nihilist enjoying life in mountains, digital art and did an amazing job as…" />
                <ArticleCard title="the games" time="2022-08-17, by ebru" content="This week I have been on sick leave and not productive at all since I somehow managed to catch a cold after a lake trip, but there is no…" />
                <ArticleCard title="dreamers and realists" time="2020-08-03, by ebru" content="There are dreamers and there are realists in this world Youd think the dreamers would find the dreamers and the realists would find the… " />
                <ArticleCard title="the movies" time="2020-04-26, by ebru" content="How the quarantine is going? I have recently been watching a lot of movies. I started a list at the beginning of this year, I was going to…" />
                <p className='text-lg'>
                    <a href='#' className='font-bold'>1 /</a>
                    <a href='#'> 2 /</a>
                </p>
            </div>
            <hr className='my-8 opacity-20' />
            <Footer />
        </div>
    )
}

export default Home