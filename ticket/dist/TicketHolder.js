"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketHolder = void 0;
const TicketOrderBy_1 = require("./TicketOrderBy");
class TicketHolder {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items = this.items.concat(item);
    }
    getItemsOrderBy(orderBy) {
        let result;
        if (orderBy == TicketOrderBy_1.TicketOrderBy.destination) {
            result = this.items.sort((obj1, obj2) => {
                if (obj1.destination > obj2.destination) {
                    return 1;
                }
                if (obj1.destination < obj2.destination) {
                    return -1;
                }
                return 0;
            });
        }
        return result;
    }
}
exports.TicketHolder = TicketHolder;
//# sourceMappingURL=TicketHolder.js.map