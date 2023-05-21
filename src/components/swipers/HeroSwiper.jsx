import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./wolfy-hero.scss";
// import "swiper/css/navigation";
import { useCallback, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Navigation } from "swiper";
import { useWeb3Context } from "../../context/Web3ContextProvider";

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
    coverImg: "https://i.seadn.io/gae/M6n1g9yMPXieDpFP0Y_Q2b9oOkpHSBX2xh4L6OpRwSkqrQ0rAws7GM6nnCN333synVOlJXQiojzGrzCEXH0TWTgrDw_ipZS7VHMAK9w?auto=format&w=1920",
    faceImg:
      "https://i.seadn.io/gae/oyEO1RajjrJuCYtbXX9Oa3FhoRvX5BO_TkFc8PTUkN5egJwFG2mlM0lRl7zuOvBj_HciCY35D4exJm0b3DZya6qxpyhk0aBN7oCH?auto=format&w=256",
    colectionName: "Impostors Genesis Aliens",
    isCollectionVerified: true,
    isAuthorVerified: true,
    colectionAuthor: "DigiMonkz_MINT",
    floorPrice: "0.006",
    item: 1000,
  },
  {

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

    items: 10000,
    floorPrice: "0.001"


  },
  {
    coverImg: "https://i.seadn.io/gcs/files/0f490fe5ff953443a16823343dacce31.jpg?auto=format&w=1920",
    faceImg: "https://i.seadn.io/gcs/files/bde660047ec7e69ee6b74174d63cf1ff.gif?auto=format&w=256",
    colectionName: "Meka Drivers",
    colectionAuthor: "MekaVerse",
    items: 8888,
    floorPrice:"0.5",
    isCollectionVerified: true,
    isAuthorVerified: true


  }

];

export default () => {

  // const prevButtonRef = useRef(null)

  // const nextButtonRef = useRef(null)
  const [curretbgIndex, setCurretbgIndex] = useState(0)
  
  
  const slideRef = useRef(null)



  const handlePref = useCallback(() => {

    if (!slideRef.current) return;
    slideRef.current.swiper.slidePrev()

  })

  const handleNext = useCallback(() => {


    if (!slideRef.current) return;
    slideRef.current.swiper.slideNext()


  })


  return (
    <div className="wolfy-hero">
      <img className="wolfy-hero-cover-bg-image" src={tempJson[curretbgIndex].coverImg} alt="" />
      <div className="wolfy-blur-fillter" ></div>
      <div className="w-swiper-box">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          ref={slideRef}
          onSwiper={(swiper) => {
            // console.log(swiper)

          }}
          onSlideChange={(swiper) => {
            console.log("slide change")
            console.log(swiper.realIndex)
            setCurretbgIndex(swiper.realIndex)
          }
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
                    <div className="cover-filter" ></div>
                    <img className="cover-img" src={collitem.coverImg} alt={"hero-img-" + i} />
                    <div className="collection-item-info-area" >

                      <div className="w-face-ing-zone" >
                        <img src={collitem.faceImg} alt={"hero-face-img" + i} />
                      </div>
                      <h2>{collitem.colectionName}</h2>
                      <h3>Creado por : {collitem.colectionAuthor}</h3>
                      <div className="flex" >
                        <h6>{collitem.items} articulos desde {collitem.floorPrice} eth</h6>
                      </div>
                      <button className="w-glass-butom mt-3" >
                        <span>Ver Colecion</span>
                      </button>
                    </div>


                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        <button className="wolf-chevron wolf-chevron-left" onClick={handlePref} > <HiChevronLeft /> </button>
        <button className="wolf-chevron wolf-chevron-right" onClick={handleNext} ><HiChevronRight /> </button>
      </div>
    </div>
  );
};
