import React, { useState } from 'react'
import { Accordion } from '../makeAccordion/Accordion';
import { TimeProgressive } from '../makeATimeProgressive/TimeProgressive';
import { Bet } from '../makeComponentBet/Bet';
import { Modal } from '../Modal';

export const ListCardApuesta = ({keyId, acordiones, bets, titulo, subtitulo, fecha, hora, codigobet}) => {
  
  const [stateModal1, setstateModal1] = useState(false);

  const [faqs, setfaqs] = useState(
    acordiones.map(a=> (
                          {
                            id: a.id, 
                            question: a.name, 
                            answer: a.bets.map((bet, index)=> <Bet key={index} date={fecha} time={hora} stateunBet={bet.statement} multiplied={bet.multiplied} codigo={codigobet} idAccordion={a.id} numbet={index+1} />), 
                            open: a.id===1 ? true: false 
                          }
                        )
                  ));
  // console.log(acordiones.map(a=> a));
  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index)  faq.open = !faq.open
        else faq.open = false;
        
        return faq;
      })
    );
  };
    // console.log(acordiones, bets, titulo, subtitulo, fecha, hora, codigobet);
    return (
    <div className="ApuestaMAC">
      <div className={"headboardContainer"}>
        <p>{titulo}: {subtitulo}</p>
        <p className={'cod-Bet'}>#{codigobet}</p>
        <TimeProgressive date={fecha} time={hora}/>
      </div>
      <div className="bodyContainer">
        {
        acordiones[0].bets.map((bet, index)=> 
          <Bet 
            key={index} 
            date={fecha} 
            time={hora}
            stateunBet={bet.statement} 
            multiplied={bet.multiplied} 
            codigo={codigobet} 
            idAccordion={1} 
            numbet={index+1} 
          />)
        }
      </div>
      <div className="footContainer">
        <p onClick={() => setstateModal1(!stateModal1)}>Ver mas apuestas</p>
      </div>
      <Modal
        classNameforBackgrounds='modal-apuestas'
        state={stateModal1}
        ChangeState={setstateModal1}
        showHeader={false}
        showOverlay={true}
        positionModal="start"
        padding="15px"
        putWidth={'100%'}
        // background={''}
      >
          <div className={"headboardContainerModalTitle"}>
            <p>{titulo}: {subtitulo}</p>
            <p className={'cod-Bet'}>#{codigobet}</p>
            <TimeProgressive date={fecha} time={hora}/>
          </div>
          <div className="Accordion">
            <div className="faqs listBets">
              {
                faqs.map((faq, i) => (
                  <Accordion faq={faq} index={i} key={i} toggleFAQ={toggleFAQ} />
                ))
              }
            </div>
          </div>
      </Modal>
    </div>
  )
}

//acordiones.map(a=>(<Accordion  key={a.Index} toggleFAQ={toggleFAQ} faq={faq} index={a.Index} }/>))
//data={[{title: a.name, content: a.bets.map((bet, index)=> <Bet key={index} stateunBet={bet.statement} multiplied={bet.multiplied} codigo={codigobet} idAccordion={a.id} numbet={index} />)}]