import { render } from '@testing-library/react';
import React from 'react';

class SubscriptionForm extends React.Component {
    state = {
        email: '',
        isAgreeWithTerms: false,
    };

    handleEmail = (evt) => {
        this.setState({email: evt.target.value})
    }

    hadnleCheckbox = (evt) => {
        this.setState({isAgreeWithTerms: evt.target.checked})
    }

    handleSubmit = () => {
        const isValidMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email.toLocaleLowerCase())
        const isValidCheckbox = this.state.isAgreeWithTerms;

        if(!isValidMail) {
            alert('email is not valid')
            return;
        }

        if(!isValidCheckbox) {
            alert('you should accept all terms')
            return
        }

        this.setState({email: '', isAgreeWithTerms: false})
        alert('Thank you!');
    }


    render() {
        const {email, isAgreeWithTerms} = this.state;

        return (
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder='email'
                    value={email}
                    onChange={this.handleEmail} 
                />
                <br/>
                <label>
                    <input 
                        type="checkbox"
                        name="isAgreeWithTerms"
                        checked={isAgreeWithTerms} 
                        onChange={this.hadnleCheckbox}
                    />
                    I agree with terms and condition
                </label>
                <br/>
                <button onClick={this.handleSubmit}>Send</button>
            </div>
        )
    }
}

export {SubscriptionForm};