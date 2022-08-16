import React from 'react';
import './openComponent.css'
class OpenComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //Only open tickets are filtered here
            openTickets: this.props.data,
        }

    }
    
    
    render() {
        return (
            <div className='open-component'>
                <h2>Open Tickets</h2>
                {
                    // filtering only those items whose priority is 1 and rendering it
                    this.state.openTickets().filter(item => item.priority == 1).map((item) => (
                        <div>
                            <div className="priority-one">
                                <h3>Priority: {item.priority}</h3>
                                <h5>Ticket ID: {item.ticketID}</h5>
                                <span>Ticket Description: {item.ticketDesc}</span>
                                <div className="btn-div">
                                    <button onClick={() => this.props.closedTicket(item.ticketID)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                    
                }
                {
                    // filtering only those items whose priority is 2 and rendering it
                    this.state.openTickets().filter(item => item.priority == 2).map((item) => (
                        <div>
                            <div className="priority-two">
                                <h3>Priority: {item.priority}</h3>
                                <h5>Ticket ID: {item.ticketID}</h5>
                                <span>Ticket Description: {item.ticketDesc}</span>
                                <div className="btn-div">
                                    <button onClick={() => this.props.closedTicket(item.ticketID)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {
                    // filtering only those items whose priority is 3 and rendering it
                    this.state.openTickets().filter(item => item.priority == 3).map((item) => (
                        <div>
                            <div className="priority-three">
                                <h3>Priority: {item.priority}</h3> 
                                <h5>Ticket ID: {item.ticketID}</h5>
                                <span>Ticket Description: {item.ticketDesc}</span>
                                <div className="btn-div">
                                    <button  onClick={() => this.props.closedTicket(item.ticketID)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
            
        )
    }
}

export default OpenComponent