import React, { useContext } from "react"
import { Context } from "../context/langContext"
import styled from "@emotion/styled"
import { StyledCard, StyledList } from "../components/styled-components"
import texts from "../components/texts"

export const AboutMe = () => {
  const { lang } = useContext(Context)
  const text = texts[lang].aboutMe
  const items = text.items

  return (
    <section id="aboutMe">
      <h3>{text.title}</h3>
      <StyledList>
        {items.map((item, index) => {
          const imgUrl = require(`../images/${item.imgName}`).default
          return (
            <StyledItemsCard key={index}>
              <header>
                <img src={imgUrl} alt={item.title} />
              </header>
              <main>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </main>
              <footer>
                <button
                  onClick={() => {
                    window.open(`${item.linkUrl}`, "_blank")
                  }}
                >
                  {text.more}
                </button>
              </footer>
            </StyledItemsCard>
          )
        })}
      </StyledList>
    </section>
  )
}

const StyledItemsCard = styled(StyledCard)`
  cursor: pointer;
  height: 22rem;
  & > header {
    height: 58%;
    &-img {
      object-fit: cover;
    }
  }
`
