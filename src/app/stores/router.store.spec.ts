import { TestBed, inject, async } from '@angular/core/testing';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { autorun } from 'mobx';

import { RouterStore } from './router.store';
import { setImmediate } from 'timers';

const mockRouter = {
    events: new Subject<RouterEvent>(),
    url: '',
    navigate: function (urls: string[]) {
        this.url = urls.pop();
        this.events.next(new NavigationEnd(0, this.url, this.url));
    }
};
describe('RouterStore', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                RouterStore,
                { provide: Router, useValue: mockRouter }
            ]
        });
    });

    it('should be created', inject([RouterStore], (routerStore: RouterStore) => {
        expect(routerStore).toBeTruthy();
    }));
    it('should update the url observable ', async(inject([RouterStore], (routerStore: RouterStore) => {
        const url1 = 'foo';
        const url2 = 'bar';
        const router = TestBed.get(Router);
        const spy = jasmine.createSpy('routerSpy');
        const disposer = autorun(() => {
            spy(routerStore.url);
        });
        router.events.next(new NavigationEnd(0, 'invalid', url1));
        router.events.next(new NavigationEnd(0, 'invalid', url2));
        expect(spy).toHaveBeenCalledTimes(3);
        expect(spy.calls.argsFor(0)).toEqual(['']);
        expect(spy.calls.argsFor(1)).toEqual([url1]);
        expect(spy.calls.argsFor(2)).toEqual([url2]);
        expect(spy).not.toHaveBeenCalledWith('invalid');
        disposer();
    })));
    it('should navigate to the given urls', async(inject([RouterStore], (routerStore: RouterStore) => {
        const url1 = 'foo';
        const url2 = 'bar';
        const spy = jasmine.createSpy('routerSpy');
        const dispose = autorun(() => {
            spy(routerStore.url);
        });
        routerStore.navigate(url1);
        routerStore.navigate(url2);
        expect(spy).toHaveBeenCalledTimes(3);
        expect(spy.calls.argsFor(0)).toEqual(['']);
        expect(spy.calls.argsFor(1)).toEqual([url1]);
        expect(spy.calls.argsFor(2)).toEqual([url2]);
        expect(spy).not.toHaveBeenCalledWith('invalid');
        dispose();
    })));
});
