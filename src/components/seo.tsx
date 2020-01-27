import React from "react"
import Meta from "./SEO/meta"
import Twitter from "./SEO/twitter"
import Facebook from "./SEO/facebook"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  title: string
  description: string
  keywords: any
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            socialMedia {
              twitter {
                twitterCard
                twitterTitle
                twitterDescription
                twitterSite
                twitterImage
              }
              facebook {
                facebookUrl
                facebookTitle
                facebookDescription
                facebookType
                facebookImage
              }
            }
          }
        }
      }
    `
  )
  const metaDescription = description || data.site.siteMetadata.description

  const {
    twitterTitle,
    twitterDescription,
    twitterCard,
    twitterSite,
    twitterImage,
  } = data.site.siteMetadata.socialMedia.twitter
  const {
    facebookUrl,
    facebookType,
    facebookTitle,
    facebookDescription,
    facebookImage,
  } = data.site.siteMetadata.socialMedia.facebook

  return (
    <>
      <Meta title={title} description={metaDescription} keywords={keywords} />

      <Twitter
        twitterCard={twitterCard}
        twitterTitle={twitterTitle}
        twitterDescription={twitterDescription}
        twitterImage={twitterImage}
        twitterSite={twitterSite}
      />
      <Facebook
        facebookUrl={facebookUrl}
        facebookType={facebookType}
        facebookTitle={facebookTitle}
        facebookDescription={facebookDescription}
        facebookImage={facebookImage}
      />
    </>
  )
}

export default SEO
