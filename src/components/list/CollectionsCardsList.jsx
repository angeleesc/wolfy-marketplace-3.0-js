import React from 'react'

export default function CollectionsCardsList({collectionList}) {
  return (
    <div className='explorer-collections-container' >
        {
            collectionList.map((collection,i)=>{
                return <div className=''  key={"colection-nft-wolf-"+i}>

                    
                </div>
            })
        }
    </div>
  )
}
