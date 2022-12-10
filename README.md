# idst

Immutable data store for React apps with [*immer*](https://www.npmjs.com/package/immer) under the hood.

## Example

```jsx
import { createContext } from 'react';

export const AppContext = createContext({});
```

```jsx
import { useContext } from 'react';
import { useStore } from 'idst';

export const Display = () => {
    const [state] = useStore(useContext(AppContext));

    return <span>{state.counter}</span>;
};
```

```jsx
import { useContext } from 'react';
import { useStore } from 'idst';

export const PlusButton = () => {
    const [, setState] = useStore(useContext(AppContext), false);

    const handleClick = () => {
        setState(draftState => {
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
    <AppContext.Provider value={new Store({counter: 42})}>
        <App/>
    </AppContext.Provider>
);
```

A React app can have a single store or multiple stores, whether in a single React Context or in separate Contexts.
