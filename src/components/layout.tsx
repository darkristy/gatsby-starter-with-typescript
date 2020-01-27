import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import GlobalStyles from "../styles/global-styles"
import { ThemeProvider } from "styled-components"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = {}
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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
