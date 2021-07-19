import React from 'react'
import { Link } from 'react-scroll'
import { FaArrowCircleUp } from 'react-icons/fa'

export const UpArrow = () => {
    return (
        <Link
            to="navbar" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className='uparrow'
            activeClass='active'
        >
            <FaArrowCircleUp />
        </Link>
    )
}