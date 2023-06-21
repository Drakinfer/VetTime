import React, { useState } from 'react';
import './dateFilter.css'

function DateFilter() {
    const [selectedDate, setSelectedDate] = useState('');

    function handleDateChange(event) {
        setSelectedDate(event.target.value);
    }

    return (
        <div>
            <label htmlFor="date-filter">Filtrer par date:</label>
            <input
                type="date"
                id="date-filter"
                value={selectedDate}
                onChange={handleDateChange}
            />
        </div>
    );
}

export default DateFilter;
