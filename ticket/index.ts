import { Ticket } from './Ticket';
import { TicketOrderBy } from './TicketOrderBy';
import { TicketHolder } from './TicketHolder';

let ticketHolder: TicketHolder = new TicketHolder();
ticketHolder.addItem(new Ticket("New York", 33, "arrived"));
ticketHolder.addItem(new Ticket("Aitos", 33, "arrived"));
ticketHolder.addItem(new Ticket("Plovdiv", 33, "arrived"));
console.log("---");
console.log(ticketHolder.getItemsOrderBy(TicketOrderBy.destination));