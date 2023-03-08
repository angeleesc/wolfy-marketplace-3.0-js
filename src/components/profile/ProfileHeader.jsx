import React from "react";
import "./profile-header.scss";
import {
  FaInstagram,
  FaFacebook,
  FaBehance,
  FaTwitch,
  FaTwitter,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
import { socialNetworks } from "../../helpers/global-constants";

const tempJson = {
  userName: "Angel xd",
  user: "0x23b057357893Fb958571f81197823D6B1e84d64f",
  seguidores: 200,
  sguidos: 200,
  visitas: 15,

  socialContact: [
    {
      socialName: socialNetworks.instagram,
      userName: "angelsplayxd",
      verified: true,
      url: "https://www.google.com/",
    },
    {
      socialName: socialNetworks.facebook,
      userName: "Angel Sanchez",
      verified: "true",
      url: "https://www.google.com/",
    },
    {
      socialName: socialNetworks.twitter,
      userName: "angeleesc",
      verified: true,
      url: "https://www.google.com/",
    },
    {
      socialName: socialNetworks.discord,
      verified: true,
      userName: "angelxdplus",
      url: "https://www.google.com/",
    },
    {
      socialName: socialNetworks.behance,
      verified: true,
      userName: "angel creative",
      url: "https://www.google.com/",
    },
    {
      socialName: socialNetworks.twitch,
      verified: true,
      userName: "angelonlinexd",
      url: "https://www.google.com/",
    },
    {
      socialName: socialNetworks.youtube,
      verified: true,
      userName: "angelSplay",
      url: "https://www.google.com/",
    },
  ],
  avatarPhoto:
    "https://storage.googleapis.com/histories/325227351_157039013782665_5232836476363926556_n.jpg",
  coverImage: "https://storage.googleapis.com/histories/785.jpg",
};

const SocialIconRender = ({ icons = socialNetworks.facebook }) => {
  const DefIcon = {
    [socialNetworks.behance]: FaBehance,
    [socialNetworks.youtube]: FaYoutube,
    [socialNetworks.discord]: FaDiscord,
    [socialNetworks.facebook]: FaFacebook,
    [socialNetworks.twitch]: FaTwitch,
    [socialNetworks.behance]: FaBehance,
    [socialNetworks.twitter]: FaTwitter,
    [socialNetworks.instagram]: FaInstagram
  };

  const RenderIconDef = DefIcon[icons];

  return <RenderIconDef />;
};

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
                console.log(socialN.socialName);

                return (
                  <div className="social-n-item" key={"social-n-" + i}>
                    <span>
                      <SocialIconRender icons={socialN.socialName} />
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
// `${seller.substring(0, 5)}...${seller.substr(-5)}`}
