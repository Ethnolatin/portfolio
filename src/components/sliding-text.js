import React, { useContext } from "react"
import { Context } from "../context/langContext"
import styled from "@emotion/styled"
import texts from "./texts"

export const SlidingText = () => {
  const { lang } = useContext(Context)
  const text = texts[lang].slider

  return (
    <StyledSlider>
      <p>
        - {text.part1}
        <b>{text.part2}</b> - {text.part3}
        <b>{text.part4}</b>) -
      </p>
    </StyledSlider>
  )
}

const StyledSlider = styled.div`
  overflow: hidden;
  width: 100%;
  height: auto;
  padding: 0.2rem 0;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  font-size: 0.8rem;
  font-style: italic;
  & p {
    width: 300%;
    animation: slide 12s linear infinite;
  }
`
