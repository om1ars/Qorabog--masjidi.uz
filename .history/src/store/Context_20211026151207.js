import React, { createContext, useState } from 'react'

const Masjid = createContext()

function Context({chidlren}) {

    const [alert, setAlert] = useState({
        open: false,
        message: '',
        type: '',
    })
    return (
        <Masjid.Provider>
            {children}
        </Masjid.Provider>
    )
}

export default Context
