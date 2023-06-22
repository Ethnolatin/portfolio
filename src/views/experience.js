import React, { useContext } from "react"
import { Context } from "../context/langContext"
import styled from "@emotion/styled"
import { StyledList } from "../components/styled-components"
import texts from "../components/texts"

export const Experience = () => {
  const { lang } = useContext(Context)
  const text = texts[lang].experience
  const experiences = text.items

  return (
    <section id="experience">
      <h3>{text.title}</h3>
      <StyledList>
        {experiences.map((experience, index) => {
          return (
            <StyledExperience key={index}>
              <StyledP>{experience.title}</StyledP>
              <P>{experience.content}</P>
            </StyledExperience>
          )
        })}
      </StyledList>
    </section>
  )
}

const StyledExperience = styled.article`
  width: 70%;
  max-width: 600px;
  position: relative;
  margin: 0.5rem;
  border-radius: 0.5rem;
  border-top-left-radius: 0;
  padding: 0 0.5rem;
  background-color: var(--secondary-color);
  &::before {
    content: "";
    height: calc(100% + 15px);
    width: 2px;
    background-color: var(--tertiary-color);
    position: absolute;
    top: -7px;
    left: -15px;
  }
  &::after {
    content: "";
    height: 12px;
    width: 12px;
    border-radius: 50%;
    border: 2px solid var(--tertiary-color);
    background-color: var(--secondary-color);
    position: absolute;
    top: -10px;
    left: -22px;
  }
`
const P = styled.p`
  text-align: left;
  padding: 0.5rem 0;
  color: var(--primary-color);
`
const StyledP = styled(P)`
  font-weight: bold;
  border-bottom: 1px solid var(--tertiary-color);
`
