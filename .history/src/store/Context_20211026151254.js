import React, { createContext, useEffect, useState } from 'react'

const Masjid = createContext()

function Context({children}) {

    const [alert, setAlert] = useState({
        open: false,
        message: '',
        type: '',
    })

    const [loading, setLoading] = useState(false)
    

    useEffect(() => {
        onAut
    }, [])

    const 
    return (
        <Masjid.Provider>
            {children}
        </Masjid.Provider>
    )
}

export default Context
