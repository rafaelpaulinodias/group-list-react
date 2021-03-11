import React from 'react';
import './style.css';

export interface MatIconProps {
    icon: string,
    outlined?: boolean,
    small?: boolean,
    large?: boolean,
    light?: boolean
}
 
const MatIcon: React.FC<MatIconProps> = (props) => {

    let iconClass = "material-icons";

    props.outlined ? iconClass += "-outlined" : iconClass += "";
    props.small ? iconClass += " md-18" : iconClass += "";
    props.large ? iconClass += " md-48" : iconClass += "";
    props.light ? iconClass += " md-light" : iconClass += "";

    return (
        <span className={ iconClass }>{props.icon}</span>
    );

}
 
export default MatIcon;