import React from "react";
import "./profile-header.scss"

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
      <div className="profile-header-body">
        <div className="cover-section">
          <img src={userData.coverImage} alt="urese-profile-cover-image" />
        </div>
      </div>
    </div>
  );
}
