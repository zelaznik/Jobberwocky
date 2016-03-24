import {NavItem, NavDropDown} from './navbar/'
import Root from './navbar/Root.jsx';

var routes = [
    {href: 'index.html', icon: 'se7en-home', label: 'Dashboard'},
    {href: 'social.html', icon: 'se7en-feed', label: 'Social Feed'},

    dropdown({icon:'se7en-star', label:'UI Features'}, () => [
        {href: 'buttons.html',     label: 'Buttons'},
        {href: 'fontawesome.html', label: 'Font Awesome Icons'},
        {href: 'glyphicons.html',  label: 'Glyphicons'}
    ]),

    dropdown({icon: 'se7en-forms', label: 'Forms'}, () => [
        {href: 'form-components.html', label: 'Form Components'},
        {href: 'form-advanced.html', label: 'Advanced Forms'},
        {href: 'xeditable.html', label: 'X-Editable'},
        {href: 'file-upload.html', label: 'Multiple File Upload'},
        {href: 'dropzone-file-upload.htlm', label: 'Dropzone File Upload'}
    ]),


];



