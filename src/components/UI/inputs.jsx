const Input = props => {
    let inputElement = undefined;
    switch (props.inputType) {
        case 'input':
            inputElement = <input className={'input-element'} {...props} />
            break;
        case 'textarea':
            inputElement = <textarea className={'input-element'} {...props} />
        default:
            inputElement = <input className={'input-element'} {...props} />
            break;
    }

    return(
        <div className="input">
            <label htmlFor="">{props.label}</label>
            {inputElement}
        </div>
    )
}
export default Input;