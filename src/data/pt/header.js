const header = {
    navigation: {
        menuItens: [
            { id: 1, text: 'Home', class: 'current', url: '#' },
            { id: 2, text: 'Sobre', class: '', url: '#about' },
            { id: 3, text: 'Currículo', class: '', url: '#resume' },
            //{ id: 4, text: 'Trabalhos', class: '', url: '#portfolio' },
            { id: 4, text: 'English', class: '', url: 'en' }
        ]
    },
    banner: {
        name: 'Julio Borges',
        simplifiedResume: 'Sou um <span>entusiasta em tecnologia</span>, atualmente trabalho como ' +
            '<span>desenvolvedor Full Stack Sênior</span>. Também sou palestrante em vários eventos ' +
            'de tecnologia pelo Brasil. Achou interessante? Então' +
            '<a className="smoothscroll" href="#about"> comece a rolar a página</a> e veja mais' +
            '<a className="smoothscroll" href="#about"> sobre mim</a>.'
    }
};

export default header;