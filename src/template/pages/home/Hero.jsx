import React, { useCallback, useRef, useState } from "react";
import "./wolf-hero-v2.scss";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import WolfSwiperSlide from "./wolfSwiperSlide";
import {
  requestEndPoints,
  rootApipaht,
} from "../../../helpers/global-constants";
import axios from "axios";
import { useEffect } from "react";
import { Skeleton } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// esta seccion esta dividido de dos formas
// colleciones destacadas
// en el tab sra de categoria
// nfts destacadas
// la nft con la oferta mas alta
// la nft recien egregaga
// la nft mas carra
// la nft mas barata

export default function Hero() {
  const [loadind, setLoadind] = useState(true);
  const [heroData, setHeroData] = useState([]);
  const [curretbgIndex, setCurretbgIndex] = useState(0)

  const slideRef = useRef(null);

  const init = async () => {
    // const endpoint = rootApipaht.local + requestEndPoints.firebase.GetHeroData;
    const endpoint =
      rootApipaht.porduction + requestEndPoints.firebase.GetHeroData;

    const result = await axios.get(endpoint);
    // console.log(result.data);

    setLoadind(false);
    setHeroData(result.data.heroData);
    // setHeroData(result.data.heroData);
  };

  const handlePref = useCallback(() => {
    if (!slideRef.current) return;
    slideRef.current.swiper.slidePrev();
  });

  const handleNext = useCallback(() => {
    if (!slideRef.current) return;
    slideRef.current.swiper.slideNext();
  });

  useEffect(() => {
    init();
  }, []);



  return (
    <div className="wolf-hero-v2">

      {
        heroData.length > 0 && heroData[0].metadata && heroData[0].metadata.image && <div className="hero-cover-bg" >
         <img src={heroData[0].metadata.image} alt="" />
        </div>
      }

      <section className="swiper-section">
        <div className="hero-swiper-section-tab-menu">
          <button className="hero-swiper-button-active">
            <h3>Nfts</h3>
          </button>
          <button>
            <h3>Arte</h3>
          </button>
          <button>
            <h3>Gaming</h3>
          </button>
        </div>
        <div className="wolf-v2-swiper-box">
          {loadind ? (
            <div className="hero-loading-section w-[100%] h-[100%]">
              <Skeleton
                variant="rectangular"
                animation="wave"
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          ) : heroData.length > 0 ? (
            <>
              <button
                className="wolf-v2-swiper-button wolf-v2-swiper-button-left"
                onClick={handlePref}
              >
                <FaChevronLeft />
              </button>
              <button
                className="wolf-v2-swiper-button wolf-v2-swiper-button-right"
                onClick={handleNext}
              >
                <FaChevronRight />
              </button>
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={(swipe) =>{ 
                  // console.log(swipe)
                  setCurretbgIndex(swipe.realIndex)
                }}
                onSwiper={(swiper) => console.log(swiper)}
                ref={slideRef}
                loop
                className="h-[100%] rounded-[16px]"
              >
                {heroData.map((heroFeatured, i) => {
                  return (
                    <SwiperSlide
                      key={"wolf-hero-feautred-" + i}
                      style={{
                        height: "100%",
                      }}
                      // className="w"
                    >
                      <WolfSwiperSlide data={heroFeatured} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </>
          ) : (
            <div className="error-section">
              <h3>Sin resultados destacados</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
