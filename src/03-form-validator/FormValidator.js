import { useState } from "react";
import Button from "../components/Button";
import Input from "./../components/Input";

const FormValidator = () => {
    const checkForm = () => {
        let errors = []
        if(formData.password !== formData.confirm_password) errors.push('Password does not matched')

        return errors;
    }
    const handleSubmit = e => {
        e.preventDefault();

        const errors = checkForm()
        if(errors.length !== 0) alert(errors[0])
        else {
            alert("Success!")
            setFormData({
                email: '',
                password: '',
                confirm_password: '',
            })
        }
    }
    const handleInput = (e, t) => {
        setFormData({...formData, [t]:e.target.value})
    }

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirm_password: '',
    })

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <Input value={formData.email} onChange={e => handleInput(e, 'email')} title='Email' type='email' required={true}/>
                <Input value={formData.password} onChange={e => handleInput(e, 'password')} title='Password' type='password' required={true}/>
                <Input value={formData.confirm_password} onChange={e => handleInput(e, 'confirm_password')} title='Confirm Password' type='password' required={true}/>
                <Button type='submit' title='Submit'/>
            </form>
        </section>
    )
}

export default FormValidator;