const resume = {
    education: {
        title: 'Formação',
        formation: [
            {
                school: 'Faculdade Pitágoras',
                course: 'Sistemas de informação',
                date: '12/2010',
                description: 'Bacharelado em sistemas de informação.'
            },
            {
                school: 'CEFET - MG',
                course: 'Técnico em Eletromecânica',
                date: '12/2003',
                description: 'Curso técnico em eletromecânica. Um dos mais conceituados ' +
                    'cursos da área na cidade de Divinópolis/MG.'
            }
        ]
    },
    work: {
        title: 'Experiência',
        roles: [
            {
                id: 1,
                company: 'Inovação Computação Móvel',
                role: 'Desenvolvedor FullStack',
                period: '2016 - presente',
                roleDescription: 'Desenvolvimento de aplicações móveis para Android usando Java e Kotlin, bem ' +
                    'como todo o ecossistema para o funcionamento das aplicações, incluindo aplicações ' +
                    'Desktop desenvolvidas em C#, aplicações Web desenvolvidas utilizando AngularJS e ' +
                    'desenvolvimento de APIs utilizando as tecnologias de Web Api .NET Framework e .NET Core.'
            },
            {
                id: 2,
                company: 'Inovação Computação Móvel',
                role: 'Analista desenvolvedor Pleno, Sênior',
                period: '2012 - 2016',
                roleDescription: 'Desenvolvimento de aplicações móveis usando Java e Kotlin aplicações mobile Android. ' +
                    'Análise, manutenção e desenvolvimento de aplicações Móveis Windows Mobile com a linguagem C#, utilizando ' +
                    'a plataforma Compact Framework. Análise, desenvolvimento e manutenção de aplicações Desktop desenvolvidas ' +
                    'utilizando a plataforma .NET e a linguagem C#.'
            },
            {
                id: 3,
                company: 'Inovação Computação Móvel',
                role: 'Analista desenvolvedor júnior',
                period: '2009 - 2012',
                roleDescription: 'Desenvolvimento de aplicações móveis para dispositivos PalmOS (Pascal), Windows Mobile(C#) e concepção ' +
                    'e migração de aplicações PalmOS e Windows Mobile para Android. Desenvolvimento e manutenção de aplicações ' +
                    'Desktop utilizando a linguagem Pascal, utilizando Delphi 7'
            },
            {
                id: 4,
                company: 'Inovação Computação Móvel',
                role: 'Analista desenvolvedor júnior',
                period: '2009 - 2012',
                roleDescription: 'Desenvolvimento de aplicações móveis para dispositivos PalmOS (Pascal), Windows Mobile(C#) e concepção ' +
                    'e migração de aplicações PalmOS e Windows Mobile para Android. Desenvolvimento e manutenção de aplicações ' +
                    'Desktop utilizando a linguagem Pascal, utilizando Delphi 7'
            }]
    },
    skills: {
        title: "Competências",
        text: "Abaixo veja detalhadamente as competências das quais sou especialista.",
        skills: [
            {
                id: 1,
                name: "C#",
                width: "90%"
            },
            {
                id:2,
                name: "Java",
                width: "80%"
            },
            {
                id:3,
                name: "Kotlin",
                width: "60%"
            }
        ]
    }
};

export default resume;