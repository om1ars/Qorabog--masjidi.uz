import React, { useState } from 'react'

const Hadith = () => {

    const [hadith, setHadith] = useState([])

    const fetchData = async() => {
        const data = await axios.get('https://ahadith-api.herokuapp.com/api/books/en').then(res => {
            const allData = res.data
            setHadith(allData)
        })
    }


    return (
        <div>
            
        </div>
    )
}

export default Hadith
