import { Injectable } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { isObservable, whyRun, observable, autorun, computed, action, reaction, when, toJS, useStrict } from 'mobx';
import { OGTDStore } from './ogtd.store';

useStrict(true);


@Injectable()
export class GlobalUIStore {
    constructor(private ogtd: OGTDStore, media: MediaMatcher) {
        const mobileQuery = media.matchMedia('(max-width: 600px)');
        mobileQuery.addListener(this.mediaQueryListener);
    }

    @observable private _sidebarOpen = false;
    @observable isMobile = false;


    @computed get sidebarOpen() {
        return this.ogtd.started && (!this.isMobile || this._sidebarOpen);
        // desktop always has the sidebar open but the sidebar should not be shown before setting up storage
    }

    @action private mediaQueryListener = (e) => {
        this.isMobile = e.matches;
    }
    @action setSidebarOpen(open: boolean) {
        this._sidebarOpen = open;
    }
}
