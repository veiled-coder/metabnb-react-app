import React from "react";
import "../styles/modal.css";
import cancel from '../images/cancel.svg'

function Modal({ modalState, setshowModalFalse }) {
  const modal = {
    position: "fixed",
    background: "white",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 6,
padding:'1rem 0',
    
    display: "flex",
    flexDirection: "column",
   
    borderRadius: "10px",
  };
  const overlay = {
    background: "rgba(64, 64, 64, 0.3)",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 6,
  };
  return (
    <>
      {modalState ? (
        <div style={overlay}>
          <div style={modal} className="modal">
            <div className="connect">
              <p>Connect wallet</p>
              <img src={cancel} alt='close modal icon' onClick={setshowModalFalse}/>
            </div>
            <hr className="hr"></hr>
            <div className="wallet-type">
              <p>Choose your preferred knowledge</p>

            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Modal;
