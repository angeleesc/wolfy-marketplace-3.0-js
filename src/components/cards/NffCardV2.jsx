import React from "react";

export default function NffCardV2({ data, loading }) {
  return loading ? (
    <div className="laoding-card">
      <h3>cargando</h3>
    </div>
  ) : (
    <div></div>
  );
}
