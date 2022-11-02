import { Grid } from "@nextui-org/react";
import { pokeApi } from "../api";
import Layout from "../components/layouts/Layout";
import PokemonCard from "../components/pokemon/PokemonCard";

export default function Home({ pokemons }) {
  console.log(pokemons);
  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map(({ id, name, img }) => {
          return <PokemonCard key={id} id={id} name={name} />
        })}
      </Grid.Container>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { data } = await pokeApi.get("/pokemon?limit=151");
  const pokemonsComplete = data.results.map((pokemon, index) => {
    return {
      ...pokemon,
      id: index + 1,
      url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`,
    };
  });
  return {
    props: {
      pokemons: pokemonsComplete,
    },
  };
}
