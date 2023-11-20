import { useState } from 'react';
import './InputText.css'

export const InputText = (props) => {    

    const[value, setValue] = useState(props.value); 

    const onChangeValue = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
        props.onChange(inputValue);
    };
    
    return (
        <div className="input-text" >
            <label>{props.label}</label>
            <input  type={props.type || 'text'} 
                    value={value}  
                    id={props.name}
                    name={props.name}                  
                    placeholder={props.placeholder} 
                    required={props.required ? true : false}
                    maxLength={props.maxLength}
                    onChange={onChangeValue} />
        </div>
    );
}