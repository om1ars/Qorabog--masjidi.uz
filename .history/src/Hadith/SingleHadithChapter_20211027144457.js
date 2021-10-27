import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AllBooks } from './HadithUrls'
import { useHistory } from 'react-router'
import {Container} from '@material-ui/core'

import { AllCahpters } from './HadithUrls'

function SingleHadithChapter() {

    const [hadith, setHadith] = useState([])

    const fetchData = async() => {
        const data = await axios.get(AllCahpters()).then(res => {
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
            
        </div>
    )
}

export default SingleHadithChapter
