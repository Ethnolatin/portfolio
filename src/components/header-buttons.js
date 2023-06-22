import React, { useContext } from "react"
import { Context } from "../context/langContext"
import styled from "@emotion/styled"
import texts from "./texts"

export const HeaderButtons = () => {
  const { lang } = useContext(Context)
  const text = texts[lang].headerButtons

  return (
    <StyledList>
      <button
        onClick={() => {
          window.open("mailto:duchesne.fred@gmail.com", "_blank")
        }}
      >
        {text.email}
      </button>
      <button
        onClick={() => {
          window.open(
            `https://ethnolatin.github.io/CV-html-css/${text.cvPage}`,
            "_blank"
          )
        }}
      >
        {text.cv}
      </button>
    </StyledList>
  )
}

const StyledList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`
