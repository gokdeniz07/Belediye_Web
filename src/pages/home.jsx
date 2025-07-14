
// src/pages/home.jsx
import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
  return (
     <div className="p-0 m-0">
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>

<div className="carousel-inner">
  <div className="carousel-item active" data-bs-interval="5000">
    <img
      src="/photo/slider1.jpg"
      className="d-block w-100"
      alt="Slide 1"
      style={{ height: "750px", objectFit: "cover" }}
    />
    <div className="carousel-caption d-none d-md-block">
    </div>
  </div>

  <div className="carousel-item" data-bs-interval="5000">
    <img
      src="/photo/slider2.jpg"
      className="d-block w-100"
      alt="Slide 2"
      style={{ height: "750px", objectFit: "cover" }}
    />
    <div className="carousel-caption d-none d-md-block">
    </div>
  </div>

  <div className="carousel-item" data-bs-interval="5000">
    <img
      src="/photo/slider3.jpg"
      className="d-block w-100"
      alt="Slide 3"
      style={{ height: "750px", objectFit: "cover" }}
    />
    <div className="carousel-caption d-none d-md-block">
    </div>
  </div>

  <div className="carousel-item" data-bs-interval="5000">
    <img
      src="/photo/slider4.jpg"
      className="d-block w-100"
      alt="Slide 4"
      style={{ height: "750px", objectFit: "cover" }}
    />
    <div className="carousel-caption d-none d-md-block">
    </div>
  </div>

  <div className="carousel-item" data-bs-interval="5000">
    <img
      src="/photo/slider5.jpg"
      className="d-block w-100"
      alt="Slide 5"
      style={{ height: "750px", objectFit: "cover" }}
    />
    <div className="carousel-caption d-none d-md-block">
    </div>
  </div>

  <div className="carousel-item" data-bs-interval="5000">
    <img
      src="/photo/slider6.jpg"
      className="d-block w-100"
      alt="Slide 6"
      style={{ height: "750px", objectFit: "cover" }}
    />
    <div className="carousel-caption d-none d-md-block">
    </div>
  </div>
</div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Önceki</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Sonraki</span>
        </button>
      </div>
    </div>
  );
}

export default Home; 
