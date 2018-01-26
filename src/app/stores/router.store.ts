import { Injectable } from '@angular/core';
import { isObservable, whyRun, observable, autorun, computed, action, reaction, when, toJS, useStrict } from 'mobx';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

useStrict(true);


@Injectable()
export class RouterStore {
    @observable url = '';
    constructor(private router: Router) {
        router.events.subscribe(this.routeListener);
    }
    @action private routeListener = (event: RouterEvent) => {
        if (event instanceof NavigationEnd) {
            this.url = event.urlAfterRedirects;
        }
    }
    @action navigate(url: string) {
        return this.router.navigate([url]);
    }

}
