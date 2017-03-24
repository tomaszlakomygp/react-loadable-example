import React from 'react';
import classNames from 'classnames';

const InfoButton = React.createClass({
    propTypes: {
        className: React.PropTypes.string,
        clickHandler: React.PropTypes.func.isRequired,
        desktopText: React.PropTypes.string.isRequired,
        mobileText: React.PropTypes.string.isRequired
    },

    getClasses() {
        return classNames('button', this.props.className);
    },

    render() {
        return (
            <button
                className={this.getClasses()}
                onClick={this.props.clickHandler}
            >
                <span className="desktop">{this.props.desktopText}</span>
                <span className="mobile">{this.props.mobileText}</span>
            </button>
        );
    }
});

export default InfoButton;
