import React, { useState } from 'react';
import './style.css';
import leftCaret from '../../icons/left-caret.svg';
import rightCaret from '../../icons/right-caret.svg';
import { getDaysArray, monthsInYear, daysInWeek } from '../../utils/helpers';

export default function CalendarBody() {
    const currDate = new Date();
    const [selectedMonth, setSelectedMonth] = useState(currDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(currDate.getFullYear());
    const [grid, setGrid] = useState(getDaysArray(selectedMonth, selectedYear));

    const changeMonth = (isForward) => {
        let newDate = new Date(selectedYear, selectedMonth, 0);

        if (isForward) {
            if (selectedMonth === 11) {
                newDate = new Date(selectedYear + 1, 0, 1);
            } else {
                newDate = new Date(selectedYear, selectedMonth + 1, 1);
            }
        }

        const newMonth = newDate.getMonth();
        const newYear = newDate.getFullYear();

        setSelectedMonth(newMonth);
        setSelectedYear(newYear);
        setGrid(getDaysArray(newMonth, newYear));
    }

    return (
        <div className="calendar">
            <div className="month-year">
                <div className="month">{monthsInYear[selectedMonth]}</div>
                <div className="year">{selectedYear}</div>
            </div>
            <div className="cal-caret">
                <img onClick={() => changeMonth(false)} src={leftCaret} alt="caret-left"/>
                <div className="calendar-body">
                    <div className="cal-head">
                        {daysInWeek.map(day => <div key={day}>{day}</div>)}
                    </div>
                    <div className="cal-grid">
                        {grid.map((cell, i) => <div key={i} style={{ width: `${100/7}%` }} className={`cell ${cell.className}`}>
                            <div className="date-number">{cell.number}</div>
                        </div>)}
                    </div>
                </div>
                <img onClick={() => changeMonth(true)} src={rightCaret} alt="caret-right"/>
            </div>
        </div>
    )
}
