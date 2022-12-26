# idst

*<ins>I</ins>mmutable <ins>d</ins>ata <ins>st</ins>ore for React apps*

🔹 Wrap up shared data into `new Store(data)`, put it into a React Context;

🔹 Read and subscribe to updates in the store:
```js
const [state, setState] = useStore(store);
```

🔹 Update parts of the shared data:
```js
setState({x: 10});
setState(state => ({x: state.x + 5}));
```

🔹 Have as many stores as needed.

See also [*idstm*](https://www.npmjs.com/package/idstm), an immutable store with a <ins>m</ins>utable interface of `setState()`.

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
        setState(state => ({
            counter: state.counter + 1,
        }));
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
