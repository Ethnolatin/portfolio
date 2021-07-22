const experiences = [
    {
        title: "Enzym - juil. 2021",
        content: "Mises à jour de la landing page enzym.io"
    },
    {
        title: 'OpenClassrooms - juin 2021',
        content: "Diplômé du titre professionnel de développeur web"
    },
    {
        title: "Projet de fin de formation - mai 2021",
        content: "Réalisation d'un MVP de réseau social d'entreprise"
    },
    {
        title: "Projet de formation - sept. 2020",
        content: "Réalisation d'une page web en HTML et CSS"
    },
    {
        title: "Enzym - juil. 2021 & juin-nov. 2018",
        content: "Travaux sur la landing page enzym.io"
    }
]

export const Experience = () => {
    return (
        <section id='experience'>
            <h3>Expérience</h3>
            <div className='list'>
                {experiences.map((experience, index) => {
                    return (
                        <article key={index} className='experience'>
                            <p><strong>{experience.title}</strong></p>
                            <p>{experience.content}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
