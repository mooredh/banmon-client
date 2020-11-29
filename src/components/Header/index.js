import React from 'react';
import './style.css';

export default function Header({ setActiveTab, activeTab }) {
    return (
        <header className="header">
            <section
                className={activeTab === 'overview' ? 'active' : ''}
                onClick={() => setActiveTab('overview')}
            >
                Overview
            </section>
            <section
                className={activeTab === 'calendar' ? 'active' : ''}
                onClick={() => setActiveTab('calendar')}
            >
                Calendar
            </section>
        </header>
    )
}
