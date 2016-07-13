import React from 'react';
import { Link } from 'react-router';
import Pusher from 'pusher-js';

var Immutable = require('immutable');
import ChatActions from '../actions/ChatActions.jsx';
import SessionStore from '../stores/SessionStore.jsx';
import ChatStore from '../stores/ChatStore.jsx';
import deepCopy from '../utils/deepCopy.jsx';
var md5 = require('md5');

var ChatContacts = React.createClass({
    getInitialState() {
        return { contacts: ChatStore.contacts()};
    },

    refresh() {
        this.setState( this.getInitialState() );
    },

    contacts() {
        return (this.state.contacts || Immutable.List([]));
    },

    status(contact) {
        try {
            var i = parseInt(md5(contact.get('email'))[0], 16) % 4;
            return ['success', 'warning', 'danger', 'muted'][i];
        } catch(e) {
            return 'muted';
        }
    },

    componentDidMount() {
        ChatStore.addChangeListener(this.refresh);
    },

    componentWillUnmount() {
        ChatStore.removeChangeListener(this.refresh);
    },

    render() {
        return (
            <div className="contact-list">
                <div className="heading">
                    <span>{
                        (!!this.state.contacts)
                            ? `Contacts (${this.state.contacts.size})`
                            : `Contacts Loading...`
                    }</span>
                    <i className="fa fa-plus pull-right" />
                </div>
                <ul>
                    {this.contacts().map((c, i) => (
                        <li key={i} >
                            <Link to={`/messages/users/${c.get('id')}`}
                                  onClick={()=> {this.props.setUserId(c.get('id'))} }
                            >
                                <img width="30" height="30" src={c.get('image')} />
                                <span>{ c.get('name') }</span>
                                <i className={`fa fa-circle text-${this.status(c)}`} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
});

var ChatHeader = React.createClass({
    render() {
        return (
            <div className="heading">
                <i className="fa fa-comments" />
                <span>Chat with <a>{ this.props.activeUser.get('name') || '?' }</a></span>
                <i className="fa fa-cog pull-right" />
                <i className="fa fa-smile-o pull-right" />
            </div>
        );
    }
});

var ChatContent = React.createClass({
    className(msg) {
        var classes = [];
        if (msg.get('sender').get('id') == this.props.currentUserId)
            classes.push('current-user');
        return classes.join(' ');
    },

    componentWillUpdate() {
        var node = this.getDOMNode();
        this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
    },

    componentDidUpdate() {
        if (this.shouldScrollBottom) {
            var node = this.getDOMNode();
            node.scrollTop = node.scrollHeight
        }
    },

    render() {
        return (
            <div className="widget-content padded">
                <ul>
                    {this.props.messages.map((msg, i) => (
                        <li key={i} className={this.className(msg)} >
                            <img width="30" height="30"
                                 src={ msg.get('sender').get('image') }
                            />
                            <div className="bubble">
                                <a className="user-name" href="">
                                    { msg.get('sender').get('name') }
                                </a>
                                <p className="message">
                                    { msg.get('body') }
                                </p>
                                <p className="time">
                                    <strong>{
                                        msg.get('temp_id') ? 'sending...' : msg.get('created_at')
                                    }</strong>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
});

var NewMessageForm = React.createClass({
    getInitialState() {
        return {body: ''};
    },

    onChange(e) {
        this.state.body = e.target.value;
        this.setState(deepCopy(this.state));
    },

    onSubmit(e) {
        e.preventDefault();
        ChatActions.send_message({
            user_id: this.props.user_id,
            body: this.state.body
        });
        this.setState({body: ''});
    },

    render() {
        return (
            <form className="post-message" onSubmit={this.onSubmit} >
                <input className="form-control"
                       placeholder="Write your message here…"
                       type="text"
                       onChange = { this.onChange   }
                       value    = { this.state.body }
                />
                <input type="submit" value="Send" />
            </form>
        );
    }
});

var ChatUser = React.createClass({
    getInitialState() {
        return {
            dummy:     {},
            contacts:  ChatStore.contacts()
        };
    },

    setUserId(user_id) {
        this.refresh();
    },

    user_id() {
        return this.props.user_id || this.props.params.user_id;
    },

    activeUser() {
        return (
            this.state.contacts.get(this.user_id()) ||
            Immutable.Map({id: (1*this.user_id()), name: '?'})
        );
    },

    componentDidMount() {
        SessionStore.addChangeListener(this.refresh);
        ChatStore.addChangeListener(this.refresh);
    },

    componentWillUnmount() {
        SessionStore.removeChangeListener(this.refresh);
        ChatStore.removeChangeListener(this.refresh);
    },

    refresh() {
        this.setState( this.getInitialState() );
    },

    render() {
        return (
            <div className="widget-container scrollable chat chat-page">
                <ChatContacts setUserId     = { this.setUserId } />
                <ChatHeader   activeUser    = { this.activeUser() } />
                <ChatContent  activeUser    = { this.activeUser() }
                              messages      = { ChatStore.messages(this.user_id()) }
                              currentUserId = { SessionStore.currentUserId() }
                />
                <NewMessageForm user_id={ this.user_id() } />
            </div>
        );
    }
});


var ChatBlank = React.createClass({
    getInitialState() {
        return {dummy: {}};
    },
    refresh() {
        this.setState( this.getInitialState() );
    },

    render() {
        return (
            <div className="widget-container scrollable chat chat-page">
                <ChatContacts setUserId = {()=>{/*PASS*/}} />
            </div>
        );
    }
});

var Chat = React.createClass({
    getInitialState() {
        return {dummy: {}};
    },
    render() {
        return (
           <div className="container-fluid main-content">
               <div className="page-title">
                   <center><h1>
                       Chat
                   </h1></center>
               </div>

               <div className="row">
                   <div className="col-lg-12">
                       {this.props.children}
                   </div>
               </div>
           </div>
        );
    },

    refresh() {
       this.setState( this.getInitialState() );
    },

    componentDidMount() {
        this.pusher = new Pusher(process.env.PUSHER_KEY, {encrypted: true});
        this.notifications = this.pusher.subscribe(''+SessionStore.currentUserId());
        this.notifications.bind('NEW_MESSAGE', ChatActions.receive_message);
        ChatStore.addChangeListener(this.refresh);
    },

    componentWillUnmount() {
        this.notifications.unbind('NEW_MESSAGE', ChatActions.receive_message);
        ChatStore.removeChangeListener(this.refresh);
    }
});

window.SessionStore = SessionStore;
window.ChatStore = ChatStore;
export { Chat , ChatBlank, ChatUser };
