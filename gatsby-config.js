module.exports = {
    siteMetadata: {
        title: "Julio Cezar Borges",
        author: "Julio Cezar Borges",
        description: "Meu currículo profissional desenvolvido utilizando Gatsby e Reactjs"
    },
    pathPrefix: "/",
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`librebaskerville`, `open sans`]
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 630
                        }
                    },
                    "gatsby-remark-copy-linked-files"
                ]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`
    ]
};
