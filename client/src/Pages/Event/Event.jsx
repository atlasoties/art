import Sidebar from "../../Components/sidebar/sidebar";
import Topbar from "../../Components/topbar/Topbar";
import React from "react";
import iconlocation from '../../asset/img/location-pin-solid.svg'
import iconbook from "../../asset/img/bookmark-solid.svg"
import iconcalander from '../../asset/img/calendar-days-solid.svg'
import './Event.css';
import Online from "../../Components/online/Online";
import { Ev } from "../../Event";
const txt = '“Big Sean will at the hmv Underground at 333 Yonge Street on March 24, 2015 at 5:00 PM for an exclusive FAN MEET & GREET. Space is limited to the first 300 fans on a first come first served basis (as per the event protocol)”'

class Event extends React.Component {
    constructor() {
        super();
        this.state = {
            Ev
        }
    }
    render() {
        return (
            <div className="Event-class">
                <Sidebar />
                <div className="event-card">
                    {
                        this.state.Ev.map(ev =>
                            <div className="event-element">
                                <div className="event-pic">
                                    <img className="event-inv" src={ev.eventpic} alt={ev.eventdisc} />
                                </div>
                                <div className="texts-ievent">
                                    <div className="event-title">
                                        {txt}
                                    </div>
                                    <div className="event-location">
                                        <img className="location-img" src={iconlocation} alt="" />
                                        <div className="location">
                                            {ev.eventLocation}
                                        </div>
                                    </div>
                                    <div className="event-data">
                                        <img className='calander-img' src={iconcalander} alt="" />
                                        <div className="data">
                                            {ev.eventdata}
                                        </div>
                                    </div>
                                    <div className="event-book">
                                        <img className="book-img" src={iconbook} alt="" />
                                        <div className="book">{ev.eventdisc}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        );
    }
}
export default Event;
