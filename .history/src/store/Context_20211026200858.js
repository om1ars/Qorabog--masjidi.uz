import { onAuthStateChanged } from '@firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const Masjid = createContext()

function Context({children}) {

    const [user, setUser] = useState();
    const [watchlist, setWatchlist] = useState([])
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({
      open: false,
      message: "",
      type: "success",
    });
  


    

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) setUser(user)
            else setUser(null)
    }, [])
        }) 

    
    return (
        <Masjid.Provider
        value={{user, setUser, loading, setLoading, setAlert, alert}}
        >
            {children}
        </Masjid.Provider>
    )
}



export default Context

export const MasjidState = () => {
    return useContext(Masjid)
}