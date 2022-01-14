import "./App.css";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Gallery from "./components/Gallery/Gallery.js";
import Layout from "./components/Layout/Layout.js";
import { sortItems } from "./utils/sortHelpers.js";
import { fetchGOTbookData } from "./utils/rest_helpers";

function App() {
  const [bookData, setBookData] = useState([]);
  const [shouldSort, setShouldSort] = useState(false);

  const handleClick = () => setShouldSort((shouldSort) => !shouldSort);

  useEffect(() => {
    async function fetch() {
      let bookResponse = await fetchGOTbookData();
      bookResponse = await bookResponse.json();

      setBookData(bookResponse);
    }

    fetch();
  }, []);

  return (
    <Layout>
      <div className="main">
        <Button onClick={handleClick}>Sort Alphabetically</Button>
        <Gallery
          books={
            shouldSort
              ? sortItems(bookData, "name")
              : sortItems(bookData, "name", "desc")
          }
        />
      </div>
    </Layout>
  );
}

export default App;
