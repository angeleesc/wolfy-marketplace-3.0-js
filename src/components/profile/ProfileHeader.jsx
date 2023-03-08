import React from "react";
import "./profile-header.scss";
import {FaInstagram, FaFacebook, } from "react-icons/fa"


const tempJson = {
  userName: "Angel xd",
  user: "0x23b057357893Fb958571f81197823D6B1e84d64f",
  seguidores: 200,
  sguidos: 200,
  visitas: 15,

  socialContact: [
    {
      socialName: "instagram",
      userName: "angelsplayxd",
      verified: true,
    },
    {
      socialName: "facebook",
      userName: "Angel Sanchez",
      verified: "true",
    },
    {
      socialName: "twitter",
      userName: "angeleesc",
      verified: true,
    },
    {
      socialName: "discord",
      verified: true,
      userName: "angelxdplus",
    },
    {
        socialName: "behance",
        verified: true,
        userName: "angel creative"
    }
  ],
  avatarPhoto:
    "https://storage.googleapis.com/histories/325227351_157039013782665_5232836476363926556_n.jpg",
  coverImage: "https://storage.googleapis.com/histories/785.jpg",
};


const SocialIconRender =({icons})=>{



}

export default function ProfileHeader() {
  const userData = tempJson;

  return (
    <div className="profile-header-conainer">
      <div className="profile-bg">
        <img src={userData.coverImage} alt="cover-bg-image" />
        <div className="cover-blur-gradien"></div>
      </div>
      <div className="profile-header-body">
        <div className="cover-section">
          <img src={userData.coverImage} alt="user-profile-cover-image" />
          {/* <div className="avatar-section">
            <img src={userData.avatarPhoto} alt="user-profile-avata0image" />
          </div> */}
        </div>
        <div className="profile-body-info">
          <div className="avatar-box">
            <div className="avatar-section-img">
              <img src={userData.avatarPhoto} alt="avatar-profile" />
            </div>
            <div className="user-name-id-section">
              <h3 className="text-[24px] font-bold  text-wolf-gray-light-1800 ">
                {userData.userName ? userData.userName : "Anonimous"}
              </h3>
              <h4 className="text-[12px] text-wolf-gray-light-1000 ">{`${userData.user.substring(
                0,
                10
              )}...${userData.user.substr(-10)}`}</h4>
            </div>
          </div>
          <div className="follow-section-box">
            <div className="follow-section-item">
              <h3>{userData.seguidores}</h3>
              <span>Seguidores</span>
            </div>
            <div className="follow-section-item">
              <h3>{userData.sguidos}</h3>
              <span>Seguidos</span>
            </div>
          </div>

          {userData.socialContact && Array.isArray(userData.socialContact) && (
            <div className="social-contact-section-box">
              {userData.socialContact.map((socialN, i) => {
                return <div className="social-n-item">

                </div>;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
// `${seller.substring(0, 5)}...${seller.substr(-5)}`}
