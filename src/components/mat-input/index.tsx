import React, { useState } from 'react';
import './style.css';

export interface MatImputProps {
    label? : string,
    name?: string,
    password?: boolean,
    class?: string,
    value?: string,
    onChange?: any,
    toggleShowPassword?: boolean
}
 
const MatImput: React.FC<MatImputProps> = (props) => {

    const [showPassword, setShowPassword] = useState(props.password ? false : true);

    const toggleShowPassword = () => setShowPassword(!showPassword);
   
    return ( 
        <div className={"material-input" + (props.class ? ' ' + props.class : '' )}>
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder=" "
                onChange={props.onChange}
                name={props.name}
                value={props.value}
            />
            <label>{props.label}</label>
            {props.toggleShowPassword && props.password && <i
                className="material-icons"
                onClick={toggleShowPassword.bind(this)}
            >
                visibility
            </i>}
        </div> 
    );

}
 
export default MatImput;