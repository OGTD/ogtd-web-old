import { Injectable } from '@angular/core';
import { isObservable, observable, autorun, computed, action, reaction, toJS, IObservableArray, Atom } from 'mobx';
import * as Fuse from 'fuse.js';
import { OGTDDatabaseService } from '../services/ogtdDatabase.service';
import { IInBasketItem, OGTDType, IOGTDItem } from '../services/ogtdTypes';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEventPattern';
import 'rxjs/add/operator/concatMap';
import { IDatabaseChange, DatabaseChangeType } from '../../typings.d';
import { Subscription } from 'rxjs/Subscription';

class DexieListObservable<T> {
    private atom: Atom;
    private list: T[] = [];
    private subscription: Subscription;
    constructor(private db: OGTDDatabaseService, private tableName: string, private keyname = 'uid', private errorHandler = console.error) {
        const tables = this.db.tables.map(table => table.name);
        if (tables.indexOf(tableName) === -1) {
            throw new Error('The provided table name is not in the database');
        }
        this.atom = new Atom(this.tableName + 'ListObservable',
            () => this.onBecomeObserved(),
            () => this.onBecomeUnObserved()
        );
        this.initialFetch().catch(errorHandler);
    }
    toArray() {
        this.atom.reportObserved();
        return this.list;
    }
    private initialFetch() {
        return this.db[this.tableName].toArray().then(arr => {
            this.list = arr;
            this.atom.reportChanged();
            return Promise.resolve();
        });
    }
    private onBecomeObserved() {
        this.initialFetch().then(() => {
            this.subscription = Observable.fromEventPattern(
                h => {
                    this.db.on('changes').subscribe(<(changes: IDatabaseChange[]) => void>h);
                },
                h => {
                    this.db.on('changes').unsubscribe(<(changes: IDatabaseChange[]) => void>h);
                })
                .concatMap((changes: IDatabaseChange[]) => changes)
                .filter(change => change.table === this.tableName).subscribe(change => {
                    switch (change.type) {
                        // If you get a error on this line it means that dixie hasn't
                        // been updated to the latest version yet more info: https://github.com/dfahlander/Dexie.js/pull/655
                        // Very easy to fix by hand
                        case DatabaseChangeType.Create:
                            this.list.push(change.obj);
                            break;
                        case DatabaseChangeType.Update:
                            for (const item of this.list) {
                                if (item[this.keyname] === change.key) {
                                    Object.assign(item, change.mods);
                                    break;
                                }
                            }
                            break;
                        case DatabaseChangeType.Delete:
                            for (let i = 0; i < this.list.length; i++) {
                                if (this.list[i][this.keyname] === change.key) {
                                    this.list.splice(i, 1);
                                    break;
                                }
                            }
                            break;
                    }
                    this.atom.reportChanged();
                });
        }).catch(this.errorHandler);
    }
    private onBecomeUnObserved() {
        this.subscription.unsubscribe();
    }
}

@Injectable()
export class OGTDStore {
    constructor(private db: OGTDDatabaseService) {
    }
    @observable started = false;
    inBasket = new DexieListObservable<IInBasketItem>(this.db, 'in');
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
