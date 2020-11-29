import React from 'react';
import './style.css';
import downArrow from '../../icons/down-arrow.svg';
import upArrow from '../../icons/up-arrow.svg';

export default function MonthlyStats() {
    return (
        <section className="monthly-stats">
            <div className="date">JUN 24 - JUL 23</div>
            <div className="download"><img src={downArrow} alt="Down Arrow" />&nbsp;64.6&nbsp;<span>MB</span></div>
            <div className="upload"><img src={upArrow} alt="Up Arrow" />&nbsp;29.5&nbsp;<span>MB</span></div>
        </section>
    )
}
