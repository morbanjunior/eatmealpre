import { useState } from 'react'
import { useFormModel } from '../../../model/useFormModel';
import validateInfo from './validateInfo';

const useForm  = () => {
    const [values, setValues] = useState<useFormModel>({
        cardName: '',
        cardNumber: '',
        cardType: '',
        cardExpiration: '',
        cardSecurityCode: '',
        cardPostalCode: '',
        focus: ''
    })

    const [errors, setErrors] = useState({})

    const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ 
            ...values,
            focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
        });
    }

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setErrors(validateInfo(values))
    };
    
    return { handleChange, handleFocus, handleSubmit, values, errors };
}

export default useForm 