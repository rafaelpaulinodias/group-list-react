import React from 'react';
import './style.css';

export interface DialogProps {
    show?: boolean
    close?: any,
}

const Dialog: React.FC<DialogProps> = (props) => {
    
    return(
        <>
            <div className={props.show ? 'dialog-container' : 'hide'} >
                <div className="dialog">
                    {props.children}
                </div>
            </div>
        </>
    );    
    
}
 
export default Dialog;
