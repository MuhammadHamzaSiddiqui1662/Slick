import Input from './inputs';
export const generateForm = props => {
    const formElementArray = [];
    for (let key in props) {
        formElementArray.push({
            id: key,
            config: props[key]
        })
    }
    const form = formElementArray.map(formElement =>
        <Input key={formElement.id} elementType={formElement.config.elementType} elementConfig={formElement.config.elementConfig} value={formElement.config.value} />
    )
    console.log(formElementArray, 'generating form...');
}