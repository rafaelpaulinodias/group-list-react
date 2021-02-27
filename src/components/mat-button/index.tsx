import React from 'react';
import './style.css';

interface Props { onButonClick?: any }

const MatButton: React.FC<Props> = (props) => {

    return (
        <button className="mat-button" onClick={props.onButonClick} >{props.children}</button>
    );
}

export default MatButton;