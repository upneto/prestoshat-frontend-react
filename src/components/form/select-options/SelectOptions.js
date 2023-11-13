import './SelectOptions.css';

export class SelectOption {
    constructor(value, label) {
        this.value = value;
        this.label = label;
    }
}

export const SelectOptions = (props) => {
    return (
        <div className="select-options" >
            <label>{props.label}</label>
            <select>                
                {props.itens.map(item => { 
                   return <option key={item.value} >{item.label}</option> ;
                } )}
            </select>
        </div>
    );
}