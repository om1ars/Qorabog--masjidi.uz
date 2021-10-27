import React, { useState } from 'react'

const Hadith = () => {

    const [hadith, setHadith] = useState([])

    const fetchData = async() => {
        const allData = await axios.get('https://ahadith-api.herokuapp.com/api/books/en').then(res => {
            const 
        })
    }


    return (
        <div>
            
        </div>
    )
}

export default Hadith
