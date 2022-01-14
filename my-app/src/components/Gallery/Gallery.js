import BookCard from "../BookCard/BookCard.js";
import React from "react";

const Gallery = ({ books }) => {
  return (
    <div className="gallery">
      {books.length
        ? books.map((item) => {
            return <BookCard key={item.isbn} data={item} />;
          })
        : null}
    </div>
  );
};

export default Gallery;
