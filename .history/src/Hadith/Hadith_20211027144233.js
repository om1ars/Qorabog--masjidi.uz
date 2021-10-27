import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AllBooks } from './HadithUrls'
import { useHistory } from 'react-router'

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
    let history = useHistory()


    return (
        <div>
           .{hadith.map((e) => (
               <p onClick={() => history.push(`/hadithCahpter${Book_ID}`)}>{e.Book_Name}</p>
           ))} 
        </div>
    )
}

export default Hadith
