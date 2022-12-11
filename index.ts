import {useEffect, useMemo, useState} from 'react';
import {produce, Draft} from 'immer';
import {EventManager} from 'evtm';

export type UpdateStoreState<T> = (draft: Draft<T>) => Draft<T> | void;
export type SetStoreState<T> = (updateState: UpdateStoreState<T>) => void;

export const STORE_UPDATED = 'updated';

export class Store<T> {
    state: T;
    evtm: EventManager;
    constructor(data: T) {
        this.state = data;
        this.evtm = new EventManager();
    }
    onUpdate(callback: () => void) {
        return this.evtm.addListener(STORE_UPDATED, callback);
    }
    getState() {
        return this.state;
    }
    setState(updateState: UpdateStoreState<T>) {
        this.state = produce<T>(this.state, updateState);
        this.evtm.dispatch(STORE_UPDATED);
    }
}

export function useStore<T>(store: Store<T>, subscribes = true): [T, SetStoreState<T>] {
    let [, setRevision] = useState(-1);

    let state = store.getState();
    let setState = useMemo(() => store.setState.bind(store), [store]);

    useEffect(() => {
        if (!subscribes)
            return;

        let listener = store.onUpdate(() => {
            setRevision(Math.random());
        });

        return () => listener.remove();
    }, [store, subscribes]);

    return [state, setState];
}
