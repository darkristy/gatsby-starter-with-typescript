import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)
  const { description, title } = data.site.siteMetadata
  return (
    <Layout>
      <SEO title={title} description={description} keywords='' />
      <h1> Hello World</h1>
    </Layout>
  )
}

export default IndexPage
