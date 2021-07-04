const experiences = [
    {
        title: 'OpenClassrooms - 2021',
        content: "Diplômé d'un titre professionnel de développeur web"
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
        title: "Enzym - juin-nov. 2018",
        content: "Participation à la landing page enzym.io"
    }
]

export const Experience = () => {
    return (
        <section>
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
