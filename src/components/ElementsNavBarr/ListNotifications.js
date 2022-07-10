import React from 'react'

export const ListNotifications = () => {
    const estado = null;
  const esCartilla = true;
  return (
    <li className="notification-Row LineBottom paddingBottom">
    <div className="notification-Row_title">
          <p>Fecha de la apuesta: Hace un momento</p>
            {/* <p>Estado de la apuesta:</p>*/} {estado==null ? <p>Termina en 1mes</p> : (estado ? (<p className='stateWin'>+300 MACS</p>) : (<p className='stateLost'>-30MACS</p>))} 
    </div>
    <div className="notification-Row_content">
          <p>Multiplicador total: x4.00</p>
            <p>Has apostado 30MACS</p>
            <p className="stateWin">0/(cantidad de apuestas)</p>
    </div>
    {esCartilla && <div className='visualizeCartilla _center2'> <svg className="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z"/></svg> </div>}
  </li>
  )
}