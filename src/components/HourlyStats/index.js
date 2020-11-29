import React from 'react';
import './style.css';
import downArrow from '../../icons/down-arrow.svg';
import upArrow from '../../icons/up-arrow.svg';

export default function HourlyStats() {
    return (
        <section className="hourly-stats">
            <div className="download">
                <div className="hour"><img src={downArrow} alt="Down Arrow" />&nbsp;HOUR</div>
                <div className="value">95.2 <span>MB</span></div>
            </div>
            <div className="upload">
                <div className="hour"><img src={upArrow} alt="Down Arrow" />&nbsp;HOUR</div>
                <div className="value">33.6 <span>MB</span></div>
            </div>
        </section>
    )
}
