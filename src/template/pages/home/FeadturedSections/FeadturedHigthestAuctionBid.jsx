import React from 'react'
import FeacturedSwiper from './featured-swiper/FeacturedSwiper'
import { useState } from 'react'
import { requestEndPoints, rootApipaht, saleMethod } from '../../../../helpers/global-constants'
import axios from 'axios'
import { useEffect } from 'react'

export default function FeadturedHigthestAuctionBid() {

 const [laoding, setLaoding] = useState(true)
 const [nftsData, setNftsData] = useState([])

 const init = async()=>{

  const endpoint = rootApipaht.local + requestEndPoints.firebase.GETOrdersByQuery


  console.log(endpoint)

  const result = await axios.get(endpoint, {
    params: {
      saleMethod:saleMethod.auction,
      endTime: Date.now(),
      sortBy: "endTime"


    }
  })

  console.log(result.data)

 }

 useEffect(()=>{

  init()

 }, [])

  return (
   <FeacturedSwiper title={"Subastas destacadas"}  loading={laoding} />
  )
}
