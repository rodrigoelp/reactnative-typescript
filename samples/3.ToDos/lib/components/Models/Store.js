"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SystemTypes_1 = require("../SystemTypes");
class Store {
    constructor() {
        this.allItems = new Array();
    }
    static createNewItem() {
        return {
            id: SystemTypes_1.guid.newGuid(),
            title: "",
        };
    }
    add(newItem) {
        this.allItems = this.allItems.concat(newItem);
    }
    drop(item) {
        this.allItems = this.allItems.filter((i) => i.id !== item.id);
    }
    replace(item) {
        this.allItems = this.allItems
            .filter((i) => i.id !== item.id)
            .concat(item);
    }
    getAll() { return this.allItems; }
}
exports.Store = Store;
//# sourceMappingURL=Store.js.map