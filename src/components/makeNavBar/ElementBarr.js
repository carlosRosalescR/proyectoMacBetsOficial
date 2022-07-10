import React, { useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

export const ElementBarr = ({iconDropdown, containerDropdown, OptionPage}) => {
    const [dropdown, setDropdown] = useState(false);
    const OpenDropdown = ()=> setDropdown(true)

  return (
    <div className='ElementBarr_right_options_option' onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}> {/* Elemento de la barra */}
        <div className='container-ElementBarr_right_options_option'> {/* Button */}
            {iconDropdown}
        </div>
        
        {
            (containerDropdown&&dropdown) &&
        <>
        <div className='container-dropdown'>
            <div className='content-dropdown'>
            {containerDropdown}
            </div>
        </div>
        </>
        }
    </div>
  )
}
