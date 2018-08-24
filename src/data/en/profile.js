const profile = {
    name: 'John Doe',
    title: 'Desenvolvedor Full Stack, Desenvolvedor Mobile, Palestrante',
    mail: 'borges.juliocezar@gmail.com',
    phoneNumber: null,
    website: null,
    linkedin: 'https://goo.gl/cAjdg5',
    github: 'github.com/JulioBorges',
    imagePath: 'profile.png',
    twitter: null,
    educationDetails: {
        sectionTitle: 'Formação',
        list: [
            { name: 'Bacharel em Sistemas de Informação', school: 'Faculdade Pitágoras', date: '2007-2010' },
            { name: 'Técnico em Eletromecânica', school: 'CEFET - MG', date: '2001-2003' },
        ]
    },
    languages: {
        sectionTitle: 'Idiomas',
        list: [{ name: 'Português', level: 'Nativo' }, { name: 'English', level: 'Profissional' }, { name: 'Spanish', level: 'Iniciante' }]
    },
    interests: {
        sectionTitle: 'Interesses',
        list: ['TI', 'Música', 'Cozinha', 'Games']
    }
};

export default profile;