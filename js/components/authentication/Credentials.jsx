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
                   onChange={ this.props.onChange }
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


var Credentials = {
    getInitialState() {
        return {
            email: '',    email_confirmation: '',
            password: '', password_confirmation: ''
        };
    },

    password_input(name, isFinal) {
        return (
            <BasePassword key={name}
                          name={name}
                          isFinal={isFinal}
                          value={this.state[name]}
                          onChange={(e) => this.updateForm(e, name)}
            />
        );
    },

    email_input(key, isFinal) {
        return (
            <BaseEmail key={key}
                       name={key}
                       isFinal={isFinal}
                       value={ this.state[key] }
                       onChange={(e) => this.updateForm(e, key)}
                       placeholder={ StringFormat.snake_to_label(key) }
            />
        );
    },

    updateForm(e, key) {
        this.state[key] = e.target.value;
        this.setState(deepCopy(this.state));
    }
};

export default Object.freeze(Credentials);