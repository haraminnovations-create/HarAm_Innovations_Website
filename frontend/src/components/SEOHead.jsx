import { Helmet } from 'react-helmet-async'

export default function SEOHead({ title, description, image, url }) {
  const siteName = 'HarAm Innovations'
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — Games · Research Papers · Education`
  const metaDesc  = description || 'HarAm Innovations builds innovative products in Games, Research, and Education. Shaping a better tomorrow through technology.'
  const metaImg   = image || '/og-image.png'
  const metaUrl   = url   || 'https://www.heraminnovations.com'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image"       content={metaImg} />
      <meta property="og:url"         content={metaUrl} />
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={siteName} />
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image"       content={metaImg} />
      <link rel="canonical" href={metaUrl} />
    </Helmet>
  )
}
