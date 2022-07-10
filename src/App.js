import React, { useEffect, useState } from 'react'
import { Cartilla } from './components/Cartilla'
import { MACBetsBody } from './components/MACBetsBody'
import { NavBar } from './components/makeNavBar/NavBar'

export const App = () => {
  
  return (
	  <>
      <NavBar />
      <MACBetsBody/>
      {/* <Cartilla stateModal1={false}/> */}
    </>
  )
}
