import React from 'react'
import {Container} from '@material-ui/core'

export const SingleAyah = ({ayah}) => {

    const { number, hizbQuarter, manzil, juz, page, ruku, sajda, text } = ayah
    return (
        <Container>
            <p style={{textAlign: 'right'}}><span>{text}</span> <span>{number}</span> </p> <hr />
            <div>

            </div>
        </Container>
    )
}
