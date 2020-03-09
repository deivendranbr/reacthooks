import React from "react";
import ReactDOM from "react-dom";

function Modal(props) {
    return(
        ReactDOM.createPortal((
            <div>
                <h2>I am a modal</h2> 
                {props.children}
            </div>
        ), document.body)
    )
}

export default Modal;