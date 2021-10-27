import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AllBooks } from './HadithUrls'

const Hadith = () => {

    const [hadith, setHadith] = useState([])

    const fetchData = async() => {
        const data = await axios.get(AllBooks()).then(res => {
            const allData = res.data.Books
            setHadith(allData)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(hadith)


    return (
        <div>
           {/* .{hadith.map((e) => (
               <p>{e.Hadith_ID}</p>
           ))}  */}
        </div>
    )
}

export default Hadith
