import { Injectable } from '@angular/core';
import { isObservable, whyRun, observable, autorun, computed, action, reaction, when, toJS, useStrict } from 'mobx';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';



const routeNames = {
    '/home': 'Home',
    '': 'Home',
    '/start': 'Start'
};
@Injectable()
export class RouterStore {
    @observable url = '';

    @computed get routeName() {
        return routeNames[this.url] || '';
    }
    constructor(private router: Router) {
        router.events.filter((event) => event instanceof NavigationEnd).subscribe(this.routeListener);
    }
    @action private routeListener = (event: NavigationEnd) => {
        this.url = event.urlAfterRedirects;
    }
    @action navigate(url: string) {
        return this.router.navigate([url]);
    }

}
