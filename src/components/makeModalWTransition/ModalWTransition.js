import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { CloseModal } from '../../action/BetInCartilla';

export const ModalWTransition = ({children, state, ChangeState, titulo='Alerta', showHeader, showOverlay, positionModal, padding, positionbtnclose, putWidth}) => {
    const modalref = useRef(null);

    const dispatch = useDispatch();
    const {openCartilla} = useSelector((state) => state.ui);
    const handleClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            if(openCartilla) return dispatch(CloseModal());
            modalref.current.onclick = ChangeState(false);
        }
    }   
    return (
      <>    
        {state &&
        <Overlay className={'modal-overlay'} showOverlay={showOverlay} positionModal={positionModal} ref={modalref} onClick={handleClick}>
            <ContenedorModal padding={padding} positionbtnclose={positionbtnclose} putWith={putWidth}>
                {showHeader &&
                <EncabezadoModal>
                    <h3>{titulo}</h3>
                </EncabezadoModal>  
                }
                {children}
            </ContenedorModal>
        </Overlay>
        }
      </>
  )
}


const Overlay = styled.div`
width: 100%;
height: 100%;
position: fixed;
top: 0;
left: 0;
background: ${props=>props.showOverlay ? 'rgba(0, 0, 0, .5)' : 'rgba(0, 0, 0)'} ;

// padding-top: 40px;

display: flex;
align-items: ${props=>props.positionModal ? props.positionModal : 'center'};
justify-content: center;
`
const ContenedorModal= styled.div`
width: 900rem;
min-height: 100px;
background: #fff;
border-radius: 10px 10px 0 0;


box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
padding: ${props=> props.padding? props.padding: '20px'};
`

const EncabezadoModal= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
padding-bottom: 20px;
border-radius: 1px solid #E8E8E8;

h3{
    font-weight: 500;
    font-size: 16px;
    color: #1766DC
}
`
const BotonCerrar= styled.button`
    position: absolute;
    top: ${props=> props.positionbtnclose? props.positionbtnclose: '15px'};
    right: ${props=> props.positionbtnclose? '50px': '15px'};;
    background: none;
    ${props=>props.positionbtnclose? 'background: #f2f2f2;': ''}
    
    width:     ${props=>props.positionbtnclose? '45px': '30px'};
    height: ${props=>props.positionbtnclose? '45px': '30px'};
    border: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: ${props=>props.positionbtnclose? '50%': '5px'};
    color: #1766DC;

    &:hover{
        background: #f2f2f2;
    }
    svg{
        ${props=>props.positionbtnclose? 'width: 60%; height: 60%; color: black' : '5px'}
    }
    `


