const experiences = [
    {
        title: 'OpenClassrooms - 2021',
        content: "Diplômé d'un titre professionnel de développeur web"
    },
    {
        title: "Projet de fin d'études - mai 2021",
        content: "réalisation d'un MVP de réseau social d'entreprise"
    },
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
