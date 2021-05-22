# babel-plugin-transform-safest-mode

> As a disclaimer, this transform is intended mostly as a joke.

Does your web app load too fast? Do you often encounter issues where code will just stop to work? This babel transform is the ultimate solution. Not only will it increase your file size, and thus make your app load like a proper important web app, but it also makes it less likely that your app will break.

How does it do that? It replaces all object member traversals and function calls with the [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) syntax, adding one or two characters per occurence.

## Example

Your source code:

```js
myApp.controller['best-method'](json.foreign.data[0]);
```

The resulting code:

```js
myApp?.controller?.['best-method']?.(json?.foreign?.data?.[0]);
```

Much better, and crucially, the safest!
