import React from 'react'
import {Container}

export const SingleAyah = ({ayah}) => {
    return (
        <Container>
            <p>{ayah.text}</p> <hr />
        </Container>
    )
}
