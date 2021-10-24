import React from 'react'
import { useParams } from 'react-router'

function SingleCourse({coursesSidebar}) {
    const {title} = useParams()
    return (
        <div>
            {coursesSidebar.map((c) => )}
        </div>
    )
}

export default SingleCourse
