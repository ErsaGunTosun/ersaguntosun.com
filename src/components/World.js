import React from 'react'
import WorldMap from "react-svg-worldmap";

function World() {
    const data = [
        { country: "tr", value: 1 },
        { country: "ru", value: 1 },
        { country: "br", value: 1 },
        { country: "it", value: 1 },
        { country: "pe", value: 1 },
        { country: "pt", value: 1 },
        { country: "es", value: 1 },
        { country: "fi", value: 1 },
        { country: "se", value: 1 },
        { country: "no", value: 1 },
        { country: "fr", value: 1 },
        { country: "de", value: 1 },
        { country: "nl", value: 1 },
        { country: "be", value: 1 },
        { country: "lu", value: 1 },
        { country: "ch", value: 1 },
        { country: "at", value: 1 },
        { country: "cz", value: 1 },
        { country: "hu", value: 1 },
        { country: "rs", value: 1 },
        { country: "gr", value: 1 },
        { country: "bg", value: 1 },
        { country: "lk", value: 1 },
    ];
    return (
        <div className=''>
            <h1 className='text-lg font-bold text-start'>Countries visited:</h1>
            <div className='flex justify-center'>
                <WorldMap
                    data={data}
                    size="responsive"
                    color='#878bfa'
                    borderColor="black"
                    backgroundColor="transparent"
                    strokeOpacity={1}

                />
            </div>
        </div>
    )
}

export default World