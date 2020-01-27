import React from "react"
import Helmet from "react-helmet"

interface FacebookProps {
  facebookUrl: string
  facebookDescription: string
  facebookImage: string
  facebookType: string
  facebookTitle: string
}

const Facebook: React.FC<FacebookProps> = ({
  facebookUrl,
  facebookType,
  facebookTitle,
  facebookDescription,
  facebookImage,
}) => {
  return (
    <Helmet>
      <meta property="og:url" content={facebookUrl} />
      <meta property="og:type" content={facebookType} />
      <meta property="og:title" content={facebookTitle} />
      <meta property="og:description" content={facebookDescription} />
      <meta property="og:image" content={facebookImage} />
    </Helmet>
  )
}

export default Facebook
