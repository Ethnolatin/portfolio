export const HeaderButtons = () => {
    return (
        <div className="list">
            <button onClick={()=>{window.open('mailto:duchesne.fred@gmail.com', '_blank')}}>M'envoyer un courriel</button>
            <button onClick={()=>{window.open('https://ethnolatin.github.io/CV-html-css', '_blank')}}>Voir mon CV</button>
        </div>
    )
}
