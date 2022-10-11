import Head from "next/head";
import React from "react";

import Navbar from "../ui/Navbar";

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Gabriel Barcelo" />
        <meta
          name={`description' content='Información sobre el Pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main className="px-[20px]">{children}</main>
    </>
  );
}

export default Layout;
