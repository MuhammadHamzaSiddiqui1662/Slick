import Form from './Form';
const Modal = ({type}) => {
    return(
        <div className="modal">
            <Form type={type.type} payload={type.payload} />
        </div>
    )
}
export default Modal;