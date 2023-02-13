import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./wolfy-hero.scss";

const tempJson = [
  {
    coverImg:
      "https://i.seadn.io/gcs/files/75990903e6844a5408ed8f9518275a67.jpg?auto=format&w=1920",
    faceImg:
      "https://i.seadn.io/gcs/files/ed88130f2bdc2d7b5538015e576de198.jpg?auto=format&w=1920",
    colectionName: "tiffatronn editions",
    colectionAuthor: "tiffatronn",
    floorPrice: "0.05",
    items: 16,
  },
  {
    coverImg: "https://cards.collecttrumpcards.com/cards/b5d38d302.jpg",
    faceImg:
      "https://i.seadn.io/gcs/files/4bbf53de963f24f668b785607a,3726b6.png?auto=format&w=256",
    colectionName: "DigiMonkz Genesis",
    isCollectionVerified: true,
    isAuthorVerified: true,
    colectionAuthor: "DigiMonkz_MINT",
    floorPrice: "0.006",
    item: 1000,
  },
  {
    colectionName: "ZenAcademy",
    coverImg:
      "https://i.seadn.io/gae/IaUEHOT78TUQ3SiinUGv829DeFVj7kht_kFMz2U6x6S6yxQlI_2V6KvSq9C25F5bxSi4gF8X0_Vbbigr17O-iDQiLhG9bXSyycnUJbQ?auto=format&w=1920",
    faceImg:
      "https://i.seadn.io/gae/fKKKLv31-nHRbNoecVUU_DUsOy5pVHWykO8vUgcCPjIMGVtYMSSzQ2OOqINiccnmIWN-E5rkQFrHFmKh5mcLlDf_x1aSnRWWnqNC9dQ?auto=format&w=256",
    colectionName: "ZenAcademy",
    isCollectionVerified: true,
    isAuthorVerified: true,
    floorPrice: "0.03",
    items: 1500,
    colectionAuthor: "ZenAcademyDeployer",
  },

  {
    faceImg: "https://i.seadn.io/gcs/files/06a07158febfe5dded5c2e13e4cac214.gif?auto=format&w=1920",
    coverImg: "https://i.seadn.io/gcs/files/3d34cef09b4043aa12bce1bed65ebdff.png?auto=format&w=1920",
    colectionName: "Pirate Nation - Items",
    colectionAuthor: "ProofofPlay",
    isAuthorVerified: true,
    isCollectionVerified: true,
    items: 64,
    floorPrice: "0.004"


  },
  {
    coverImg: "https://i.seadn.io/gcs/files/0727d6a53b2b266e9b4bb471ba9c3ae1.jpg?auto=format&w=1920",
    faceImg: "https://i.seadn.io/gcs/files/9515d56f17653c4a275e319be04fa7cd.jpg?auto=format&w=1920",
    colectionName: "Rumble Kong League",
    colectionAuthor: "RKL-Kongs-Deployer",
    isAuthorVerified: true,
    isAuthorVerified: true,
    items: 10000,
    floorPrice: "0.001"


  }

];

export default () => {
  return (
    <div className="wolfy-hero">
      <h4>Swiper</h4>
      <Swiper
        // install Swiper modules
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};
