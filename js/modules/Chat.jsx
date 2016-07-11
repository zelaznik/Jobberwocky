import React from 'react';
import { Link } from 'react-router';

import SessionStore from '../stores/SessionStore.jsx';
import ChatStore from '../stores/ChatStore.jsx';

var md5 = require('md5');

var ChatContacts = React.createClass({
    status(contact) {
        var i = parseInt(md5(contact.get('email'))[0], 16) % 4;
        return ['success', 'warning', 'danger', 'muted'][i];
    },

    render() {
        return (
            <div className="contact-list">
                <div className="heading">
                    <span>{`Contacts (${this.props.contacts.count()})`}</span>
                    <i className="fa fa-plus pull-right" />
                </div>
                <ul>
                    {this.props.contacts.map((c) => (
                        <li key={c.get('id')} >
                            <Link to="/messages"
                                  query={{user_id: c.get('id')} }
                                  onClick={() => (this.props.setUserId(c.get('id')))}
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
                <span>Chat with <a href="#">{ this.props.activeUser.get('name') || '?' }</a></span>
                <i className="fa fa-cog pull-right" />
                <i className="fa fa-smile-o pull-right" />
            </div>
        );
    }
});

var ChatSingleMessage = React.createClass({
    render() {
        return (<div></div>);
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

var Chat = React.createClass({
    getInitialState() {
        return {
            dummy: {},
            contacts: ChatStore.contacts(),
            messages: (this.user_id() ? ChatStore.messages(this.user_id()) : undefined)
        };
    },

    refresh() {
        this.setState( this.getInitialState() );
    },

    setUserId(user_id) {
        this._userId = user_id;
        this.refresh();
    },

    user_id() {
        return this._userId || this.props.location.query.user_id;
    },

    activeUser() {
        if (this.user_id() && this.state.contacts)
            return this.state.contacts.get(this.user_id());
    },

    componentDidMount() {
        SessionStore.addChangeListener(this.refresh);
        ChatStore.addChangeListener(this.refresh);
    },

    componentWillUnmount() {
        SessionStore.removeChangeListener(this.refresh);
        ChatStore.removeChangeListener(this.refresh);
    },

    chat_page() {
        if (!this.activeUser()) {
            return (
                <div className="widget-container scrollable chat chat-page">
                    <ChatContacts contacts={ this.state.contacts } />
                </div>
            );
        } else {
            return (
                <div className="widget-container scrollable chat chat-page">
                    <ChatContacts contacts={ this.state.contacts }
                                  onClick={this.refresh}
                    />
                    <ChatHeader   activeUser    = { this.activeUser() } />
                    <ChatContent  activeUser    = { this.activeUser() }
                                  messages      = { this.state.messages }
                                  currentUserId = { SessionStore.currentUserId() }
                    />
                    <ChatFooter   activeUser={ this.activeUser() } />
                </div>
            );
        }
    },

    render() {
        if ( !this.state.contacts ) {
            return (
                <div className="container-fluid main-content">
                    <div className="page-title">
                        <center><h1>
                            Loading...
                        </h1></center>
                    </div>
                </div>
            );
        }

        return (
           <div className="container-fluid main-content">
               <div className="page-title">
                   <center><h1>
                       Chat
                   </h1></center>
               </div>

               <div className="row">
                   <div className="col-lg-12">
                       { this.chat_page() }
                   </div>
               </div>
           </div>
        );
    }
});

window.SessionStore = SessionStore;
window.ChatStore = ChatStore;
export default Chat;