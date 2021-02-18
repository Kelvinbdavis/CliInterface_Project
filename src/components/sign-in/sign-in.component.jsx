import React, { useState } from 'react';

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component.styles'
import { signInWithGoogle } from '../../firebase/firebase.utils'

const SignIn = () => {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        setPassword("")
        setEmail("")
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name='email'
                    value={email}
                    label='Email'
                    handleChange={e => setEmail(e.target.value)}
                    required />
                <FormInput
                    type="password"
                    name='password'
                    label='Password'
                    value={password}
                    handleChange={e => setPassword(e.target.value)}
                    required />
                <div className="buttons">
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;

