import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'SOOD' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"></link>
    </Head>
    {children}

    <style jsx global>{`
      body, html { 
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        background-color: gray
      }
    `}</style>
  </div>
    
)