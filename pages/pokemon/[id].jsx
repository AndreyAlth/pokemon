import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/Layout";
import pokeApi from "../../api/pokeApi";
import { Button, Card, Grid, Text } from "@nextui-org/react";

function PokemonPage({ pokemon }) {
  const router = useRouter();

  return (
    <Layout title={"pokemon"}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable={true} css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "./no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
              {console.log(pokemon)}
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={4}>
          <Card isHoverable={true} css={{ padding: "30px" }}>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button color="gradient" ghost>hi</Button>
            </Card.Header>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
}

export default PokemonPage;

export async function getStaticPaths(context) {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);
  // console.log(pokemons151)
  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const { data } = await pokeApi.get(`/pokemon/${id}`);
  console.log(data);
  return {
    props: {
      pokemon: data,
    },
  };
}
