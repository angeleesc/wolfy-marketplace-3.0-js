import React from "react";
import "./nft-card-v2.scss";
import { Skeleton } from "@mui/material";

export default function NffCardV2({ data, loading }) {
  return loading ? (
    <div className="laoding-card">
      <div className="img-skeletor">
        <Skeleton
          animation="wave"
          className="skeletor-text"
          sx={{
            position: "absolute",
            right: 15,
            width: 80,
            bottom: 10,
          }}
        />
        <div className="info-skeletor">
          <Skeleton
            variant="circular"
            width={50}
            height={50}
            animation="wave"
            sx={{
              position: "absolute",
              bottom: -20,
              left: 20,
            }}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="nft-card-v2">

<div className="multimedia-zone" >
  <h3>XD</h3>
</div>
<div className="content-zone" ></div>

    </div>
  );
}
