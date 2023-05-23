import React from "react";
import "./nft-card-v2.scss"
import { Skeleton } from "@mui/material";

export default function NffCardV2({ data, loading }) {
  return loading ? (
    <div className="laoding-card">
      <div className="img-skeletor" >
        
      </div>
    </div>
  ) : (
    <div></div>
  );
}
