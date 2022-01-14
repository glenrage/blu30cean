import React from "react";
import Container from "@mui/material/Container";
import "./Layout.css";

function Layout({ children }) {
  return (
    <Container
      maxWidth="xl"
      className="main"
    >
      <h1>GAME OF THRONES BOOKS COLLECTION</h1>
      {children}
    </Container>
  );
}

export default Layout;
