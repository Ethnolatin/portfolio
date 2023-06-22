import React, { useContext } from "react"
import styled from "@emotion/styled"
import myFace from "../images/photo_id.png"
import headerLeft from "../images/header-left.png"
import headerRight from "../images/header-right.png"
import { HeaderButtons } from "../components/header-buttons"
import { Context } from "../context/langContext"
import texts from "../components/texts"
import "../styles/sass/style.scss"

export const Header = () => {
  const { lang } = useContext(Context)
  const text = texts[lang].header

  return (
    <StyledHeader id="header">
      <img src={headerLeft} alt="" />
      <section>
        <Portrait src={myFace} alt="mon portrait" />
        <h1>Frédéric Duchesne</h1>
        <H2>{text.title}</H2>
        <P>
          {text.std1}
          <Span>{text.bold1}</Span>
          {text.std2}
          <Span>{text.bold2}</Span>
          {text.std25}
          <Span>{text.bold25}</Span>
          {text.std3}
          <Span>{text.bold3}</Span>
          {text.std4}
          <Span>{text.bold4}</Span>
          {text.std5}
          <Span>{text.bold5}</Span>
          {text.std6}
          <Span>{text.bold6}</Span>.
        </P>
        <HeaderButtons />
      </section>
      <img src={headerRight} alt="" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  background-color: black;
  color: white;
  & > img {
    display: none;
  }
  & section {
    width: 40%;
    min-width: 320px;
  }
  & h1 {
    margin: 0 auto;
    padding: 0.5rem 3rem;
    color: white;
  }
  @media screen and (min-width: 1200px) {
    & > img {
      display: block;
    }
  }
`
const Portrait = styled.img`
  display: block;
  margin: 0.5rem auto;
  border-radius: 50%;
  height: 8rem;
  border: 3px solid var(--primary-color);
`
const P = styled.p`
  font-family: "Helvetica-Thin", sans-serif;
  letter-spacing: 0.06rem;
`
const Span = styled.span`
  font-family: "Helvetica", sans-serif;
`
const H2 = styled.h2`
  white-space: pre-line;
`
