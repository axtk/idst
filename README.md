# idst

*<ins>I</ins>mmutable <ins>d</ins>ata <ins>st</ins>ore for React apps*

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

[Live example](https://codesandbox.io/s/bi94de)

See also [*idstm*](https://www.npmjs.com/package/idstm), an immutable store with a <ins>m</ins>utable interface of `setState()`.
