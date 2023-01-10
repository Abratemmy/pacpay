import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./Calendar.css";
import 'react-calendar/dist/Calendar.css';

function CalendarDate() {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <div className='calendar-container'>
                {/* <Calendar onChange={setDate} value={date} maxDate={new Date()}  minDate={new Date(2015, 6, 1)}/> */}
                <Calendar
                    onChange={setDate}
                    value={date}
                    nextLabel='month>>'
                    nextAriaLabel='Go to next month'
                    next2Label='year>>'
                    next2AriaLabel='Go to next year'
                    prevLabel='<<month'
                    prevAriaLabel='Go to prev month'
                    prev2Label='<<year'
                    prev2AriaLabel='Go to prev year'
                />

            </div>
            <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
            </p>

        </div>
    )
}

export default CalendarDate