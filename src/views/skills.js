import React, { useContext } from "react"
import { Context } from "../context/langContext"
import styled from "@emotion/styled"
import texts from "../components/texts"

export const Skills = () => {
  const { lang } = useContext(Context)
  const text = texts[lang].skills

  const skills = [
    "JavaScript",
    "ReactJS",
    "HTML / CSS",
    "Sass / Emotion",
    "Git / Github",
    `${text.english} / ${text.spanish}`,
  ]
  const notions = [
    "TypeScript",
    "Jest",
    "Tailwind CSS",
    "SvelteJS",
    `SEO / ${text.access}`,
    "NodeJS / Express",
    "API REST",
    "MongoDB / MySQL",
  ]
  const inprogress = ["Wordpress", "NextJS", "GraphQL", "Redux"]

  return (
    <section id="skills">
      <h3>{text.title1}</h3>
      <StyledList>
        {skills.map((skill, index) => {
          return <StyledSkills key={index}>{skill}</StyledSkills>
        })}
      </StyledList>
      <h4>{text.title2}</h4>
      <StyledList>
        {notions.map((notion, index) => {
          return <StyledNotions key={index}>{notion}</StyledNotions>
        })}
      </StyledList>
      <h4>{text.title3}</h4>
      <StyledList>
        {inprogress.map((wip, index) => {
          return <StyledWip key={index}>{wip}</StyledWip>
        })}
      </StyledList>
    </section>
  )
}

const StyledList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

const StyledSkills = styled.p`
  display: flex;
  width: 35%;
  min-width: 8rem;
  max-width: 18rem;
  min-height: 2rem;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: var(--secondary-color);
  color: white;
  letter-spacing: 0.1rem;
`

const StyledNotions = styled.p`
  display: flex;
  width: 25%;
  min-width: 7rem;
  max-width: 13.5rem;
  min-height: 2rem;
  align-items: center;
  justify-content: center;
  margin: 0.4rem;
  border-radius: 0.5rem;
  padding: 0.4rem;
  background-color: var(--secondary-color);
  color: white;
`

const StyledWip = styled.p`
  display: flex;
  width: 15%;
  min-width: 6rem;
  max-width: 9rem;
  min-height: 1.5rem;
  align-items: center;
  justify-content: center;
  margin: 0.3rem;
  border-radius: 0.5rem;
  padding: 0.3rem;
  background-color: var(--secondary-color);
  color: white;
`
