import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Hadith = () => {

    const [hadith, setHadith] = useState([])

    const fetchData = async() => {
        const data = await axios.get('https://ahadith-api.herokuapp.com/api/ahadith/all/ar-notashkeel ').then(res => {
            const allData = res.data.AllChapters
            setHadith(allData)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(hadith)


    return (
        <div>
            
        </div>
    )
}

export default Hadith
