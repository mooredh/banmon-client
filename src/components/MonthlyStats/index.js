import React from 'react';
import './style.css';
import downArrow from '../../icons/down-arrow.svg';
import upArrow from '../../icons/up-arrow.svg';
import { formatBytes } from '../../utils/helpers';

export default function MonthlyStats({ monthlyStats: stats, date }) {
    const formattedDown = formatBytes(stats[0]);
    const formattedUp = formatBytes(stats[1]);
    return (
        <section className="monthly-stats">
            <div className="date">{date}</div>
            <div className="download"><img src={downArrow} alt="Down Arrow" />&nbsp;{formattedDown[0]}&nbsp;<span>{formattedDown[1]}</span></div>
            <div className="upload"><img src={upArrow} alt="Up Arrow" />&nbsp;{formattedUp[0]}&nbsp;<span>{formattedUp[1]}</span></div>
        </section>
    )
}
