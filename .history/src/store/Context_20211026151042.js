import React, { createContext } from 'react'

const Masjid = createContext()

function Context() {
    return (
        <Masjid.Provider>
            {chid}
        </Masjid.Provider>
    )
}

export default Context
