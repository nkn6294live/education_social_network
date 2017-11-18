import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ClassEventsCalendarHeadline extends Component {
    render() {
        const {className, currentPage} = this.props

        return (
            <div className="class-events-calendar-headline clearfix">
                <ul className="clearfix">
                    <li>
                        <Link to={`/classes/${className}/events`}>
                            <span className={currentPage=="events"&&"current"}>Events</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/classes/${className}/calendar`}>
                            <span className={currentPage=="calendar"&&"current"}>Calendar</span>
                        </Link>
                    </li>

                    <li className="pull-right">
                        <button className="btn btn-default">
                            <i className="fa fa-plus"></i>
                            Import Calendar
                        </button>
                        <button className="btn btn-default" onClick={this.props.openModal}>
                            <i className="fa fa-plus"></i>
                            Create event
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ClassEventsCalendarHeadline;