import React from 'react';
import StatCard from './StatCard';
import {
    Users as SubscribersIcon,
    DollarSign as RevenueIcon,
    ShoppingCart as SalesIcon,
    ShoppingBag as OrdersIcon,
} from 'react-feather';

const Dashboard = props => {
    return (
        <div className="dashboard">
            <div className="stat-cards">
                {statCards.map((card, index) => (
                    <StatCard key={`stat-card-${index}`} index={index} {...card} />
                ))}
            </div>
        </div>
    );
};

const statCards = [
    {
        icon: <SubscribersIcon />,
        value: '92.6k',
        label: 'Subscribers Gained',
        color: 'purple',
    },
    {
        icon: <RevenueIcon />,
        value: '97.5k',
        label: 'Revenue Generated',
        color: 'green',
    },
    {
        icon: <SalesIcon />,
        value: '36%',
        label: 'Quarterly Sales',
        color: 'red',
    },
    {
        icon: <OrdersIcon />,
        value: '97.5k',
        label: 'Orders Received',
        color: 'orange',
    },
];

Dashboard.displayName = 'Dashboard';

export default Dashboard;
