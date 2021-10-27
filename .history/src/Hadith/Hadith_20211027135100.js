import React, { useState } from 'react'

const Hadith = () => {

    const [hadith, setHadith] = useState([])

    const fetchData = async() => {
        const allData = await axios.get('https://ahadith-api.herokuapp.com/api/books/en').then(res => )
    }


    return (
        <div>
            
        </div>
    )
}

export default Hadith
