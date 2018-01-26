import { Injectable } from '@angular/core';
import { isObservable, whyRun, observable, autorun, computed, action, reaction, when, toJS, useStrict } from 'mobx';

useStrict(true);


@Injectable()
export class OGTDStore {
    @observable started = false;

}
