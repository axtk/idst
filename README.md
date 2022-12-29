# idst

*<ins>I</ins>mmutable <ins>d</ins>ata <ins>st</ins>ore for React apps*

## Purpose

Using data shared across React components in a simple way similar to React's `useState()`.

## Usage

🔹 Wrap up shared data into `new Store(data)` imported from this package, put it into a React Context;

🔹 Read and subscribe to updates in the store:

```js
import {useStore} from 'idst';

let [state, setState] = useStore(store);
```

Call `useStore(store, false)` to get `[state, setState]` without subscribing to updates in the store.

🔹 Update parts of the shared data:

```js
setState({x: 10});
setState(state => ({x: state.x + 5}));
```

🔹 Have as many stores as needed.

---

[Live demo](https://codesandbox.io/s/bi94de)

See also [*idstm*](https://www.npmjs.com/package/idstm), an immutable store with a <ins>m</ins>utable interface of `setState()`.<br>
(*idstm*'s `setState()` is handier when it comes to changing nested properties in the state and it generally results in a more concise code, but it comes with an extra dependency.)
