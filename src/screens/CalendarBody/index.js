import React, { useState } from 'react';
import './style.css';
import leftCaret from '../../icons/left-caret.svg';
import rightCaret from '../../icons/right-caret.svg';
import { getDaysArray, monthsInYear, daysInWeek, range } from '../../utils/helpers';

export default function CalendarBody() {
    const currDate = new Date();
    const [selectedMonth, setSelectedMonth] = useState(currDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(currDate.getFullYear());
    const [grid, setGrid] = useState(getDaysArray(selectedMonth, selectedYear));
    const [monthDropdownOpen, setMonthDropdownOpen] = useState(false);
    const [yearDropdownOpen, setYearDropdownOpen] = useState(false);

    const changeMonth = (isForward) => {
        let newDate = new Date(selectedYear, selectedMonth, 0);

        if (isForward) {
            if (selectedMonth === 11) {
                newDate = new Date(selectedYear + 1, 0, 1);
            } else {
                newDate = new Date(selectedYear, selectedMonth + 1, 1);
            }
        }

        setCalendar(newDate.getMonth(), newDate.getFullYear());
    }

    const setCalendar = (newMonth, newYear) => {
        setSelectedMonth(newMonth);
        setSelectedYear(newYear);
        setGrid(getDaysArray(newMonth, newYear));

    }

    return (
        <div className="calendar">
            <div className="month-year">
                <div className="month">
                    <div
                        className="active"
                        onClick={() => { setMonthDropdownOpen(!monthDropdownOpen); setYearDropdownOpen(false); }}
                    >
                        {monthsInYear[selectedMonth]}
                    </div>
                    <div className={`dropdown ${monthDropdownOpen ? 'open' : ''}`}>
                        {monthsInYear.map((month, idx) => <div
                            onClick={() => { setCalendar(idx, selectedYear); setMonthDropdownOpen(false) }}
                            className={`dropdown-items ${selectedMonth === idx ? 'selected' : ''}`}
                            key={month}
                        >
                            {month}
                        </div>)}
                    </div>
                </div>
                <div className="year">
                    <div
                        className="active"
                        onClick={() => { setMonthDropdownOpen(false); setYearDropdownOpen(!yearDropdownOpen); }}
                    >
                        {selectedYear}
                    </div>
                    <div className={`dropdown ${yearDropdownOpen ? 'open' : ''}`}>
                        {range(2020, 2040).map(year => <div
                            onClick={() => { setCalendar(selectedMonth, year); setYearDropdownOpen(false); }}
                            className={`dropdown-items ${selectedYear === year ? 'selected' : ''}`}
                            key={year}
                        >
                            {year}
                        </div>)}
                    </div>
                </div>
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
