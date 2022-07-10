import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { DeleteLastBet, EventStartAddNew, EventUpdateProductMultiplieds, OpenModal, ResetCartilla, UpdateAmountBetInCartilla, UpdateEarningsMACS, UpdateMaxTimeBetInCartilla } from '../../action/BetInCartilla';
import { randomDate2 } from '../../helpers/randomNumber';
// import { Cartilla } from '../Cartilla';

export const Bet = ({stateunBet, multiplied, date, time, codigo, idAccordion, numbet}) => {

  // const handleDeleteRow = (e)=>{
  //   console.log(e.target.parentElement.parentElement);
	// }
  
  const dispatch = useDispatch();
  const { Row } = useSelector((state) => state.showBet);
  const onClickMultiplied=()=>{
    dispatch(OpenModal())
    const datealeatorio = randomDate2(new Date(2024, 0, 1), new Date(), 0, 24).toLocaleString()
    const event={
        codigo: codigo,
        comienza: `${date} ${time}`,
        n_bet: `${idAccordion}. ${numbet}`,
        multiplicador: multiplied
    }
      
      // if(maxRowBool) return  dispatch(DeleteLastBet())
      dispatch(UpdateAmountBetInCartilla(0));
      dispatch(UpdateEarningsMACS());
      dispatch(EventStartAddNew(Row.length+1, 10, event));
      dispatch(EventUpdateProductMultiplieds(multiplied)); 
      dispatch(UpdateMaxTimeBetInCartilla(datealeatorio));
    }

    
  return (
    <>
        <div className="containerBet">
            <div className="stateUnBet">
                 <p>{stateunBet}</p>
            </div>
            <div className="multipliedBet" onClick={onClickMultiplied}>
                <input type="button" className="inputMultiplied" value={'x'+ multiplied}/>
            </div>
        </div>
    </>
  )
}
