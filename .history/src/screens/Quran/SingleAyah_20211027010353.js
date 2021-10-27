import React from 'react'
import {Container} from '@material-ui/core'

export const SingleAyah = ({ayah}) => {
    return (
        <Container>
            <p>{ayah.text}</p> <hr />
        </Container>
    )
}
