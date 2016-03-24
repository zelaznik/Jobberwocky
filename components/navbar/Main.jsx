import React from 'react';

class NavItem extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.href}>
                    <span aria-hidden="true" className={`icon ${this.props.icon}`} />
                    <span>{this.props.label}</span>
                </a>
            </li>
        );
    }
}

class DropDownItem extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.item.href}>
                    <p>{this.props.item.label}</p>
                </a>
            </li>
        );
    }
}

var NavDropDown = React.createClass({
    getInitialState: function() {
        return {collapsed: true};
    },
    render: function() {
        var open = this.state.collapsed ? "" : " open";
        return (
            <li className={'dropdown' + open} onClick={this._onClick} >
                <a data-toggle="dropdown" href="#">
                    <span aria-hidden={this.state.collapsed} className={this.props.icon} />
                    {this.props.label}
                    <b className="caret" />
                </a>
                <ul className="dropdown-menu">
                    {this.props.items.map((item) => {
                        return <DropDownItem item={item} />;
                    })}
                </ul>
            </li>
        );
    },

    _onClick: function() {
        this.setState({collapsed: !this.state.collapsed});
    }
});

class NavBarMain extends React.Component {
    render() {
        return (
            <div className="container-fluid main-nav clearfix">
                <div className="nav-collapse">
                    <ul className="nav">
                        <NavItem href="index.html" icon="se7en-home" label="Dashboard" />
                        <NavItem href="social.html" icon="se7en-feed" label="Social Feed" />

                        <NavDropDown icon="se7en-star" label="UI Features" items={[
                            {href: 'buttons.html',     label: 'Buttons'},
                            {href: 'fontawesome.html', label: 'Font Awesome Icons'},
                            {href: 'glyphicons.html',  label: 'Glyphicons'},
                        ]} />

                        <NavDropDown icon="se7en-forms" label="Forms" items={[
                            {href: 'form-components.html', label: 'Form Components'},
                            {href: 'form-advanced.html', label: 'Advanced Forms'},
                            {href: 'xeditable.html', label: 'X-Editable'},
                            {href: 'file-upload.html', label: 'Multiple File Upload'},
                            {href: 'dropzone-file-upload.htlm', label: 'Dropzone File Upload'}
                        ]} />

                        <NavDropDown icon="se7en-tables" label="Tables" items={[
                            {href: 'tables.html', label: 'Basic Tables'},
                            {href: 'datatables.html', label: 'DataTables'},
                            {href: 'datatables-editable.html', label: 'Editable Datatables'},
                        ]} />

                        <NavItem href="charts.html" icon="se7en-charts" label="Charts" />

                        <NavDropDown icon="se7en-pages" label="Pages" items={[
                            {href: 'chat.html', label: 'Chat'},
                            {href: 'calendar.html', label: 'Calendar'},
                            {href: 'timeline.html', label: 'Timeline'},
                            {herf: 'Login1.html', label: 'Login1'},
                            {herf: 'Login2.html', label: 'Login2'},
                            {herf: 'signup1.html', label: 'Sign Up 1'},
                            {herf: 'messages.html', label: 'Messages/Inbox'},
                            {herf: 'pricing.html', label: 'Pricing/Tables'},
                            {herf: 'signup2.html', label: 'Sign Up 2'},
                            {herf: '404-page.html', label: '404 Page'},
                            {herf: '500-page.html', label: '500 Page'},
                        ]} />

                        <NavItem href="gallery.html" icon="se7en-gallery" label="Gallery" />
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBarMain;
