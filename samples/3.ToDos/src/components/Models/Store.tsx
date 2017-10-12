import { ITodoItem } from "../Interfaces";
import { guid } from "../SystemTypes";

export class Store {

    public static createNewItem(): ITodoItem {
        return {
            id: guid.newGuid(),
            title: "",
        };
    }

    private allItems = new Array<ITodoItem>();

    public add(newItem: ITodoItem) {
        this.allItems = this.allItems.concat(newItem);
    }

    public drop(item: ITodoItem) {
        this.allItems = this.allItems.filter((i) => i.id !== item.id);
    }

    public replace(item: ITodoItem) {
        this.allItems = this.allItems
            .filter((i) => i.id !== item.id)
            .concat(item);
    }

    public getAll(): ITodoItem[] { return this.allItems; }
}
