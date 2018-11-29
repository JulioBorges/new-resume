const header = {
    navigation: {
        menuItens: [
            { id: 1, text: 'Home', class: 'current', url: '#' },
            { id: 2, text: 'About', class: '', url: '#about' },
            { id: 3, text: 'Resume', class: '', url: '#resume' },
            //{ id: 4, text: 'Work', class: '', url: '#portfolio' },
            { id: 4, text: 'Português', class: '', url: '..' }
        ]
    },
    banner: {
        name: 'Julio Borges',
        simplifiedResume: 'I am a <span>tech enthusiast</span>, currently working as ' +
            'a <span>Full Stack Mobile developer</span>. I am also a <span>speaker at ' +
            'several technology events in Brazil</span>. Did you find it interesting? ' +
            '<a className="smoothscroll" href="#about">So start <span>scrolling the page<span></a> and see more ' +
            '<a className="smoothscroll" href="#about"><span>about me</span></a>.'
    }
};

export default header;