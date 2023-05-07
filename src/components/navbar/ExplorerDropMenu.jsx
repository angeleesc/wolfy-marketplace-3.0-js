import React, { useState } from "react";
import { Link } from "react-router-dom";
import { staticRoutes } from "../../helpers/static-routes";

export default function ExplorerDropMenu() {
  const [drop, setdrop] = useState(false);
  // cons

  return (
    <div
      className="drop-menu-box mr-2"
      onMouseEnter={() => {
        setdrop(true);
      }}
      onMouseLeave={() => {
        setdrop(false);
      }}
    >
      <Link to={staticRoutes.exporersNfts}>
        <h3>Explorar</h3>
      </Link>
      {drop && (
        <div className="drop-menu-iten">
          <ul>
            <li>
              <Link
                to={staticRoutes.exporersNfts}
                onClick={() => {
                  setdrop(false);
                }}
              >
                <h3>Nfts</h3>
              </Link>
            </li>
            <li>
              <Link
                to={staticRoutes.exporersColections}
                onClick={() => {
                  setdrop(false);
                }}
              >
                <h3>Coleciones</h3>
              </Link>
            </li>
          </ul>
          {/* <div className="w-[100%] h-[1px] bg-wolf-blue-purple-600 my-[15px]"></div>
          <span className="text-wolf-gray-light-1200 text-[14px]">
            Eplorar por blockchain
          </span>
          <ul className="mt-[15px]">
            <li>
              <Link to={staticRoutes.exporersNfts}>
                <h3>Polygon</h3>
              </Link>
            </li>
            <li>
              <Link to={staticRoutes.exporersNfts}>
                <h3>Ethereum</h3>
              </Link>
            </li>
            <li>
              <Link to={staticRoutes.exporersNfts}>
                <h3>Ethereum</h3>
              </Link>
            </li>
            <li>
              <Link to={staticRoutes.exporersNfts}>
                <h3>Arbitrum</h3>
              </Link>
            </li>
          </ul> */}
        </div>
      )}
    </div>
  );
}
