import React from "react"
import { Link } from "react-scroll"

export const LinkToAnchor = (props) => {
  return (
    <Link
      to={props.anchor}
      spy={true}
      smooth={true}
      duration={800}
      activeClass="active"
    >
      {props.linkText}
    </Link>
  )
}
