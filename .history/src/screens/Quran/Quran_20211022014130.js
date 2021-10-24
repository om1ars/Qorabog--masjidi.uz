import React, { useState } from 'react'
import { Api } from '../../Api'

function Quran() {
    const [data, setData] = useState(Api)
    return (
        <div>
            {data.map((d) => (
                
            ))}
        </div>
    )
}

export default Quran
