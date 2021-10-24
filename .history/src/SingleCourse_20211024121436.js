import React from 'react'
import { useParams } from 'react-router'

function SingleCourse({coursesSidebar}) {
    const {title} = useParams()
    return (
        <div>
            {coursesSidebar.map(())}
        </div>
    )
}

export default SingleCourse
