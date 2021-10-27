import React, { createContext } from 'react'

const Masjid = createContext()

function Context({chidlren}) {

    const [alert, setAlert]
    return (
        <Masjid.Provider>
            {children}
        </Masjid.Provider>
    )
}

export default Context
