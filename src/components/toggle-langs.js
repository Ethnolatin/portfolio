import React, { useContext } from "react"
import styled from "@emotion/styled"
import FrenchFlag from "../assets/france.svg"
import SpanishFlag from "../assets/spain.svg"
import EnglishFlag from "../assets/united-kingdom.svg"
import { Context } from "../context/langContext"

export function ToggleLangs() {
  const { toggleLang } = useContext(Context)

  return (
    <LangContainer>
      <img
        alt="drapeau français"
        onClick={() => toggleLang("FR")}
        src={FrenchFlag}
      />
      <img
        alt="drapeau anglais"
        onClick={() => toggleLang("EN")}
        src={EnglishFlag}
      />
      <img
        alt="drapeau espagnol"
        onClick={() => toggleLang("ES")}
        src={SpanishFlag}
      />
    </LangContainer>
  )
}

const LangContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 300px;
  padding-top: 0.5rem;
  & img {
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 4px;
    cursor: pointer;
  }
`
