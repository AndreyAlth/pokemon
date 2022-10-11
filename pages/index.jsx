import { Button } from "@nextui-org/react";
import Layout from "../components/layouts/Layout";

export default function Home(props) {
  console.log(props)
  return (
    <Layout title='Listado de Pokemons'>
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  );
}

export async function getStaticProps(context) {
  console.log('hola mundo')
  return {
    props: {}, // will be passed to the page component as props
  }
}
