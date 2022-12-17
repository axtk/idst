# idst

Immutable data store for React apps with [*immer*](https://www.npmjs.com/package/immer) under the hood.

- Wrap up shared data into `new Store(data)`, put it into a React Context;
- Read, update, and subscribe to updates in the store via `const [state, setState] = useStore(store);`
- Have as many stores as needed.

## Example

```jsx
import {createContext} from 'react';
import {Store} from 'idst';

export const AppContext = createContext(new Store({counter: 0}));
```

```jsx
import {useContext} from 'react';
import {useStore} from 'idst';

export const Display = () => {
    const store = useContext(AppContext);
    const [state] = useStore(store);

    return <span>{state.counter}</span>;
};
```

```jsx
import {useContext} from 'react';
import {useStore} from 'idst';

export const PlusButton = () => {
    const store = useContext(AppContext);
    // adding `false` to turn off the subscription to changes here
    const [, setState] = useStore(store, false);

    const handleClick = () => {
        // `draftState` acts like a mutable for convenience and passes
        // the updates to the immutable store state under the hood
        setState(draftState => {
            draftState.counter++;
        });
    };

    return <button onClick={handleClick}>+</button>;
};
```

```jsx
import {createRoot} from 'react-dom/client';
import {Store} from 'idst';

const App = () => <div><PlusButton/> <Display/></div>;

createRoot(document.querySelector('#app')).render(
    <AppContext.Provider value={new Store({counter: 42})}>
        <App/>
    </AppContext.Provider>
);
```
