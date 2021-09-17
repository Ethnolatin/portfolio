import React from 'react'
import { LinkToAnchor } from './link-to-anchor'
import { FaArrowCircleUp } from 'react-icons/fa'


export const UpArrow = () => {
    
    return (
        <LinkToAnchor
            anchor='navbar'
            linkClass='uparrow'
            linkText={<FaArrowCircleUp />}
        />
    )
}