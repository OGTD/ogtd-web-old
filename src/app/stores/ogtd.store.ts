import { Injectable } from '@angular/core';
import { isObservable, observable, autorun, computed, action, reaction, toJS, IObservableArray, Atom } from 'mobx';
import * as Fuse from 'fuse.js';
import { OGTDDatabaseService } from '../services/ogtdDatabase.service';
import { IInBasketItem, OGTDType } from '../services/ogtdTypes';


@Injectable()
export class OGTDStore {
    constructor(private db: OGTDDatabaseService) {
    }
    @observable started = false;
    @observable inBasket = [];
    @observable tasks = [];
    /*
    @computed get index() {
        // peek creates a read only view therefore increasing performance, adding peek to tasks decreases performance (tested it)
        return (<IObservableArray<{ text: string }>>this.inBasket).peek().concat(this.tasks);
    }
    */
    @action start() {
        this.started = true;
    }
    @action addToBasket(content: string) {
        const item: IInBasketItem = {
            createdTimestamp: Date.now(),
            editedTimestamp: Date.now(),
            content,
            references: [],
            type: OGTDType.IN_BASKET_ITEM,
        };
        this.db.in.add(item);
    }
    @action addToTasks(a) {
        this.tasks.push(a);
    }
}
/*
fuse works with mobx storage :D
const ogtd = new OGTDStore();
let fuse: Fuse;
ogtd.addToBasket({ text: 'hello' });
ogtd.test();
fuse = new Fuse(ogtd.index, { keys: ['text'] });
console.log((<any>fuse.search('hello')).map(toJS));
*/
