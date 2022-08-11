import React from "react";

class Form extends React.Component {
  state = {
    firstName: '',
    secondName: '',
  }

    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    render() {
        const {firstName, secondName} = this.state;

        return <div>
            <input 
            type="text" 
            name="firstName"
            placeholder="firstName"
            value={firstName}
            onChange={this.handleChange}
            />
            <input 
            type="text" 
            name="secondName"
            placeholder="secondName"
            value={secondName}
            onChange={this.handleChange}
            />
        </div>
    }
}

export {Form};