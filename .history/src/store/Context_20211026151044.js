import React, { createContext } from 'react'

const Masjid = createContext()

function Context() {
    return (
        <Masjid.Provider>
            {children}
        </Masjid.Provider>
    )
}

export default Context
