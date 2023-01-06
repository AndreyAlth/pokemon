import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/Layout";
import pokeApi from "../../api/pokeApi";
import { Button, Card, Grid, Text, Container, Image } from "@nextui-org/react";
import { localFavorites } from "../../utils";

function PokemonPage({ pokemon }) {
  const router = useRouter();
  const [isInFavorites, setIsInFavorites] = useState(() =>
    localFavorites.existInFavotire(pokemon.id)
  );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites)
  };

  useEffect(() => {
    console.log(localStorage.getItem("favorites"));
  }, []);

  return (
    <Layout title={pokemon.name}>
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
              <Button
                onClick={onToggleFavorite}
                color="gradient"
                // ghost={!isInFavorites}
              >
                {isInFavorites ? "En Favoritos" : "Guardar en favoritos "}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container display="flex" direction="row">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
}

export default PokemonPage;

export async function getStaticPaths(context) {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);
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
  return {
    props: {
      pokemon: data,
    },
  };
}
