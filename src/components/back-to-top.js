import React from "react"
import styled from "@emotion/styled"
import { LinkToAnchor } from "./link-to-anchor"
import myFace from "../images/photo_id.png"

export const BackToTop = () => {
  return (
    <LinkToAnchor
      anchor="header"
      linkText={<Logo src={myFace} alt="mon portrait" />}
    />
  )
}

const Logo = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin: 1rem 1rem 0;
  border-radius: 50%;
  border: 2px solid var(--secondary-color);
  &:hover {
    border-color: var(--tertiary-color);
  }
`
