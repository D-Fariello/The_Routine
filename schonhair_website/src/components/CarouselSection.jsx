import React, { useState } from "react";

const photos = [
  "/images/075-foto.avif",
  "/images/066-foto.avif",
  "/images/010-foto.avif",
  "/images/017-foto.avif",
  "/images/018-foto.avif",
  "/images/125-foto.avif",
  "/images/013-foto.avif",
  "/images/063-foto.avif",
  "/images/015-foto.avif",
  "/images/077-foto.avif",
];

const CarouselSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % photos.length);
  const prev = () => setIndex((index - 1 + photos.length) % photos.length);

  return (
    <section id="carousel" className="carousel">
      <h2 className="carousel__title">Galleria Schonhair Beauty</h2>

      <div className="carousel__frame">
        <button onClick={prev}>‹</button>
        <img
          src={photos[index]}
          alt={`Foto ${index + 1}`}
          className="carousel__image"
        />
        <button onClick={next}>›</button>
      </div>
    </section>
  );
};

export default CarouselSection;
