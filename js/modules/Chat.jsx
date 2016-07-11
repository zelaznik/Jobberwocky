import React from 'react';
import { Link } from 'react-router';

import ChatActions from '../actions/ChatActions.jsx';
import ChatStore from '../stores/ChatStore.jsx';

var md5 = require('md5');

var ChatContacts = React.createClass({
    status(contact) {
        var i = parseInt(md5(contact.email)[0], 16) % 4;
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
                        <li key={c.id} >
                            <Link to="/messages" query={{user_id: c.id}} >
                                <img width="30" height="30" src={c.image} />
                                <span>{ c.name }</span>
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
                <span>Chat with <a href="#">{ this.props.activeUser.name || '?' }</a></span>
                <i className="fa fa-cog pull-right" />
                <i className="fa fa-smile-o pull-right" />
            </div>
        );
    }
});

var ChatContent = React.createClass({
    render() {
        return (
            <div className="widget-content padded">
                <ul>
                    <li>
                        <img width="30" height="30" src="images/avatar-male.jpg" />
                        <div className="bubble">
                            <a className="user-name" href="">{ this.props.activeUser.name || '?' }</a>
                            <p className="message">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                            </p>
                            <p className="time">
                                <strong>Today </strong>3:53 pm
                            </p>
                        </div>
                    </li>
                    <li className="current-user">
                        <img width="30" height="30" src="images/avatar-female.jpg" />
                        <div className="bubble">
                            <a className="user-name" href="">Jane Smith</a>
                            <p className="message">
                                Donec odio. Quisque volutpat mattis eros.
                            </p>
                            <p className="time">
                                <strong>Today </strong>3:53 pm
                            </p>
                        </div>
                    </li>
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
            contacts: ChatStore.contacts()
        };
    },

    refresh() {
        this.setState( this.getInitialState() );
    },

    user_id() {
        return this.props.location.query.user_id;
    },

    activeUser() {
        if (this.user_id())
            return this.state.contacts.get(this.user_id());
    },

    componentDidMount() {
        ChatStore.addChangeListener(this.refresh);
        if (!this.state.contacts) {
            ChatActions.get_users();
        }
        if (this.activeUser() && !this.state.messages) {
            ChatActions.get_messages(this.ActiveUser().id);
        }
    },

    componentWillUnmount() {
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
                    <ChatContacts contacts={ this.state.contacts } />
                    <ChatHeader   activeUser={ this.activeUser() } />
                    <ChatContent  activeUser={ this.activeUser() } />
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

export default Chat;