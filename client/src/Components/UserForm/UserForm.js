import React, { Component } from 'react';
import './UserForm.css';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';

class UserForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',

    };

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        console.log(this.state)
    };

    render() {
        return (
            <form>
                <h2>User Form</h2>
                <input
                    name='firstName'
                    placeholder='First Name'
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name='lastName'
                    placeholder='Last Name'
                    value={this.state.lastName}
                    onChange={e => this.change(e)}
                />
                <br />

                <input
                    name='username'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={e => this.change(e)}
                />
                <br />

                <input
                    name='email'
                    placeholder='Email'
                    value={this.state.email}
                    onChange={e => this.change(e)}
                />
                <br />

                <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={e => this.change(e)}
                />
                <br />



                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        )
    }


}



export default UserForm;