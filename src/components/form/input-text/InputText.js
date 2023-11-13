import './InputText.css'

export const InputText = (props) => {    
    return (
        <div className="input-text" >
            <label>{props.label}</label>
            <input  type={props.type || 'text'} 
                    placeholder={props.placeholder} 
                    required={props.required ? true : false}
                    onChange={props.onChange}
                    maxLength={props.maxLength} />
        </div>
    );
}