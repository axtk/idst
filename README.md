# idst

Immutable data store for React apps with [*immer*](https://www.npmjs.com/package/immer) under the hood.

## Example

```jsx
import { createContext } from 'react';
import { Store } from 'idst';

export const AppContext = createContext(new Store({ counter: 0 }));
```

```jsx
import { useContext } from 'react';
import { useStore } from 'idst';

export const Display = () => {
    // the `useStore()` hook subscribes the component to changes
    // in the store retrieved from `AppContext`
    const [state] = useStore(useContext(AppContext));

    return <span>{state.counter}</span>;
};
```

```jsx
import { useContext } from 'react';
import { useStore } from 'idst';

export const PlusButton = () => {
    // since this component doesn't require the current store state
    // we can turn off the subscription to changes by adding `false`
    const [, setState] = useStore(useContext(AppContext), false);

    const handleClick = () => {
        setState(draftState => {
            // `draftState` acts as a mutable reflection of the store
            // state for convenience, while the store state itself
            // remains immutable (the trick provided by `immer`)
            draftState.counter++;
        });
    };

    return <button onClick={handleClick}>+</button>;
};
```

```jsx
import { createRoot } from 'react-dom/client';
import { Store } from 'idst';

const App = () => <div><PlusButton/> <Display/></div>;

createRoot(document.querySelector('#app')).render(
    <AppContext.Provider value={new Store({ counter: 42 })}>
        <App/>
    </AppContext.Provider>
);
```

A React app can have a single store or multiple stores, whether in a single React Context or in separate Contexts.
