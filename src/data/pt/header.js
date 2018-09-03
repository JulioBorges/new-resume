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
        simplifiedResume: 'Sou um <span>entusiasta em tecnologia</span>, atuo como ' +
        '<span>analista de sistemas e palestrante</span>, desenvolvendo, gerenciando ' +
        'e planejando sistemas voltados para automação móvel. Trabalho com análise e ' +
        'engenharia de sistemas desde 2009 desenvolvendo em plataformas móveis diversas. ' +
        'Não somente isso, mais também <span>desenvolvo aplicações WEB utilizando as ' +
        'mais novas tecnologias</span>. Achou interessante? Então' +
        '<a className="smoothscroll" href="#about"> comece a rolar a página</a> e veja mais' +
        '<a className="smoothscroll" href="#about"> sobre mim</a>.'
    }
};

export default header;