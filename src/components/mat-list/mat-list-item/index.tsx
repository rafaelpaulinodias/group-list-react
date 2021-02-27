import React from 'react';
import './style.css'

const MatListItem: React.FC = (props) => {

    return (
        <div className="mat-list-item">{props.children}</div>
    );
    
}

export default MatListItem;
