import React, { useState } from "react";
import { Link } from "react-router-dom";
import { staticRoutes } from "../../helpers/static-routes";

export default function ResourceDropMenu() {
  const [drop, setdrop] = useState(false);

  return (
    <div
      className="drop-menu-box ml-2"
      onMouseEnter={() => {
        setdrop(true);
      }}
      onMouseLeave={() => {
        setdrop(false);
      }}
    >
      <Link to={staticRoutes.exporersNfts}>
        <h3>Recursos</h3>
      </Link>
      {drop && (
        <div className="drop-menu-iten">
          <span className="text-wolf-gray-light-1200 text-[14px]">
            Documentacion
          </span>
          <ul>
            <li>
              <Link>
                <h3>Sobre Wolfy</h3>
              </Link>
            </li>
            <li>
              <Link>
                <h3>Whitepaper</h3>
              </Link>
            </li>
            <li>
              <Link>
                <h3>Auditoria</h3>
              </Link>
            </li>
            <li>
              <Link>
                <h3>Auditoria 2</h3>
              </Link>
            </li>
          </ul>
          <div className="w-[100%] h-[1px] bg-wolf-blue-purple-600 my-[15px]"></div>
        <div className="flex">

        </div>
        </div>
      )}
    </div>
  );
}
