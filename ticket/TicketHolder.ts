import { Ticket } from './Ticket';
import { TicketOrderBy } from './TicketOrderBy';

export class TicketHolder {

    items: Ticket[];
    constructor() {
        this.items = [];
    }

    addItem(item: Ticket): void {
        this.items = this.items.concat(item);
    }

    getItemsOrderBy(orderBy: TicketOrderBy): Ticket[] {


        let result: Ticket[];

        if (orderBy == TicketOrderBy.destination) {
            result = this.items.sort((obj1, obj2) => {

                if (obj1.destination > obj2.destination) {
                    return 1;
                }

                if (obj1.destination < obj2.destination) {
                    return -1;
                }

                return 0;

            })
        }

        return result;
      

    }


}