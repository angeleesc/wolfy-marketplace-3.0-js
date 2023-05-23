import React from 'react'
import FeacturedSwiper from './featured-swiper/FeacturedSwiper'
import { useState } from 'react'

export default function FeadturedHigthestAuctionBid() {

 const [laoding, setLaoding] = useState(true)

  return (
   <FeacturedSwiper title={"Subastas destacadas"}  loading={laoding} />
  )
}
