import React from 'react';

var RenderTop = Object.freeze({
    render() {
        return (
            <li className={`dropdown ${ this._clsOpen() } ${ this.params.category } hidden-xs`}>
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    <span aria-hidden="true" className={`icon ${this.params.icon }`} />
                    <div className="sr-only">
                        { this.params.category }
                    </div>
                    <p className="counter">
                        { this.params.counter(this.props.items) }
                    </p>
                </a>
                <ul className={`dropdown-menu ${ this.params.category }`}>
                    {this.props.items.map(this.params.renderItem)}
                </ul>
            </li>
        );
    }
});

export default RenderTop;