const header = {
    navigation: {
        menuItens: [
            { text: 'Home', class: 'current', url: '#' },
            { text: 'Sobre', class: '', url: '#about' },
            { text: 'Currículo', class: '', url: '#resume' },
            { text: 'Trabalhos', class: '', url: '#portfolio' },
            { text: 'English', class: '', url: 'en' }
        ]
    },
    banner: {
        name: 'Julio Borges',
        simplifiedResume: 'Sou um <span>entusiasta em tecnologia</span>, atuamente trabalho como ' +
            '<span>desenvolvedor Full Stack Mobile</span>. Também sou palestrante em vários eventos ' +
            'de tecnologia pelo Brasil. Achou interessante? Então' +
            '<a className="smoothscroll" href="#about"> comece a rolar a página</a> e veja mais' +
            '<a className="smoothscroll" href="#about"> sobre mim</a>.'
    }
};

export default header;