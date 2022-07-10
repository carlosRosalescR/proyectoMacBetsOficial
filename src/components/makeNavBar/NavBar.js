import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Aoption } from './Aoption'
import { ElementBarr } from './ElementBarr'
import { ListNotifications } from './ListNotifications'
import { MenuBarResponsive } from './MenuBarResponsive'
import { ModeNocturno } from './ModeNocturno'

export const NavBar = () => {
    // const isDesktopOrLaptop=true, isBigScreen=true, isTabletOrMobile=true, isPortrait=true, isRetina=true;
    const isDesktop = useMediaQuery({query: '(min-width: 992.98px)'}) //red
      const isDesktopOrLaptop = useMediaQuery({ query: '(max-width: 991.98px)' })//blue
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 540.98px)' })//yellow
      const isPortrait = useMediaQuery({ query: '(max-width: 575.98px)' })//green
      const isRetina = useMediaQuery({ query: '(min-resolution: 200px)' })//purple

    
    //   const isBigPhone = useMediaQuery({ query: '(max-width: 540px)' })
    //   const isPhone = useMediaQuery({ query: '(max-width: 411px)' })
    //(isDesktopOrLaptop?'red': '')} ${(isBigScreen?'blue':'')} ${(isTabletOrMobile?'yellow':'')} ${(isPortrait?'green':'')} ${(isRetina?'purple': '')
    //(isDesktopOrLaptop?'red': (isBigScreen?'blue':isTabletOrMobile?'yellow':isPortrait?'green': 'purple'))

  return (
      <div className='component-navBar'>
            <div className={`ElementBarr_left`}>
                <div className='ElementBarr_left_logo'><p>MACBets</p></div>
            </div>
            <div className='ElementBarr_right'>
                <div className='ElementBarr_right_options'>
                    {(isDesktop) &&
                    <ElementBarr 
                        iconDropdown={<div className='ElementBarr_right_options_option_text'><p>Mis cartillas</p></div>} 
                        containerDropdown={<p>Mis cartillas</p>}/>
                    }
                    {(isDesktop || isDesktopOrLaptop  && !isPortrait && !isRetina ) &&
                    <ElementBarr iconDropdown={<div className='ElementBarr_right_options_option_icon icon-wallet icon_desktop'>
                    </div>} containerDropdown={<p>Wallet</p>}/>
                    }
                    {((isDesktop || isDesktopOrLaptop ) && !isPortrait && !isRetina ) &&
                    <ElementBarr iconDropdown={<div className='ElementBarr_right_options_option_icon icon-bell icon_desktop'>
                    </div>} containerDropdown={<ListNotifications/>}/>
                    }
                    <ElementBarr iconDropdown={<>
                        <div className='ElementBarr_right_options_option_icon containerAvatar'>
                            <img className='avatarPerfil' src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/532.jpg' alt='icon-menu'/>
                        </div>
                        {((isDesktop || isDesktopOrLaptop)  && !isPortrait && !isRetina)&&
                        <div className='ElementBarr_right_options_option_text nameAvatar'>
                            <p>Carlos</p>
                        </div>  
                        }
                    </>
                    } 
                    containerDropdown={
                        ( isDesktop ?
                    <>
                    <Aoption nameOption={'Perfil'} href={'.'}/>
                    <ModeNocturno/>
                    <Aoption nameOption={'Configuración'} href={'.'}/>
                    <Aoption nameOption={'Salir'} href={'.'}/>
                    </>
                       :
                    <MenuBarResponsive/>)}/>
                </div>
            </div>
      </div>
  )
}
