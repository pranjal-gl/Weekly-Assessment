import React from 'react';
import data from './response'
import OpenComponent from './OpenComponent';
import ClosedComponent from './ClosedComponent';

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //whole data is being stored in tickets
            tickets: data,
            // further differentiating open and closed ticked
            openTicket: [], 
            closedTicket: []
        }
    }

    //Utility methods for differentiating open and closed tickets
    getOpenTicket = () => {
        const result = this.state.tickets.filter((item)=>item.ticketStatus == 'open');
        return result;
    }
    getClosedTicket = () => {
        const result = this.state.tickets.filter((item)=>item.ticketStatus == 'closed');
        return result;
    }

    // Toggle methods to change the state from open to Close
    closedTicket = (itemid) => {
        const summary = prompt("Enter the closing summary...");
        // console.log(summary );
        const temp=[...this.state.tickets]
        const obj=temp.find((item)=>item.ticketID===itemid)
        obj.ticketStatus = 'closed'
        obj.ticketSummary = summary;
        this.setState({tickets:temp});
        console.log("closed ticket called");
    }
    // Toggle methods to change the state from close to open
    reOpenTicket = (itemid) => {
        const temp=[...this.state.tickets]
        const obj=temp.find((item)=>item.ticketID===itemid)
        obj.ticketStatus = 'open'
        this.setState({tickets:temp}) 
        console.log("re-open ticket called");
    }

    render() {
        return(
            <div>
                <OpenComponent data = {this.getOpenTicket} closedTicket = {this.closedTicket}></OpenComponent>
                <ClosedComponent data = {this.getClosedTicket} reOpenTicket = {this.reOpenTicket}></ClosedComponent>
            </div>
        )
    }
}
export default Parent;
