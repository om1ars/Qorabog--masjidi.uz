import { onAuthStateChanged } from '@firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const Masjid = createContext()

function Context({children}) {

    const [alert, setAlert] = useState({
        open: false,
        message: '',
        type: '',
    })

    const [user, setUser]= useState([])

    const [loading, setLoading] = useState(false)
    

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) setUser(user)
        }) else setUser(null)
    }, [])

    const 
    return (
        <Masjid.Provider>
            {children}
        </Masjid.Provider>
    )
}

export default Context
