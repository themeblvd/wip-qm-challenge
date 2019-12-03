import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import FakeChart from './FakeChart';

/**
 * Dashboard stat card.
 *
 * @param {Object} props       Component properties.
 * @param {number} props.index Index used in mapping charts, determines which fake chart shows.
 * @param {Node}   props.icon  Icon to render.
 * @param {string} props.value Formatted value to display.
 * @param {string} props.label Label to display.
 * @param {string} props.color Color name for styling.
 * @return {Component}
 */
const StatCard = props => {
    const { index, color, icon, label, value } = props;

    return (
        <Card className={`stat-card color-${color}`}>
            <span className="badge">{icon}</span>
            <span className="h2 value">{value}</span>
            <span className="label">{label}</span>
            <FakeChart index={index} />
        </Card>
    );
};

StatCard.displayName = 'StatCard';

StatCard.propTypes = {
    index: PropTypes.number,
    icon: PropTypes.node,
    value: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.string,
};

export default StatCard;
