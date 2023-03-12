import React, { useState } from 'react'
import "./drop-menu.scss"


export default function BlockchainFillter() {

  const [openDrop, setOpenDrop] = useState(true)

  return (
    <div className='drop-menu-container'  >
        <button>
          blochain
        </button>
        {
          openDrop && <div className='drop-menu-item-xd' >
            <h3>Drop menu item xd</h3>
          </div>
        }
    </div>
  )
}
