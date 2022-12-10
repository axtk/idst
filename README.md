# idst

Immutable data store for React apps with [`immer`](https://www.npmjs.com/package/immer) under the hood.

## Example

```jsx
import {createContext, useContext} from 'react';
import {Store, useStore} from 'idst';
import {createRoot} from 'react-dom/client';

const AppContext = createContext({});

const Display = () => {
    const [state] = useStore(useContext(AppContext));

    return <span>{state.counter}</span>;
};

const PlusButton = () => {
    const [, setState] = useStore(useContext(AppContext), false);

    const handleClick = () => {
        setState(draftState => {
            draftState.counter++;
        });
    };

    return <button onClick={handleClick}>+</button>;
};

const App = () => <div><PlusButton/> <Display/></div>;

createRoot(document.querySelector('#app')).render(
    <AppContext.Provider value={new Store({counter: 42})}>
        <App/>
    </AppContext.Provider>
);
```

A React app can have a single store or multiple stores, whether in a single React Context or in separate Contexts.
