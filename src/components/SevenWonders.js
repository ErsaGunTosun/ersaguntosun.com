import React from 'react'

import Wonders1 from '../assets/images/seven_wonders/wonders-1.png';
import Wonders2 from '../assets/images/seven_wonders/wonders-2.png';
import Wonders3 from '../assets/images/seven_wonders/wonders-3.png';
import Wonders4 from '../assets/images/seven_wonders/wonders-4.png';
import Wonders5 from '../assets/images/seven_wonders/wonders-5.png';
import Wonders6 from '../assets/images/seven_wonders/wonders-6.png';
import Wonders7 from '../assets/images/seven_wonders/wonders-7.png';


function SevenWonders({actives}) {
    const findActive = (active) => {
        return actives.find((act) => act === active)
    };
    
    return (
        <div className='mt-5'>
            <h1 className='text-lg font-bold'>Seven Wonders:</h1>
            <div className='flex justify-center'>
                <div className='mx-2 cursor-pointer'>
                    <div class="group relative flex justify-center">
                        <img src={Wonders3} className={`w-24 ${findActive('colosseum') ? 'invert-0 opacity-100':'invert-75 opacity-100' }`} />
                        <span class="w-48 text-center absolute bottom-full scale-0 transition-all rounded bg-tooltip bg-opacity-80 text-base text-white group-hover:scale-100">
                            <p className='w-48'>🇮🇹 Colosseum</p>
                            <span className='text-smx'>Visited: 2023</span>
                        </span>
                    </div>
                </div>
                <div className='mx-2 cursor-pointer'>
                    <div class="group relative flex justify-center">
                        <img src={Wonders4} className={`w-24 ${findActive('machu') ? 'invert-0 opacity-100':'invert-75 opacity-100' }`} />
                        <span class="w-48 text-center absolute bottom-full scale-0 transition-all rounded bg-tooltip bg-opacity-80  text-base text-white group-hover:scale-100">
                            <p className='w-48'>🇵🇪 Machu Picchu</p>
                            <span className='text-smx'>Visited: 2023</span>
                        </span>
                    </div>
                </div>
                <div className='mx-2 cursor-pointer'>
                    <div class="group relative flex justify-center">
                        <img src={Wonders5} className={`w-24 ${findActive('redeemer') ? 'invert-0 opacity-100':'invert-75 opacity-100' }`} />
                        <span class="w-48 text-center absolute bottom-full scale-0 transition-all rounded bg-tooltip bg-opacity-80  text-base text-white group-hover:scale-100">
                            <p className='w-48'>🇧🇷 Christ the Redeemer</p>
                            <span className='text-smx'>Visited: 2023</span>
                        </span>
                    </div>
                </div>
                <div className='mx-2 cursor-pointer'>
                    <div class="group relative flex justify-center">
                        <img src={Wonders1} className={`w-24 ${findActive('taj') ? 'invert-0 opacity-100':'invert-75 opacity-100' }`} />
                        <span class="w-48 text-center absolute bottom-full scale-0 transition-all rounded bg-tooltip bg-opacity-80  text-base text-white group-hover:scale-100">
                            <p className='w-48'>🇮🇳 Taj Mahal</p>
                        </span>
                    </div>
                </div>
                <div className='mx-2 cursor-pointer'>
                    <div class="group relative flex justify-center">
                        <img src={Wonders6} className={`w-24 ${findActive('ıtza') ? 'invert-0 opacity-100':'invert-75 opacity-100' }`} />
                        <span class="w-48 text-center absolute bottom-full scale-0 transition-all rounded bg-tooltip bg-opacity-80  text-base text-white group-hover:scale-100">
                            <p className='w-48'>🇲🇽 Chichen Itza</p>
                        </span>
                    </div>
                </div>
                <div className='mx-2 cursor-pointer'>
                    <div class="group relative flex justify-center">
                        <img src={Wonders7} className={`w-24 ${findActive('petra') ? 'invert-0 opacity-100':'invert-75 opacity-100' }`} />
                        <span class="w-48 text-center absolute bottom-full scale-0 transition-all rounded bg-tooltip bg-opacity-80  text-base text-white group-hover:scale-100">
                            <p className='w-48'>🇯🇴 Petra</p>
                        </span>
                    </div>
                </div>
                <div className='mx-2 cursor-pointer'>
                    <div class="group relative flex justify-center">
                        <img src={Wonders2} className={`w-24 ${findActive('great-wall') ? 'invert-0 opacity-100':'invert-75 opacity-100' }`} />
                        <span class="w-48 text-center absolute bottom-full scale-0 transition-all rounded bg-tooltip bg-opacity-80  text-base text-white group-hover:scale-100">
                            <p className='w-48'>🇨🇳 Great Wall of China</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SevenWonders