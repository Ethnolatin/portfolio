import React from 'react'
import { Link } from 'react-scroll'
import { FaAlignJustify } from 'react-icons/fa'

export class Navbar extends React.Component {
    state = {
        status: false
    }
    toggle = () => {
        this.setState({status:!this.state.status})
    }
    render() {
        return (
            <nav className="navbar">
                <>
                    <button onClick={this.toggle}>
                        <FaAlignJustify />
                    </button>
                    <div className={this.state.status ? "navbar-links navbar-links-show" : "navbar-links"}>
                    <ul>
                        <li>
                            <Link
                                to="skills" 
                                spy={true} 
                                smooth={true} 
                                duration={500} 
                                className='navbar-link' 
                                activeClass='active'
                            >
                                Compétences
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="achievements" 
                                spy={true} 
                                smooth={true} 
                                duration={500} 
                                className='navbar-link' 
                                activeClass='active'
                            >
                                Réalisations
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="experience" 
                                spy={true} 
                                smooth={true} 
                                duration={500} 
                                className='navbar-link' 
                                activeClass='active'
                            >
                                Expérience
                            </Link>
                        </li>
                    </ul>
                        
                    </div>
                </>
            </nav>
        )
    }
}