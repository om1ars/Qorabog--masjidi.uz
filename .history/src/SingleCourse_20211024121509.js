import React from 'react'
import { useParams } from 'react-router'

function SingleCourse({coursesSidebar}) {
    const {title} = useParams()
    return (
        <div>
            {coursesSidebar.filter((c) => c.title === title).map(())}
        </div>
    )
}

export default SingleCourse
