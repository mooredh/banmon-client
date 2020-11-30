import React from 'react';
import MonthlyStats from '../../components/MonthlyStats';
import HourlyStats from '../../components/HourlyStats';
import './style.css';

export default function OverviewBody({ overviewData }) {
    return (
        <div className="overview">
            <MonthlyStats
                date={overviewData.dateRange}
                monthlyStats={overviewData.monthlyStats}
            />
            <HourlyStats hourlyStats={overviewData.hourlyStats} />
        </div>
    )
}
