import React, { Component } from "react";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.util";


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target
        this.setState({
            [name]: value

        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(
            {
                email: '',
                password: ''
            })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>SignIn with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        handleChange={this.handleChange}
                        type='email'
                        value={this.state.email}
                        required
                        label='Email' />
                    <FormInput
                        name='password'
                        handleChange={this.handleChange}
                        type='password'
                        value={this.state.password}
                        required
                        label='Password' />
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In WIth Google
                        </CustomButton>
                    </div>


                </form>
            </div>
        )
    }
}

export default SignIn;