import React from 'react'
import { Outlet } from 'react-router-dom'

export default function LoginLayout() {
  return (
    <div>
        <h3>Login layout</h3>
        <Outlet/>
    </div>
  )
}
