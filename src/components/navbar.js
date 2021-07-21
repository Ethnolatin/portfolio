import React from 'react'
import { LinkToAnchor } from './link-to-anchor'
import { FaAlignJustify } from 'react-icons/fa'

const linksToAnchors = [
    {
        anchor: 'skills',
        linkText: 'Compétences',
    },
    {
        anchor: 'achievements',
        linkText: 'Réalisations',
    },
    {
        anchor: 'experience',
        linkText: 'Expérience',
    },
    {
        anchor: 'aboutMe',
        linkText: 'A propos de moi',
    },
]
export class Navbar extends React.Component {
    state = {
        status: false
    }
    toggle = () => {
        this.setState({status:!this.state.status})
    }
    render() {
        return (
            <nav id="navbar" className="navbar">
                <>
                    <button onClick={this.toggle}>
                        <FaAlignJustify />
                    </button>
                    <div className={this.state.status ? "navbar-links navbar-links-show" : "navbar-links"}>
                        <ul>
                            {
                                linksToAnchors.map(linkToAnchor => {
                                    return (
                                        <li key={linkToAnchor.linkText}>
                                            <LinkToAnchor
                                                anchor={linkToAnchor.anchor}
                                                linkClass='navbar-link'
                                                linkText={linkToAnchor.linkText}
                                            />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </>
            </nav>
        )
    }
}