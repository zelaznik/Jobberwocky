import React from 'react';
import { Link } from 'react-router';

var Immutable = require('immutable');

import SessionStore from '../stores/SessionStore.jsx';
import ChatStore from '../stores/ChatStore.jsx';

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
        var i = parseInt(md5(contact.get('email'))[0], 16) % 4;
        return ['success', 'warning', 'danger', 'muted'][i];
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
        return (msg.get('sender').get('id') == this.props.currentUserId) ? "current-user" : "";
    },

    render() {
        return (
            <div className="widget-content padded">
                <ul>
                    {this.props.messages.map((msg) => (
                        <li key={msg.get('id')} className={this.className(msg)} >
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
                                    <strong>{ msg.get('created_at') }</strong>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
});

var ChatFooter = React.createClass({
   render() {
       return (
           <div className="post-message">
               <input className="form-control" placeholder="Write your message here…" type="text" />
               <input type="submit" value="Send" />
           </div>
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
                <ChatFooter activeUser={ this.activeUser() }/>
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
    }
});

window.SessionStore = SessionStore;
window.ChatStore = ChatStore;
export { Chat , ChatBlank, ChatUser };
