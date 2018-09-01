import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from './input';
import {connect} from 'react-redux';
import {signUp} from '../actions';

class SignUp extends Component {
    register = (values)=>{
        console.log('values', values);
        this.props.signUp(values);
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <h1 className="center">Sign Up</h1>
                <form onSubmit = {handleSubmit(this.register)}className="row">
                    <Field name="email" label="Email" component={Input} />
                    <Field name="password" type="password" label="Password" component={Input} />
                    <Field name="confirmPassword" type="password" label="Confirm Password" component={Input} />
                
                    <div className="row">
                        <div className="col s12 right-align">
                            <button className="btn blue">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function validate(values){
    const{email, password, confirmPassword} = values;
    const errors = {};
    if(!email){
        errors.email = 'Please enter your email address'
    };
    if(!password){
        errors.password = 'Please choose a password'
    };
    if(password !== confirmPassword){
        errors.confirmPassword = 'Password does not match'
    }
    return errors;
    
}

SignUp = reduxForm({
    form: 'sign-up',
    validate
})(SignUp)

export default connect(null, {signUp})(SignUp);