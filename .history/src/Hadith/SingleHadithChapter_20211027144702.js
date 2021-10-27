import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router'
import {Container} from '@material-ui/core'

import { AllCahpters } from './HadithUrls'

function SingleHadithChapter() {

    const {Book_ID} = useParams()

    const [hadith, setHadith] = useState([])

    const fetchData = async() => {
        const data = await axios.get(AllCahpters(Book_ID)).then(res => {
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
