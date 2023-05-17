import React from "react";
import "./hisotry-display.scss"

export default function BidHistoriesDisplay({ orderDb }) {
//   console.log("orden de subasta a consultar");
//   console.log(orderDb);
const [loading, setLoading] = useState(true);

const [bids, setBids] = useState([])

const init = async()=>{

    if(orderDb){
        const enpoint = ""
    }

}

  return (
    <div className="bid-histories-display">
      <h3>Ofertas</h3>
    </div>
  );
}
