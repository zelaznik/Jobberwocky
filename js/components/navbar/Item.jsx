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

export default NavItem;