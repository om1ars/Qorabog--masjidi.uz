import { onAuthStateChanged } from '@firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const Masjid = createContext()

function Context({children}) {

    const [user, setUser] = useState(null);
    const [watchlist, setWatchlist] = useState([])
    const [alert, setAlert] = useState({
      open: false,
      message: "",
      type: "success",
    });
  

    const [user, setUser]= useState(null)

    const [loading, setLoading] = useState(false)
    

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