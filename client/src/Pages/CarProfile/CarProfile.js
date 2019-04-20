import React, { Component } from 'react';
import './CarProfile.css';


class CarProfile extends Component {
    state = {
        model: '',
        make: '',
        year: '',
    };

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitCarForm = (e) => {
        e.preventDefault();
        this.props.submitCarForm(this.state)
        console.log(this.state)
    };


    render() {
        return (
            <form>
                <h2>Car Profile</h2>
                <input
                    name='make'
                    placeholder='Make'
                    value={this.state.make}
                    onChange={e => this.change(e)}

                />
                <br />
                <input
                    name='model'
                    placeholder='Model'
                    value={this.state.model}
                    onChange={e => this.change(e)}
                />
                <br />
                

                <input
                    name='year'
                    placeholder='Year'
                    value={this.state.year}
                    onChange={e => this.change(e)}

                />
                <br />

                <button onClick={e => this.submitCarForm(e)}>Submit</button>
            </form>
        )
    }
}

export default CarProfile;