const skills = ['HTML / CSS', 'JavaScript', 'ReactJS', 'Git / Github', 'Anglais', 'Espagnol']

export const Skills = () => {
    return (
        <section>
            <h3>Compétences</h3>
            <div className='list'>
                {skills.map((skill, index) => {
                    return (<p key={index} className='skill'>{skill}</p>)
                })}
            </div>
        </section>
    )
}