import React from 'react';
import StringFormat from '../../utils/StringFormat.jsx';
import deepCopy from '../../utils/deepCopy.jsx';

var BaseInput = {
    label() { return StringFormat.snake_to_label(this.props.name); },
    key()   { return StringFormat.label_to_snake(this.props.name); },

    inputField() {
        return (
            <input className="form-control"
                   placeholder={ this.label() }
                   type={ this.dataType }
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
};

var BasePassword = React.createClass({
    mixins: [BaseInput],
    dataType: 'password'
});

var BaseEmail = React.createClass({
    mixins: [BaseInput],
    dataType: 'text'
});


var Credentials = Object.freeze({
    getInitialState() {
        return {email: '', password: '', password_confirmation: ''};
    },

    input(name, isFinal) {
        return (
            <BasePassword name={name}
                          isFinal={isFinal}
                          value={this.state[name]}
                          updateForm={this.updateForm}
            />
        );
    },

    email_input(key, isFinal) {
        var placeholder;
        if (!key) {
            key = 'email';
            placeholder = 'Email Address';
        } else {
            placeholder = StringFormat.snake_to_label(key);
        }

        return (
            <BaseEmail field={key} name={key}
                       value={this.state[key]}
                       placeholder={placeholder}
                       onChange={(e) => this.updateForm(e, key)}
            />
        );
    },

    updateForm(e, key) {
        this.state[key] = e.target.value;
        this.setState(deepCopy(this.state));
    }
});

export default Credentials;