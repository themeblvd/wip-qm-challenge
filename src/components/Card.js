import React from 'react';
import PropTypes from 'prop-types';

/**
 * General card wrapper component.
 *
 * @param {Object} props           Component properties.
 * @param {string} props.className Any additional CSS classes to add, like `foo bar`.
 * @return {Component}
 */
const Card = props => {
    const { children, className } = props;
    const classNames = ['card'];

    if (className) {
        classNames.push(className);
    }

    return <div className={classNames.join(' ')}>{children}</div>;
};

Card.displayName = 'Card';

Card.propTypes = {
    className: PropTypes.string,
};

export default Card;
