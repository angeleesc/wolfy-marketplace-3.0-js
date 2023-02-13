import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./wolfy-hero.scss";
// import "swiper/css/navigation";
import { Navigation } from "swiper";
import ButoonNavigation from "./ButoonNavigation";
import { useCallback, useRef } from "react";

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

  // const prevButtonRef = useRef(null)
  // const nextButtonRef = useRef(null)

  const slideRef = useRef(null)

  const handlePref = useCallback(() => {

    if (!slideRef.current) return;
    slideRef.current.swiper.slidePrev()

  }, [])

  const handleNext = useCallback(() => {


    if (!slideRef.current) return;
    slideRef.current.swiper.slideNext()


  })


  return (
    <div className="wolfy-hero">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // modules={[Navigation , ButoonNavigation]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        ref={slideRef}
        onSwiper={(swiper) => {
          console.log(swiper)
        }}
        onSlideChange={() => console.log("slide change")
        }
        loop



      >
        {
          tempJson.map((collitem, i) => {
            return (
              <SwiperSlide
                className="collection-container"
                key={"hero-wolfy-" + i}

              >
                <div className="collection-item" >
                  <img className="cover-img" src={collitem.coverImg} alt={"hero-img-" + i} />
                </div>
              </SwiperSlide>
            )
          })
        }

        <button className="z-10" onClick={handlePref} >anterior </button>
        <button onClick={handleNext} >siguiente </button>

      </Swiper>
    </div>
  );
};
