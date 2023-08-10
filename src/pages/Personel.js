import React from 'react'
import WorldMap from "react-svg-worldmap";

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function Personel() {
    const data = [
        { country: "cn", value: 1 }, // china
        { country: "in", value: 1 }, // india
        { country: "us", value: 1 }, // united states
        { country: "id", value: 1 }, // indonesia
        { country: "pk", value: 1 }, // pakistan
        { country: "br", value: 1 }, // brazil
        { country: "ng", value: 1 }, // nigeria
        { country: "bd", value: 1 }, // bangladesh
        { country: "ru", value: 1 }, // russia
        { country: "mx", value: 1 }, // mexico
    ];
    return (
        // <div className='col-9 d-flex flex-column'>
        //     <Header />
        //     <div className='container flex-fill w-100 h-100'>
        //         <div className='mt-4 px-5 p-0 '>
        //             <h1 className='text-start'>personel</h1>
        //             <p className='fs-5 mt-4'>
        //                 "It doesn’t interest me what you do for a living.
        //                 I want to know what you ache for – and if you dare to dream of meeting your heart’s longing.
        //                 It doesn’t interest me how old you are. I want to know if you will risk looking like a fool – for love – for your dream – for the adventure of being alive."
        //                 – Oriah Mountain Dreamer
        //             </p>
        //             <h4>Personality type: ENFP-T</h4>
        //             <p>Collections: postcard, flag patch and paper money</p>
        //             <p>Music: fleetwood mac, dire straits, jungle, paradis, sohn... // me on</p>
        //             <p>Books: “life holds one great but quite commonplace mystery.
        //                 though shared by each of us and known to all, seldom rates a second thought.
        //                 that mystery, which most of us take for granted and never think twice about, is time.</p>
        //             <p>calendars and clocks exist to measure time,
        //                 but that signifies little because we all know that an hour can seem as eternity or pass in a flash,
        //                 according to how we spend it.</p>
        //             <p>
        //                 time is life itself, and life resides in the human heart.” - momo // me on
        //             </p>
        //             <p>
        //                 Movies: the ones that made me feel somehow different than others
        //             </p>
        //             <p>
        //                 Games: I especially love story-driven games a lot! here are some that I enjoyed playing so far
        //             </p>

        //             <div className='d-flex justify-content-center'>
        //                 <WorldMap
        //                     data={data}
        //                     size="responsive"
        //                     color='lightgreen'
        //                     frameColor='red'
        //                     borderColor="black"
        //                     strokeOpacity={1}
        //                     backgroundColor='transparent'
        //                 />
        //             </div>

        //         </div>

        //         <Footer />
        //     </div>
        // </div>
        <div className='my-11 mx-auto max-w-mdx pt-0 px-4 pb-5.5'>
            <Header islogo={true} ispage={'personel'} />

        </div>
    )
}

export default Personel