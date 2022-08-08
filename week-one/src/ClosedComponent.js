import React from 'react';
import './closedComponent.css'
class ClosedComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //Only closed tickets are filtered here
            openTickets: this.props.data
        }

    }

    render() {
        const borderstyle={
            borderStyle:'double',
            backgroundColor:'green'
        }
        return(
            <div className='closed-div'>
                <h2>Closed Tickets</h2>
                {
                    this.props.data().map((item)=>(
                        <div style={borderstyle} className="card-div">
                            <h3>Ticket ID: {item.ticketID}</h3>      
                            <span>Closing Summary: {item.ticketSummary}</span>
                            <div className="btn-div">
                                <button onClick={()=>this.props.reOpenTicket(item.ticketID)}>
                                    Re-open
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ClosedComponent