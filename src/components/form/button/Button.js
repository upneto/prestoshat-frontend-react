import './Button.css'

export const Button = (props) => {

    const style = props.style ? props.style : 'button-default';

    return (
        <button className={style} >{props.children}</button>        
    )
}