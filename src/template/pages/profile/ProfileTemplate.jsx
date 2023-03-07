import React from "react";
import ProfileHeader from "../../../components/profile/ProfileHeader";
import ProfileExplorer from "../../../components/profile/ProfileExplorer";

export default function ProfileTemplate() {
  return (
    <div className="mt-[60px] px-[30px]">
      <ProfileHeader />
      <ProfileExplorer />
    </div>
  );
}
