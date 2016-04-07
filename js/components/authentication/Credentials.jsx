import React from 'react';
import StringFormat from '../../utils/StringFormat.jsx';
import deepCopy from '../../utils/deepCopy.jsx';

var BasePassword = React.createClass({
    label() { return StringFormat.snake_to_label(this.props.name); },
    key()   { return StringFormat.label_to_snake(this.props.name); },

    inputField() {
        return (
            <input className="form-control"
                   placeholder={ this.label() }
                   type="password"
                   value={ this.props.value }
                   onChange={ (e) => this.props.updateForm(e, this.key()) }
                   autoComplete="off"
            />
        );
    },

    optionalSubmitButton() {
        if (this.props.isFinal)
            return (<input type="submit" value='&#xf054;' />);
    },

    render() {
        return (
            <div className="form-group" >
                { this.inputField() }
                { this.optionalSubmitButton() }
            </div>
        );
    }
});

var Credentials = Object.freeze({
    getInitialState() {
        return {email: '', password: '', password_confirmation: ''};
    },

    input(name, isFinal) {
        return (<BasePassword key={name} name={name}
                              isFinal={isFinal}
                              value={this.state[name]}
                              updateForm={this.updateForm}/>);
    },

    email_input() {
        return (
            <div className="form-group" key="email">
                <input className="form-control"
                       placeholder="Email Address"
                       field="email"
                       type="text"
                       value={this.state.email}
                       onChange={ (e) => this.updateForm(e, 'email') }
                       autoComplete="off"
                />
            </div>
        );
    },

    updateForm(e, key) {
        this.state[key] = e.target.value;
        this.setState(deepCopy(this.state));
    }
});

export default Credentials;