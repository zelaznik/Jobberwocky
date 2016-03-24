import React from 'react';
import NavItem from './Item.jsx';
import NavDropDown from './DropDown.jsx';

import counter from '../../utils/counter.jsx';

var NavBarMain = React.createClass({
    getInitialState() {
        return {current: null};
    },

    current() {
        return this.state.current;
    },

    setCurrent(key) {
        if (key === undefined) {
            console.warn("Undefined key for navbar item.");
        } else if (this.current() === key) {
            this.setState({current: null});
        } else {
            this.setState({current: key});
        }
    },

    render() {
        var seq = counter();
        return (
            <div className="container-fluid main-nav clearfix">
                <div className="nav-collapse">
                    <ul className="nav">
                        <NavItem key={seq.next} reactKey={seq.value} parent={this} href="index" icon="se7en-home" label="Dashboard" />
                        <NavItem key={seq.next} reactKey={seq.value} parent={this} href="social" icon="se7en-feed" label="Social Feed" />

                        <NavDropDown key={seq.next} reactKey={seq.value} parent={this} icon="se7en-star" label="UI Features" items={[
                            {href: 'buttons',     label: 'Buttons'},
                            {href: 'fontawesome', label: 'Font Awesome Icons'},
                            {href: 'glyphicons',  label: 'Glyphicons'}
                        ]} />

                        <NavDropDown key={seq.next} reactKey={seq.value} parent={this} icon="se7en-forms" label="Forms" items={[
                            {href: 'form-components', label: 'Form Components'},
                            {href: 'form-advanced', label: 'Advanced Forms'},
                            {href: 'xeditable', label: 'X-Editable'},
                            {href: 'file-upload', label: 'Multiple File Upload'},
                            {href: 'dropzone-file-upload', label: 'Dropzone File Upload'}
                        ]} />

                        <NavDropDown key={seq.next} reactKey={seq.value} parent={this} icon="se7en-tables" label="Tables" items={[
                            {href: 'tables', label: 'Basic Tables'},
                            {href: 'datatables', label: 'DataTables'},
                            {href: 'datatables-editable', label: 'Editable Datatables'}
                        ]} />

                        <NavItem key={seq.next} reactKey={seq.value} parent={this} href="charts.html" icon="se7en-charts" label="Charts" />

                        <NavDropDown key={seq.next} reactKey={seq.value} parent={this} icon="se7en-pages" label="Pages" items={[
                            {href: 'chat', label: 'Chat'},
                            {href: 'calendar', label: 'Calendar'},
                            {href: 'timeline', label: 'Timeline'},
                            {href: 'Login1', label: 'Login1'},
                            {href: 'Login2', label: 'Login2'},
                            {href: 'signup1', label: 'Sign Up 1'},
                            {href: 'messages', label: 'Messages/Inbox'},
                            {href: 'pricing', label: 'Pricing/Tables'},
                            {href: 'signup2', label: 'Sign Up 2'},
                            {href: '404-page', label: '404 Page'},
                            {href: '500-page', label: '500 Page'}
                        ]} />

                        <NavItem key={seq.next} reactKey={seq.value} parent={this} href="gallery.html" icon="se7en-gallery" label="Gallery" />
                    </ul>
                </div>
            </div>
        );
    }
});

export default NavBarMain;
