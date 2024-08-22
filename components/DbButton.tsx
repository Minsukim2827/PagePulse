"use client";
import React, { useEffect } from 'react';

function DbButton() {
    // Function to fetch data from the server
    async function fetchData() {
        try {
            const response = await fetch('/api/database');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return <button onClick={fetchData}>Fetch Data</button>;
}

export default DbButton;
