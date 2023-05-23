import React from "react";
import "./nft-card-v2.scss"

export default function NffCardV2({ data, loading }) {
  return loading ? (
    <div className="laoding-card">
      <h3>cargando</h3>
    </div>
  ) : (
    <div></div>
  );
}
