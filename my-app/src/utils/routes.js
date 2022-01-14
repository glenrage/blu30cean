import App from "../App";
import BookDetails from "../components/pages/BookDetails/BookDetails.js";
import CharacterDetails from "../components/pages/CharacterDetails/CharacterDetails.js";

export const routes = [
  { path: "/", name: "home", Component: <App /> },
  { path: "/book-details", name: "book-details", Component: <BookDetails /> },
  {
    path: "/character-details",
    name: "character-details",
    Component: <CharacterDetails />,
  },
];
