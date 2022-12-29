# idst

*<ins>I</ins>mmutable <ins>d</ins>ata <ins>st</ins>ore for React apps*

## Purpose

Sharing data across React components by means of a single new hook in a fashion similar to the React's `useState()` hook for local state.

## Exports

`Store`, `useStore`.

## Usage

🔹 Wrap up shared data into `new Store(data)`, put it into a React Context;

🔹 Read and subscribe to updates in the store:
```js
const [state, setState] = useStore(store);
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
