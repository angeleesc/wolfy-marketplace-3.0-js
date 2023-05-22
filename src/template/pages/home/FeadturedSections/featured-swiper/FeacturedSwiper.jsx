import React from "react";
import "./feactures-swiper.scss";

export default function FeacturedSwiper({ data, loading, title, query = {} }) {
  const loadingPlace = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const init = async ()=>{
    
  }

  return (
    <section className="feactured-section">{title && <h3>{title}</h3>}</section>
  );
}
