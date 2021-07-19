const items = [
    {
        imgName: 'portrait.png',
        title: 'Portrait',
        description: "écrit en 2018 par Pauline Rochette à l'occasion de ma collaboration avec Enzym.",
        linkUrl: 'https://medium.com/enzym-fr/fred-d%C3%A9veloppeur-junior-297c39129f6a',
    },
    {
        imgName: 'github.png',
        title: 'Compte GitHub',
        description: 'avec le code de différents projets et parfois la visualisation de leur rendu web via github-pages.',
        linkUrl: 'https://github.com/Ethnolatin'
    }
]

export const AboutMe = () => {
    return (
        <section id="aboutMe">
            <h3>A propos de moi...</h3>
            <div className='list items'>
                {items.map((item, index) => {
                    const imgUrl=require(`../images/${item.imgName}`).default
                    return (
                        <div
                            key={index}
                            className='card items' 
                            onClick={() => {window.open(`${item.linkUrl}`, '_blank')}}
                        >
                            <div className="card-header">
                                <img src={imgUrl} alt={item.title} />
                            </div>
                            <div className="card-body">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}