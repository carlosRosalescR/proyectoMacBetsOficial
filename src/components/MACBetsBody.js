import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { randomNumber } from '../helpers/randomNumber';
import { Cartilla } from './Cartilla';
import { ListCardApuesta } from './makeapuestas/ListCardApuesta';
import { ModeloApuesta } from './ModeloApuesta';
export const MACBetsBody = () => {
  
    const {openCartilla} = useSelector(state => state.ui)
    

    const [cartilla, setCartilla] = useState(false);

    useEffect(() => {
      setCartilla(openCartilla);
    }, [openCartilla])
    let packApuestas = {
      bet1: new ModeloApuesta('21/09/2023', '12:00:00', 'champions', 'Sporting cristal vs Universitario', null, 'POLIK9')
                .addAccordionName(1, 'A', [{statement: 'a', multiplied: 1.4}, {statement: 'aa', multiplied: 2.3}, {statement: 'aaa', multiplied: 3.2}, {statement: 'aaaa', multiplied: 4.1}])
                .addAccordionName(2, 'B', [{statement: 'b', multiplied: 1.4}, {statement: 'bbb', multiplied: 3.2}, {statement: 'bbbb', multiplied: 4.1}]),
      bet2: new ModeloApuesta('21/09/2022', '18:00:00', 'champions', 'Sporting cristal vs Universitario', null, 'KILOO0')
                .addAccordionName(1, 'Z', [{statement: 'a', multiplied: 1.4}, {statement: 'aa', multiplied: 2.3}, {statement: 'aaa', multiplied: 3.2}, {statement: 'aaaa', multiplied: 4.1}, {statement: 'bbbb', multiplied: 4.1}, {statement: 'bbbb', multiplied: 4.1}, {statement: 'bbbb', multiplied: 4.1}])
                .addAccordionName(2, 'Y', [{statement: 'b', multiplied: 1.4}, {statement: 'bbb', multiplied: 3.2}, {statement: 'bbbb', multiplied: 4.1}, {statement: 'bbbb', multiplied: 4.1}, {statement: 'bbbb', multiplied: 4.1}, {statement: 'bbbb', multiplied: 4.1}, {statement: 'bbbb', multiplied: 4.1}, {statement: 'bbbb', multiplied: 4.1}, {statement: 'bbbb', multiplied: 4.1}])

      }
  return (
    <>
  <div className={'BodyMACBets'}>
    {
      //TODO: ALGUN DIA MODIFICAR ESTE CODIGO SPAGUETY
      Object.values(packApuestas).map((aps, index)=> (
        <ListCardApuesta 
            key={index} 
            acordiones={aps.accordionBet} 
            titulo={aps.titulo} 
            subtitulo={aps.subtitulo} 
            fecha={aps.fecha} 
            hora={aps.hora} 
            codigobet={aps.codigo}/>
      ))
    }
  </div>
  <Cartilla stateModal1={cartilla} setstateModal1={setCartilla}/>
</>
  )
}
