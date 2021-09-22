import React, { useContext, useState } from 'react' 
import { LinkToAnchor } from './link-to-anchor'
import { FaAlignJustify } from 'react-icons/fa'
import { ToggleLangs } from './toggle-langs'
import { Context } from '../context/langContext'
import texts from './texts'

const anchors = [
    'skills',
    'achievements',
    'experience',
    'aboutMe',
]

export const Navbar = () => {
    const {lang} = useContext(Context)
    const [status, setStatus] = useState(false)
    const toggleStatus = (status) => {
        setStatus(!status)
    }

    return (
        <nav id="navbar" className="navbar">
            <>
                <button onClick={toggleStatus}>
                    <FaAlignJustify />
                </button>
                <div className={status ? "navbar-links navbar-links-show" : "navbar-links"}>
                    <ul>
                        {
                            anchors.map(anchor => {
                                return (
                                    <li key={anchor}>
                                        <LinkToAnchor
                                            anchor={anchor}
                                            linkClass='navbar-link'
                                            linkText={texts[lang].navbar[anchor]}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ToggleLangs />
                </div>
            </>
        </nav>
    )
}