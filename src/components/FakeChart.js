import React from 'react';
import PropTypes from 'prop-types';
import Chart0 from '../assets/svg/chart-0.svg';
import Chart1 from '../assets/svg/chart-1.svg';
import Chart2 from '../assets/svg/chart-2.svg';
import Chart3 from '../assets/svg/chart-3.svg';

/**
 * Fake chart for demo purposes.
 *
 * @param {Object} props       Component properties.
 * @param {number} props.index Index used in mapping charts, determines which fake chart shows.
 * @return {Component}
 */
const FakeChart = props => {
    let Chart;

    switch (props.index) {
        case 0:
            Chart = Chart0;
            break;
        case 1:
            Chart = Chart1;
            break;
        case 2:
            Chart = Chart2;
            break;
        case 3:
            Chart = Chart3;
            break;
        default:
            Chart = Chart0;
            break;
    }

    return (
        <div className="chart-wrapper">
            <Chart className="chart" />
        </div>
    );
};

FakeChart.displayName = 'FakeChart';

FakeChart.propTypes = {
    index: PropTypes.number,
};

export default FakeChart;
