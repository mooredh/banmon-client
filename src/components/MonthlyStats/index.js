import React from 'react';
import './style.css';
import downArrow from '../../icons/down-arrow.svg';
import upArrow from '../../icons/up-arrow.svg';
import { dateMMMDD, getPastMonth } from '../../utils/helpers';

export default function MonthlyStats({ bandwidth }) {
    const today = new Date();
    const lastMonth = getPastMonth(today);

    return (
        <section className="monthly-stats">
            <div className="date">{dateMMMDD(lastMonth)} - {dateMMMDD(today)}</div>
            <div className="download"><img src={downArrow} alt="Down Arrow" />&nbsp;64.6&nbsp;<span>MB</span></div>
            <div className="upload"><img src={upArrow} alt="Up Arrow" />&nbsp;29.5&nbsp;<span>MB</span></div>
        </section>
    )
}
