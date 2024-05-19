import React from 'react'
import { BounceLoader } from 'react-spinners'

export default function IsLoader() {
    return (
        <div className="absolute top-[45%] left-[42%]">
            <BounceLoader size={150} color="#222" />
        </div>
    )
}

