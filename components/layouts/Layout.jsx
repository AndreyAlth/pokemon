import Head from 'next/head'
import React from 'react'

function Layout({ children, title }) {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name='author' content='Gabriel Barcelo' />
        <meta name={`description' content='Información sobre el Pokemon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
    </Head>

    <main>
        {children}
    </main>

    </>
  )
}

export default Layout