import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
