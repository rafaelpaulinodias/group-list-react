import React from 'react';
import './style.css';

export interface MatIconButtonProps {
    icon?: string,
    outlined?: boolean,
    text?: string,
    buttonClick?: any
}
 
const MatIconButton: React.FC<MatIconButtonProps> = (props) => {

    let iconClass = "material-icons";

    props.outlined ? iconClass += "-outlined" : iconClass += "";

    let handleClick = (_event: any) => {
        if (props.buttonClick) {
            props.buttonClick(_event);
        }
    }
 
    return (
        <div className="mat-icon-button">
            <button 
                className="button"
                onClick={handleClick}
            >
                {props.icon && <span className={ iconClass }>{props.icon}</span>}
                {props.children && <span>{" " + props.children}</span>} 
            </button>
        </div>
    );
    

}
 
export default MatIconButton;
