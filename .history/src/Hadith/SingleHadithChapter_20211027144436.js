import React from 'react'

function SingleHadithChapter() {

    const [hadith, setHadith] = useState([])

    const fetchData = async() => {
        const data = await axios.get(()).then(res => {
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
