import React from 'react';

var Chat = React.createClass({
   render() {
       return (
           <div className="container-fluid main-content">

               <div className="page-title">
                   <h1>
                       Chat
                   </h1>
               </div>

               <div className="row">
                   <!-- Conversation -->
                   <div className="col-lg-12">
                       <div className="widget-container scrollable chat chat-page">
                           <div className="contact-list">
                               <div className="heading">
                                   Contacts (15)<i className="fa fa-plus pull-right" />
                               </div>
                               <ul>
                                   <li>
                                       <a href="#"><img width="30" height="30" src="images/avatar-female2.png" />Jessie Pinkman<i className="fa fa-circle text-success" /></a>
                                   </li>
                                   <li>
                                       <a href="#"><img width="30" height="30" src="images/avatar-male.jpg" />Skyler White<i className="fa fa-circle text-warning" /></a>
                                   </li>
                                   <li>
                                       <a href="#"><img width="30" height="30" src="images/avatar-female.png" />Flynn White<i className="fa fa-circle text-danger" /></a>
                                   </li>
                                   <li>
                                       <a href="#"><img width="30" height="30" src="images/avatar-female2.png" />Hank Schrader<i className="fa fa-circle text-muted" /></a>
                                   </li>
                                   <li>
                                       <a href="#"><img width="30" height="30" src="images/avatar-male.jpg" />Marie Schrader<i className="fa fa-circle text-success" /></a>
                                   </li>
                                   <li>
                                       <a href="#"><img width="30" height="30" src="images/avatar-female.png" />Steve Gomez<i className="fa fa-circle text-warning" /></a>
                                   </li>
                                   <li>
                                       <a href="#"><img width="30" height="30" src="images/avatar-female2.png" />Saul Goodman<i className="fa fa-circle text-success" /></a>
                                   </li>
                                   <li>
                                       <a href="#"><img width="30" height="30" src="images/avatar-male.jpg" />Mike Ehrmantraut<i className="fa fa-circle text-success" /></a>
                                   </li>
                                   <li>
                                       <a href="#"><img width="30" height="30" src="images/avatar-female.png" />Gustavo Fring<i className="fa fa-circle text-muted" /></a>
                                   </li>
                                   <li>
                                       <a href="#"><img width="30" height="30" src="images/avatar-female2.png" />Skinny Pete<i className="fa fa-circle text-muted" /></a>
                                   </li>
                                   <li>
                                       <a href="#"><img width="30" height="30" src="images/avatar-male.jpg" />Badger<i className="fa fa-circle text-success" /></a>
                                   </li>
                                   <li>
                                       <a href="#"><img width="30" height="30" src="images/avatar-female.png" />Gale Boetticher<i className="fa fa-circle text-warning" /></a>
                                   </li>
                                   <li>
                                       <a href="#"><img width="30" height="30" src="images/avatar-female2.png" />Huell<i className="fa fa-circle text-muted" /></a>
                                   </li>
                                   <li>
                                       <a href="#"><img width="30" height="30" src="images/avatar-male.jpg" />Ted Beneke<i className="fa fa-circle text-success" /></a>
                                   </li>
                                   <li>
                                       <a href="#"><img width="30" height="30" src="images/avatar-female.png" />Bogdan Wolynetz<i className="fa fa-circle text-warning" /></a>
                                   </li>
                               </ul>
                           </div>
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
                                   <li>
                                       <img width="30" height="30" src="images/avatar-male.jpg" />
                                       <div className="bubble">
                                           <a className="user-name" href="">John Smith</a>
                                           <p className="message">
                                               Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                                           </p>
                                           <p className="time">
                                               <strong>Today </strong>3:53 pm
                                           </p>
                                       </div>
                                   </li>
                                   <li>
                                       <img width="30" height="30" src="images/avatar-male.jpg" />
                                       <div className="bubble">
                                           <a className="user-name" href="">John Smith</a>
                                           <p className="message">
                                               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
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
                                               Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo.
                                           </p>
                                           <p className="time">
                                               <strong>Today </strong>3:53 pm
                                           </p>
                                       </div>
                                   </li>
                                   <li>
                                       <img width="30" height="30" src="images/avatar-male.jpg" />
                                       <div className="bubble">
                                           <a className="user-name" href="">John Smith</a>
                                           <p className="message">
                                               Donec odio. Quisque volutpat mattis eros.
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
                                               Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada.
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
                                               Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet. Quisque fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque adipiscing eros ut libero. Ut condimentum mi vel tellus. Suspendisse laoreet.
                                           </p>
                                           <p className="time">
                                               <strong>Today </strong>3:53 pm
                                           </p>
                                       </div>
                                   </li>
                                   <li>
                                       <img width="30" height="30" src="images/avatar-male.jpg" />
                                       <div className="bubble">
                                           <a className="user-name" href="">John Smith</a>
                                           <p className="message">
                                               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
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
                                               Sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet. Quisque fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                           </p>
                                           <p className="time">
                                               <strong>Today </strong>3:53 pm
                                           </p>
                                       </div>
                                   </li>
                                   <li>
                                       <img width="30" height="30" src="images/avatar-male.jpg" />
                                       <div className="bubble">
                                           <a className="user-name" href="">John Smith</a>
                                           <p className="message">
                                               Consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                                           </p>
                                           <p className="time">
                                               <span><strong>Today </strong>3:53 pm</span>
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