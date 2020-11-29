import React from 'react';
import MonthlyStats from '../../components/MonthlyStats';
import HourlyStats from '../../components/HourlyStats';
import './style.css';

export default function OverviewBody() {
    return (
        <div className="overview">
            <MonthlyStats />
            <HourlyStats />
        </div>
    )
}
