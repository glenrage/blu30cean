import React from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { useLocation } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Layout from "../../Layout/Layout.js";
import Typography from "@mui/material/Typography";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs.js";
import "./CharacterDetails.css";

const CharacterDetails = () => {
  const location = useLocation();
  const { character } = location.state;

  return (
    <Layout>
      <Container>
        <BreadCrumbs />
        <Card className="character-card">
          <CardContent>
            <Typography variant="h5" component="div">
              {character.name}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Aliases -{" "}
              {character.aliases.map((item) => {
                return <span key={item}> {`${item}, `}</span>;
              })}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Born - {character.born}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Culture - {character.culture}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Gender - {character.gender}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Featured in -{" "}
              {character.tvSeries.length
                ? character.tvSeries.map((item) => {
                    return <div key={item}> {`${item} `}</div>;
                  })
                : null}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
};

export default CharacterDetails;
