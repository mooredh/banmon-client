import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import CalendarBody from '../CalendarBody';
import Loader from '../Loader';
import OverviewBody from '../OverviewBody';
import './style.css';

const API_URL = 'https://banmon.herokuapp.com/api/v1/bandwidth/overview';

export default function MainScreen() {
    const [activeTab, setActiveTab] = useState('overview');
    const [isLoading, setIsLoading] = useState(false);
    const [overviewData, setOverviewData] = useState({
        monthlyStats: [0, 0],
        hourlyStats: [0, 0],
        dateRange: ''
    });

    useEffect(() => {
        getOverviewData();
    }, []);

    const getOverviewData = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });

            const resJson = await res.json();

            if (res.status !== 200 || !resJson.data) throw new Error(resJson.message);

            setOverviewData({ ...resJson.data });

            console.log(resJson);
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    }

    return (
        <div className="container">
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            {isLoading ? <Loader /> : (activeTab === 'overview' ? <OverviewBody overviewData={overviewData} /> : <CalendarBody />)}
        </div>
    )
}
