import React from 'react';
import './style.css';
import downArrow from '../../icons/down-arrow.svg';
import upArrow from '../../icons/up-arrow.svg';
import { formatBytes } from '../../utils/helpers';

export default function HourlyStats({ hourlyStats: stats }) {
    const formattedDown = formatBytes(stats[0]);
    const formattedUp = formatBytes(stats[1]);

    return (
        <section className="hourly-stats">
            <div className="download">
                <div className="hour"><img src={downArrow} alt="Down Arrow" />&nbsp;HOUR</div>
                <div className="value">{formattedDown[0]}&nbsp;<span>{formattedDown[1]}</span></div>
            </div>
            <div className="upload">
                <div className="hour"><img src={upArrow} alt="Up Arrow" />&nbsp;HOUR</div>
                <div className="value">{formattedUp[0]}&nbsp;<span>{formattedUp[1]}</span></div>
            </div>
        </section>
    )
}
