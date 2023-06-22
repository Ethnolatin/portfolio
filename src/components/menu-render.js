import { useContext } from "react"
import { Context } from "../context/langContext"
import { LinkToAnchor } from "./link-to-anchor"
import texts from "./texts"
import { ToggleLangs } from "./toggle-langs"

export const MenuRender = () => {
  const { lang } = useContext(Context)
  const anchors = ["skills", "achievements", "experience", "aboutMe"]

  return (
    <>
      <ul>
        {anchors.map((anchor) => {
          return (
            <li key={anchor}>
              <LinkToAnchor
                anchor={anchor}
                linkText={texts[lang].navbar[anchor]}
              />
            </li>
          )
        })}
      </ul>
      <ToggleLangs />
    </>
  )
}
