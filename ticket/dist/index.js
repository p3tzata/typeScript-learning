"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ticket_1 = require("./Ticket");
const TicketOrderBy_1 = require("./TicketOrderBy");
const TicketHolder_1 = require("./TicketHolder");
let ticketHolder = new TicketHolder_1.TicketHolder();
ticketHolder.addItem(new Ticket_1.Ticket("New York", 33, "arrived"));
ticketHolder.addItem(new Ticket_1.Ticket("Aitos", 33, "arrived"));
ticketHolder.addItem(new Ticket_1.Ticket("Plovdiv", 33, "arrived"));
console.log("---");
console.log(ticketHolder.getItemsOrderBy(TicketOrderBy_1.TicketOrderBy.destination));
//# sourceMappingURL=index.js.map