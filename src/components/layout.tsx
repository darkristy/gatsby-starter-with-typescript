import React, { ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import GlobalStyles from '../utils/global-styles'
import { Global } from '@emotion/core'

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
      <Global styles={GlobalStyles} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
    </>
  )
}

export default Layout
