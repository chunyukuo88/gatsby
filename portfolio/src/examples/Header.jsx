import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
    return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default Header;
