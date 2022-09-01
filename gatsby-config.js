require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `bookstore`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-source-harperdb`,
    options: {
      secret: process.env.HARPER_DB_SECRET_KEY,
      url: process.env.HARPER_DB_URL,
      payload: {
        "operation": "sql",
        "sql":"SELECT * FROM library.book"
      },
      type: "books"
    },
  },
]
};