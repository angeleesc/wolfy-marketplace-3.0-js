import React, { useState } from 'react'
import MenuGridRounded from '../icons/MenuGridRounded'

export default function HambugerMenuV2() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className='wolf-habuguer-drop-menu' >
        <button className='wolf-habuguer-drop-menu-buttom' >
            <MenuGridRounded size={"20"} />
        </button>
    </div>
  )
}
