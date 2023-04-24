# idst

*React store for straightforward shared state management*

Dealing with shared state similarly to React's `useState()`.

## Usage

```js
import {Store, useStore} from 'idst';
```

- Wrap up shared data into `new Store(data)`, put it into a React Context;

- Pick the store from the context with the React's `useContext()` hook from within a component;

- Read the store state and subscribe to its updates: `let [state, setState] = useStore(store);` Alternatively, use `let [state, setState] = useStore(store, false);` (with the hook's second parameter) to turn off the subscription to store state updates;

- Update parts of the shared data: `setState({x: 10});` or `setState(state => ({x: state.x + 5}));`

- Have as many stores as needed.

[Live demo](https://codesandbox.io/s/bi94de)

See also [*idstm*](https://www.npmjs.com/package/idstm), an immutable store with a <ins>m</ins>utable interface of `setState()`.<br>
(*idstm*'s `setState()` is handier when it comes to changing nested properties in the state and it generally results in a more concise code, but it comes with an extra dependency.)

## Package name

The package name is the initialism for *<ins>i</ins>mmutable <ins>d</ins>ata <ins>st</ins>ore*.
