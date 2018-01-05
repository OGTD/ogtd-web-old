import { Injectable } from '@angular/core';
import { isObservable, whyRun, observable, autorun, computed, action, reaction, when, toJS, useStrict } from 'mobx';

useStrict(true);


@Injectable()
export class GlobalUIStore {
    @observable sidebarOpen = false;

    @computed get test() {
        return !this.sidebarOpen;
    }
    @action setSidebarOpen(open: boolean) {
        this.sidebarOpen = open;
    }
}
