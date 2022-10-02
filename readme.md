# docready

Run a function when the DOM finishes loading.

Similar to [jQuery](https://jquery.com/)'s [`$(document).ready()`](https://api.jquery.com/ready/), but as a small, standalone function.

[Demo](https://raw.githack.com/jfriend00/docReady/master/docreadytest.html)

## Install

With a script tag:

```html
<script src="https://cdn.jsdelivr.net/gh/jfriend00/docReady@master/docready.min.js"></script>
```

## Usage

```js
docReady(() => {
    // Document is ready
});
```

```js
// Pass a value to the function
docReady(unicorn => {
    // Document is ready
    // unicorn === '🦄'
}, '🦄');
```

## API

Each function will be called in the order that they are provided to `docReady()` when the DOM has fininshed being parsed and is ready for manipulation.

If you call `docReady()` while the DOM is already ready, the callback with be executed as soon as the current thread of execution finishes by using `setTimeout(fn, 1)`.

## Browser support

Tested to be working in the following browsers:

- IE6+
- Firefox 3.6+
- Chrome 14+
- Safari 5.1+
- Opera 11.6+
