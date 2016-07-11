import ChatActions from '../actions/ChatActions.jsx';
import ChatStore from '../stores/ChatStore.jsx';

import React from 'react';
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
                    {this.props.contacts.map((c, i) => (
                        <li key={i}>
                            <a href="#">
                                <img width="30" height="30" src={c.image} />
                                <span>{ c.name }</span>
                                <i className={`fa fa-circle text-${this.status(c)}`} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
});

var Chat = React.createClass({
    getInitialState() {
        return {
            dummy: {},
            loaded: ChatStore.loaded(),
            contacts: ChatStore.contacts()
        };
    },

    refresh() {
        this.setState( this.getInitialState() );
    },

    componentDidMount() {
        ChatStore.addChangeListener(this.refresh);
        if (!this.state.loaded) {
            ChatActions.get_users();
        }
    },

    componentWillUnmount() {
        ChatStore.removeChangeListener(this.refresh);
    },

    render() {
        if (!this.state.loaded) {
            return (
                <div className="container-fluid main-content">
                    <div className="page-title">
                        <h1>
                            Loading...
                        </h1>
                    </div>
                </div>
            );
        }

        return (
           <div className="container-fluid main-content">
               <div className="page-title">
                   <h1>
                       Chat
                   </h1>
               </div>

               <div className="row">
                   <div className="col-lg-12">
                       <div className="widget-container scrollable chat chat-page">
                           <ChatContacts contacts={ this.state.contacts } />
                           <div className="heading">
                               <i className="fa fa-comments" />Chat with <a href="#">John Smith</a><i className="fa fa-cog pull-right" /><i className="fa fa-smile-o pull-right" />
                           </div>
                           <div className="widget-content padded">
                               <ul>
                                   <li>
                                       <img width="30" height="30" src="images/avatar-male.jpg" />
                                       <div className="bubble">
                                           <a className="user-name" href="">John Smith</a>
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
                           <div className="post-message">
                               <input className="form-control" placeholder="Write your message here…" type="text" />
                               <input type="submit" value="Send" />
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        );
    }
});

export default Chat;