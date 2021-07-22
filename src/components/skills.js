const skills = ['HTML / CSS', 'JavaScript', 'ReactJS', 'Git / Github', 'Anglais', 'Espagnol']
const notions = ['NodeJS / Express', 'API REST', 'MongoDB / MySQL', 'SEO / Accessibilité']
const inprogress = ['TypeScript', 'React Hooks', 'Redux', 'NextJS', 'GraphQL', 'Jest']

export const Skills = () => {
    return (
        <section id='skills'>
            <h3>Compétences</h3>
            <div className='list'>
                {skills.map((skill, index) => {
                    return (<p key={index} className='skill'><strong>{skill}</strong></p>)
                })}
            </div>
            <h4>Notions</h4>
            <div className='list'>
                {notions.map((notion, index) => {
                    return (<p key={index} className='notion'>{notion}</p>)
                })}
            </div>
            <h4>Prochainement</h4>
            <div className='list'>
                {inprogress.map((wip, index) => {
                    return (<p key={index} className='wip'>{wip}</p>)
                })}
            </div>
        </section>
    )
}