import React from 'react';
import './style.css'


const MatList: React.FC = (props) => {

    return (
        <div className="mat-list-container">
            {props.children}
        </div>
    );  
  
}

export default MatList;
