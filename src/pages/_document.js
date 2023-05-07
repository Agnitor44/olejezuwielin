import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
     <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Oleje z Uwielin to lokalna firma oferująca szeroką gamę wysokiej jakości olejów roślinnych." />
        <title>Oleje z Uwielin</title>
        <link rel="canonical" href="https://www.olejezuwielin.pl/" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Oleje z Uwielin - lokalna firma oferująca szeroką gamę olejów roślinnych" />
        <meta property="og:description" content="Oleje z Uwielin to lokalna firma oferująca szeroką gamę wysokiej jakości olejów roślinnych." />
        <meta property="og:image" content="https://www.olejezuwielin.pl/images/olejezUwielin.jpg" />
        <meta property="og:url" content="https://www.olejezuwielin.pl/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "http://schema.org",
              "@type": "WebSite",
              "url": "https://www.olejezuwielin.pl/",
              "name": "Oleje z Uwielin",
              "description": "Oleje z Uwielin to lokalna firma oferująca szeroką gamę wysokiej jakości olejów roślinnych."
            }
          `
        }} />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
