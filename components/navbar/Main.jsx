import React from 'react';
import NavItem from './Item.jsx';
import NavDropDown from './DropDown.jsx';

import counter from '../../utils/counter.jsx';

class NavBarMain extends React.Component {
    render() {
        var seq = counter();
        return (
            <div className="container-fluid main-nav clearfix">
                <div className="nav-collapse">
                    <ul className="nav">
                        <NavItem key={seq()} href="index.html" icon="se7en-home" label="Dashboard" />
                        <NavItem key={seq()} href="social.html" icon="se7en-feed" label="Social Feed" />

                        <NavDropDown icon="se7en-star" label="UI Features" items={[
                            {href: 'buttons.html',     label: 'Buttons'},
                            {href: 'fontawesome.html', label: 'Font Awesome Icons'},
                            {href: 'glyphicons.html',  label: 'Glyphicons'},
                        ]} />

                        <NavDropDown key={seq()} icon="se7en-forms" label="Forms" items={[
                            {href: 'form-components.html', label: 'Form Components'},
                            {href: 'form-advanced.html', label: 'Advanced Forms'},
                            {href: 'xeditable.html', label: 'X-Editable'},
                            {href: 'file-upload.html', label: 'Multiple File Upload'},
                            {href: 'dropzone-file-upload.htlm', label: 'Dropzone File Upload'}
                        ]} />

                        <NavDropDown key={seq()} icon="se7en-tables" label="Tables" items={[
                            {href: 'tables.html', label: 'Basic Tables'},
                            {href: 'datatables.html', label: 'DataTables'},
                            {href: 'datatables-editable.html', label: 'Editable Datatables'},
                        ]} />

                        <NavItem key={seq()} href="charts.html" icon="se7en-charts" label="Charts" />

                        <NavDropDown key={seq()} icon="se7en-pages" label="Pages" items={[
                            {href: 'chat.html', label: 'Chat'},
                            {href: 'calendar.html', label: 'Calendar'},
                            {href: 'timeline.html', label: 'Timeline'},
                            {href: 'Login1.html', label: 'Login1'},
                            {href: 'Login2.html', label: 'Login2'},
                            {href: 'signup1.html', label: 'Sign Up 1'},
                            {href: 'messages.html', label: 'Messages/Inbox'},
                            {href: 'pricing.html', label: 'Pricing/Tables'},
                            {href: 'signup2.html', label: 'Sign Up 2'},
                            {href: '404-page.html', label: '404 Page'},
                            {href: '500-page.html', label: '500 Page'},
                        ]} />

                        <NavItem key={seq()} href="gallery.html" icon="se7en-gallery" label="Gallery" />
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBarMain;
