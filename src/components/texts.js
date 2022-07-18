const traductions = {
    FR: {
        navbar: {
            skills: "Compétences",
            achievements: "Réalisations",
            experience: "Expérience",
            aboutMe: "À propos de moi"
        },
        header: {
            title: "Développeur Web",
            std1: "Bonjour, je m'appelle ",
            bold1: "Frédéric Duchesne",
            std2: ", je suis ",
            bold2: "développeur front-end",
            std25: " et ",
            bold25: "intégrateur web",
            std3: ", avec une bonne ",
            bold3: "expérience des enjeux de l'entreprise",
            std4: " et habitué à évoluer dans un ",
            bold4: "contexte international",
            std5: ", disponible pour une collaboration en ",
            bold5: "télétravail",
            std6: " en tant que ",
            bold6: "salarié ou freelance",
        },
        headerButtons: {
            email: "M'envoyer un courriel",
            cv: "Voir mon CV",
            cvPage: "",
        },
        slider: {
            part1: "J'ai codé ce portfolio en ",
            part2: "JavaScript (ReactJS) et CSS (Sass)",
            part3: "Code disponible sur mon compte GitHub (voir ",
            part4: '"À propos de moi"',
        },
        skills: {
            title1: "Compétences",
            title2: "Notions",
            title3: "En cours...",
            english: "Anglais",
            spanish: "Espagnol",
            access: "Accessibilité",
        },
        achievements: {
            title: "Réalisations",
            enzymIco: "Intégration de la page ICO d'Enzym d'après maquette (ReactJS, Sass, Emotion)",
			enzymIcoImage: "enzym-ico-fr.png",
			enzymIcoPage: "ico.enzym.io",
            enzym: "Participation à la landing page enzym.io et à son back-office",
			enzymImage: "enzym-fr.png",
			enzymPage: "",
			groupomania: "MVP de réseau social d'entreprise façon Reddit (ReactJS - NodeJS - MySQL)",
            ohmyfood: "Page web mobile first en HTML et CSS à partir d'une maquette et d'un brief",
            cv: "Mon CV en ligne, en 3 langues, juste en HTML et CSS",
			cvHeader: "cv-header-fr.png",
            cvPage: "",
            webPage: "Page web",
            images: "Images",
        },
        experience: {
            title: "Expérience",
            items: [
                {
					title: "Kestio - depuis décembre 2021",
                    content: "Chargé des tests de non-régression (NR) projet agile :  écriture de tests automatisés (Jest), rédaction de procédures de tests NR sur la base de scénarios, organisation des tests NR, participation aux sessions de tests NR."
				},
                {
                    title: "Enzym - mai 2022",
                    content: "Intégration de la page ICO d'Enzym d'après maquette (ReactJS, Sass, Emotion)"
                },
                {
                    title: "Enzym - juil. 2021",
                    content: "Mises à jour de la landing page enzym.io"
                },
                {
                    title: "OpenClassrooms - juin 2021",
                    content: "Diplômé du titre professionnel de développeur web"
                },
                {
                    title: "Projet de fin de formation - mai 2021",
                    content: "Réalisation d'un MVP de réseau social d'entreprise (ReactJS, NodeJS, MySQL)"
                },
                // {
                //     title: "Projet de formation - sept. 2020",
                //     content: "Réalisation d'une page web en HTML et CSS"
                // },
                {
                    title: "Enzym - juin-nov. 2018",
                    content: "Travaux sur la landing page enzym.io"
                }
            ]
        },
        aboutMe: {
            title: "À propos de moi...",
            items: [
                {
                    imgName: "portrait.png",
                    title: "Portrait",
                    description: "écrit en 2018 par Pauline Rochette à l'occasion de ma première collaboration avec Enzym.",
                    linkUrl: "https://blog.enzym.io/2019/08/20/fred-developpeur-junior-mais-pas-que/",
                },
                {
                    imgName: "github.png",
                    title: "Compte GitHub",
                    description: "avec le code de différents projets et parfois la visualisation de leur rendu web via github-pages.",
                    linkUrl: "https://github.com/Ethnolatin"
                }
            ]
        },
    },

    EN: {
        navbar: {
            skills: "Skills",
            achievements: "Achievements",
            experience: "Experience",
            aboutMe: "About me",
        },
        header: {
            title: "Web Developer",
            std1: "Hello, my name is ",
            bold1: "Frédéric Duchesne",
            std2: ", I am a ",
            bold2: "Front-end Developer",
            std25: " and ",
            bold25: "Web Integrator",
            std3: ", with a good ",
            bold3: "experience of the challenges of a company",
            std4: " and used to work in an ",
            bold4: "international context",
            std5: ", available for ",
            bold5: "remote working",
            std6: " as an ",
            bold6: "employee or a freelance",
        },
        headerButtons: {
            email: "Send me an e-mail",
            cv: "See my CV",
            cvPage: "en.html",
        },
        slider: {
            part1: "I coded this portfolio in ",
            part2: "JavaScript (ReactJS) and CSS (Sass)",
            part3: "Code available on my GitHub account (see ",
            part4: '"About me"',
        },
        skills: {
            title1: "Skills",
            title2: "Notions",
            title3: "In progress...",
            english: "English",
            spanish: "Spanish",
            access: "Accessibility",
        },
        achievements: {
            title: "Achievements",
            enzymIco: "Integration of Enzym's ICO page according to a model (ReactJS, Sass, Emotion).",
			enzymIcoImage: "enzym-ico-en.png",
			enzymIcoPage: "ico.enzym.io/en",
            enzym: "Participation in the enzym.io landing page and its back-office",
			enzymImage: "enzym-en.png",
			enzymPage: "en",
			groupomania: "MVP of a Reddit-style corporate social network (ReactJS - NodeJS - MySQL)",
            ohmyfood: "Mobile first web page in HTML and CSS from a mockup and a brief",
            cv: "My CV online, in 3 languages, just in HTML and CSS",
			cvHeader: "cv-header-en.png",
			cvPage: "en.html",
            webPage: "Web page",
            images: "Images",
        },
        experience: {
            title: "Experience",
            items: [
				{
					title: "Kestio - Since December 2021",
                    content: "Non-regression (NR) tests manager in agile project: writing of automated tests (Jest), writing of NR test procedures based on scenarios, organization of NR tests, participation in NR test sessions."
				},
                {
                    title: "Enzym - May 2022",
                    content: "Integration of Enzym's ICO page according to a model (ReactJS, Sass, Emotion)"
                },
                {
                    title: "Enzym - July 2021",
                    content: "Updates of enzym.io landing page"
                },
                {
                    title: "OpenClassrooms - June 2021",
                    content: 'Graduated with the "Titre Professionnel" of web developer'
                },
                {
                    title: "End of training project - May 2021",
                    content: "Production of the MVP of a corporate social network (ReactJS, NodeJS, MySQL)"
                },
                // {
                //     title: "Training project - Sept. 2020",
                //     content: "Production of a web page with HTML and CSS"
                // },
                {
                    title: "Enzym - June-Nov. 2018",
                    content: "Works on enzym.io landing page"
                }
            ]
        },
        aboutMe: {
            title: "About me...",
            items: [
                {
                    imgName: "portrait.png",
                    title: "Portrait",
                    description: "written in 2018 by Pauline Rochette on the occasion of my first collaboration with Enzym (FR).",
                    linkUrl: "https://blog.enzym.io/2019/08/20/fred-developpeur-junior-mais-pas-que/",
                },
                {
                    imgName: "github.png",
                    title: "GitHub account",
                    description: "with the code of different projects and sometimes the visualization of their web rendering via github-pages.",
                    linkUrl: "https://github.com/Ethnolatin"
                }
            ]
        },
    },

    ES: {
        navbar: {
            skills: "Competencias",
            achievements: "Logros",
            experience: "Experiencia",
            aboutMe: "Acerca de mí",
        },
        header: {
            title: "Desarrollador Web",
            intro: "",
            std1: "Hola, me llamo ",
            bold1: "Frédéric Duchesne",
            std2: ", soy ",
            bold2: "desarrollador web",
            std3: ", con una buena ",
            bold3: "experiencia de los retos de una empresa",
            std4: " y acostumbrado a trabajar en un ",
            bold4: "contexto internacional",
            std5: ", disponible para una colaboración en ",
            bold5: "teletrabajo",
            std6: " que sea como ",
            bold6: "empleado o freelance",
        },
        headerButtons: {
            email: "Enviarme un Email",
            cv: "Ver mi CV",
            cvPage: "es.html",
        },
        slider: {
            part1: "Desarrollé este portafolio en ",
            part2: "JavaScript (ReactJS) y CSS (Sass)",
            part3: "Código disponible en mi cuenta GitHub (ver ",
            part4: '"Acerca de mí"',
        },
        skills: {
            title1: "Competencias",
            title2: "Nociones",
            title3: "En curso...",
            english: "inglés",
            spanish: "Español",
            access: "Accesibilidad",
        },
        achievements: {
            title: "Logros",
            enzymIco: "Integración de la página ICO de Enzym según modelo (ReactJS, Sass, Emotion).",
			enzymIcoImage: "enzym-ico-en.png",
			enzymIcoPage: "ico.enzym.io/en",
            enzym: "Participación en la landing page de Enzym.io y su back-office",
			enzymImage: "enzym-en.png",
			enzymPage: "en",
			groupomania: "MVP de una red social corporativa estilo Reddit (ReactJS - NodeJS - MySQL)",
            ohmyfood: "Página web mobile first en HTML y CSS a partir de una maqueta y un resumen",
            cv: "Mi CV online, en 3 idiomas, solo con HTML y CSS",
			cvHeader: "cv-header-en.png",
			cvPage: "es.html",
            webPage: "Página web",
            images: "Imágenes",
        },
        experience: {
            title: "Expérience",
            items: [
                {
                    title: "Enzym - jul. 2021",
                    content: "Actualizaciones de la página web enzym.io"
                },
                {
                    title: "OpenClassrooms - jun. 2021",
                    content: 'Graduado con el "Titre Professionnel" de desarrollador web'
                },
                {
                    title: "Proyecto de fin de formación - mayo 2021",
                    content: "Producción de un MVP de red social corporativa (ReactJS, NodeJS, MySQL)"
                },
                // {
                //     title: "Proyecto de formación - sept. 2020",
                //     content: "Producción de una página web en HTML y CSS"
                // },
                {
                    title: "Enzym - jun.-nov. 2018",
                    content: "Trabajos en la página web enzym.io"
                }
            ]
        },
        aboutMe: {
            title: "Acerca de mí...",
            items: [
                {
                    imgName: "portrait.png",
                    title: "Retrato",
                    description: "escrito en 2018 por Pauline Rochette con motivo de mi primera colaboración con Enzym (FR).",
                    linkUrl: "https://blog.enzym.io/2019/08/20/fred-developpeur-junior-mais-pas-que/",
                },
                {
                    imgName: "github.png",
                    title: "Cuenta GitHub",
                    description: "con el código de diferentes proyectos y, a veces, la visualización de su renderizado web a través de github-pages.",
                    linkUrl: "https://github.com/Ethnolatin"
                }
            ]
        },
    },
}
  
export default traductions;