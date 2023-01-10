import React, { Component } from 'react'

import DatePagination from 'react-date-pagination'
import Calendar from 'react-calendar';

export default class Date extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activePage: 1,
            // date: new Date()
        }
        // this.state = {
        //     date : new Date()
        // }
    }

    handlePageChange = (pageNumber) => {
        this.setState({ activePage: pageNumber })
    }

    render() {
        // let daysArray = [{ date: '2022-12-29' }, { date: '2018-06-02' }, { date: '2018-06-03' }, { date: '2018-06-04' }, { date: '2018-06-05' }, { date: '2018-06-06' }, { date: '2018-06-07' }, { date: '2018-06-08' }, { date: '2018-06-09' }]

        let daysArray = <Calendar
            // onChange={setDate}
            value={this.state.date}
            nextLabel='month>>'
            nextAriaLabel='Go to next month'
            next2Label='year>>'
            next2AriaLabel='Go to next year'
            prevLabel='<<month'
            prevAriaLabel='Go to prev month'
            prev2Label='<<year'
            prev2AriaLabel='Go to prev year'
        />

        return (
            <div>




                <DatePagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={1}
                    totalItemsCount={daysArray.length}
                    days={daysArray}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                />
            </div>
        )
    }
}
