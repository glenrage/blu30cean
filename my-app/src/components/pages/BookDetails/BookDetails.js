import "./BookDetails.css";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { useLocation, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Layout from "../../Layout/Layout.js";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs.js";
import { sortItems } from "../../../utils/sortHelpers.js";

const BookDetails = () => {
  const location = useLocation();

  const [characterData, setCharacterData] = useState(null);
  const [shouldSort, setShouldSort] = useState(false);
  const { data } = location.state;

  const handleClick = () => setShouldSort((shouldSort) => !shouldSort);

  const fetchData = async () => {
    try {
      const response = await Promise.all(
        data.povCharacters.map((url) => fetch(url).then((res) => res.json()))
      );
      if (response) setCharacterData(response);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const sortedCharacters = characterData
    ? shouldSort
      ? sortItems(characterData, "name")
      : sortItems(characterData, "name", "desc")
    : null;

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Container>
        <BreadCrumbs />
        <Button onClick={handleClick}>Sort Characters</Button>

        <Card className="detail-card">
          <h1>{data.name}</h1>
          <div className="content">
            <div className="detail-column">
              <h2>Book Details</h2>
              <p>Authors - {data.authors[0]}</p>
              <p>Country - {data.country}</p>
              <p>Publisher - {data.publisher}</p>
              <p>Number of Pages - {data.numberOfPages}</p>
              <p>ISBN - {data.isbn}</p>
            </div>
            <div className="character-column">
              <h2>Characters</h2>
              <div className="character-box">
                {characterData
                  ? sortedCharacters.map((character) => {
                      return (
                        <div key={character.url}>
                          <Link to={"/character-details"} state={{ character }}>
                            <Button
                              variant="outlined"
                              size="small"
                              sx={{ margin: 1, color: "#007bff" }}
                            >
                              <h2>{character.name}</h2>
                            </Button>
                          </Link>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </Layout>
  );
};

export default BookDetails;
