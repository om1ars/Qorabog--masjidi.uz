import React, { useState } from 'react'
import { Api } from '../../Api'

function Quran() {
    const [data, setData] = useState(Api)
    return (
        <div className='container'>
            <div className='header'>
                <div></div>
            </div>

        </div>
    )
}

export default Quran
