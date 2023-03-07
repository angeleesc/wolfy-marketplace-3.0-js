import React from "react";
import "./profile-header.scss";

const tempJson = {
  userNane: "angel xd",
  user: "0x23b057357893Fb958571f81197823D6B1e84d64f",
  seguidores: 200,
  sguidos: 200,
  visitas: 15,
  instagram: "angelscxd",
  discord: "angeleesc",
  facebokk: "angel sanchez",
  avatarPhoto:
    "https://storage.googleapis.com/histories/325227351_157039013782665_5232836476363926556_n.jpg",
  coverImage: "https://storage.googleapis.com/histories/785.jpg",
};

export default function ProfileHeader() {
  const userData = tempJson;

  return (
    <div className="profile-header-conainer">
      <div className="profile-bg">
        <img src={userData.coverImage} alt="cover-bg-image" />
        <div className="cover-blur-gradien" ></div>
      </div>
      <div className="profile-header-body">
        <div className="cover-section">
          <img src={userData.coverImage} alt="user-profile-cover-image" />
          <div className="avatar-section">
            <img src={userData.avatarPhoto} alt="user-profile-avata0image" />
          </div>
        </div>
      </div>
    </div>
  );
}
