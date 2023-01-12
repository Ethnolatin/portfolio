import React, { useContext, useState } from "react"
import { Context } from "../context/langContext"
import { MoreImagesModal } from "../components/more-images"
import texts from "../components/texts"

export const Achievements = () => {
  const { lang } = useContext(Context)
  const [showModal, setShowModal] = useState(false)
  const [selectedAchievement, setSelectedAchievement] = useState({})
  const text = texts[lang].achievements

  const achievements = [
    {
      imgName: text.enzymIcoImage,
      title: "enzym",
      description: text.enzymIco,
      linkUrl: `https://${text.enzymIcoPage}`,
      imageList: [],
    },
    {
      imgName: "enquete.png",
      title: "Lycée de Mourenx",
      description: text.survey,
      // linkUrl: '',
      imageList: [
        "enquete-welcome.png",
        "enquete-mobile.png",
        "enquete-tablet.png",
      ],
    },
    {
      imgName: text.enzymImage,
      title: "enzym",
      description: text.enzym,
      linkUrl: `https://www.enzym.io/${text.enzymPage}`,
      imageList: [],
    },
    {
      imgName: "groupomania-welcome.png",
      title: "Groupomania",
      description: text.groupomania,
      // linkUrl: 'https://github.com/Ethnolatin/FredericDuchesne_7_04012021',
      imageList: [
        "groupomania-identification.png",
        "groupomania-inscription.png",
        "groupomania-homepage.png",
        "groupomania-article.png",
        "groupomania-userslist.png",
        "groupomania-add.png",
        "groupomania-modify.png",
      ],
    },
    {
      imgName: "oh-my-food-1.png",
      title: "ohmyfood",
      description: text.ohmyfood,
      linkUrl: "https://ethnolatin.github.io/FredericDuchesne_3_08092020/",
      imageList: [
        "oh-my-food-1-mobile.png",
        "oh-my-food-2-mobile.png",
        "oh-my-food-3-mobile.png",
        "oh-my-food-3-tablet.png",
        "oh-my-food-3-desktop.png",
      ],
    },
    {
      imgName: text.cvHeader,
      title: "CV",
      description: text.cv,
      linkUrl: `https://ethnolatin.github.io/CV-html-css/${text.cvPage}`,
      imageList: [],
    },
  ]

  const handleClick = (achievement) => {
    setSelectedAchievement(achievement)
    handleOpenModal()
  }

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <section id="achievements">
      <h3>{text.title}</h3>
      <div className="list">
        {achievements.map((achievement, index) => {
          const imgUrl = require(`../images/${achievement.imgName}`).default
          return (
            <div className="card" key={index}>
              {showModal && (
                <MoreImagesModal
                  title={selectedAchievement.title}
                  imageList={selectedAchievement.imageList}
                  showModal={showModal}
                  handleCloseModal={handleCloseModal}
                />
              )}
              <div className="card-header">
                <img src={imgUrl} alt={achievement.title} />
              </div>
              <div className="card-body">
                <h1>{achievement.title}</h1>
                <p>{achievement.description}</p>
              </div>
              <div className="card-footer">
                {achievement.linkUrl ? (
                  <button
                    onClick={() => {
                      window.open(`${achievement.linkUrl}`, "_blank")
                    }}
                  >
                    {text.webPage}
                  </button>
                ) : (
                  ""
                )}
                {achievement.imageList.length ? (
                  <button onClick={() => handleClick(achievement)}>
                    {text.images}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
