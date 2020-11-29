import React, { useState } from 'react';
import Header from '../../components/Header';
import CalendarBody from '../CalendarBody';
import OverviewBody from '../OverviewBody';
import './style.css';

export default function MainScreen() {
    const [activeTab, setActiveTab] = useState('overview');


    return (
        <div className="container">
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 'overview' ? <OverviewBody /> : <CalendarBody />}
        </div>
    )
}
