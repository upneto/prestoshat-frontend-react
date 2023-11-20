import { useState } from 'react';
import './SelectOptions.css';

export class SelectOption {
    constructor(value, label) {
        this.value = value;
        this.label = label;
    }
}

export const SelectOptions = (props) => {
    
    const[value, setValue] = useState(props.value); 
        
    const onChangeValue = (event) => {
        const selectedValue = event.target.value;
        setValue(selectedValue);
        props.onChange(selectedValue);
    };
    
    return (
        <div className="select-options" >
            <label>{props.label}</label>
            <select value={value} onChange={onChangeValue} required={props.required} 
                id={props.name}
                name={props.name} >                
                {props.itens.map(item => { 
                   return <option key={item.value} >{item.label}</option> ;
                } )}
            </select>
        </div>
    );
}