import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/Layout";

function PokemonPage({ id, name }) {
  const router = useRouter();

  console.log(router);

  return (
    <Layout title={"pokemon"}>
      <h1>
        {id} - {name}
      </h1>
    </Layout>
  );
}

export default PokemonPage;

export async function getStaticPaths(context) {
  return {
    paths:[
      {
        params: {
          id: '1'
        },
        params: {
          id: '2'
        },
        params: {
          id: '3'
        }
      }
    ],
    fallback: false
  };
}

export async function getStaticProps(context) {
  /* const { data } = await pokeApi.get("/pokemon?limit=151"); */
  return {
    props: {
      id: 1,
      name: 'Bulbasur'
    },
  };
}
