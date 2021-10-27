import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AllBooks } from './HadithUrls'
import { useHistory } from 'react-router'
import {Container} from '@material-ui/core'

const Hadith = () => {

    const [hadith, setHadith] = useState([])

    const fetchData = async() => {
        const data = await axios.get('https://ahadith-api.herokuapp.com/api/chapter/all/en ').then(res => {
            const allData = res.data.AllChapters
            setHadith(allData)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(hadith)
    let history = useHistory()


    return (
        <Container>
           {/* .{hadith.map((e) => (
               <p onClick={() => history.push(`/hadithCahpter${e.Book_ID}`)}>{e.Book_Name}</p>
           ))}  */}
        </Container>
    )
}

export default Hadith
