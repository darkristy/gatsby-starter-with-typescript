import React from "react"
import Helmet from "react-helmet"

interface TwitterProps {
  twitterCard: string
  twitterSite: string
  twitterTitle: string
  twitterDescription: string
  twitterImage: string
}

const Twitter: React.FC<TwitterProps> = ({
  twitterCard,
  twitterSite,
  twitterTitle,
  twitterDescription,
  twitterImage,
}) => {
  return (
    <Helmet>
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />
    </Helmet>
  )
}

export default Twitter
