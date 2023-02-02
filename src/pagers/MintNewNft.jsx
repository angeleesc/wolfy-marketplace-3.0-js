import React from "react";
import MintNftForm from "../template/pages/Mint/MintNftForm";

export default function MintNewNft() {
  return (
    <div className="page-box">
      <section className=" mt-[80px] w-[100%]  flex flex-wrap">
        <div className="w-[100%] md:w-[70%] flex justify-center ">
          <MintNftForm />
        </div>
        <div className="w-[100%`] h-[100%] ">
          <h3>Previsualizacion </h3>
        </div>
      </section>
    </div>
  );
}
