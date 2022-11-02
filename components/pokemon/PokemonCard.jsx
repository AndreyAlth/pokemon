import React from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

function PokemonCard({ name, id }) {
  const router = useRouter();


  const onCLick = () => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable={true} isPressable={true} onClick={onCLick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width="100%"
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
}

export default PokemonCard;
