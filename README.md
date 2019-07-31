# egg-view-htmling

egg view plugin for [htmling].

## Install

```bash
$ npm i egg-view-htmling --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.htmling = {
  enable: true,
  package: 'egg-view-htmling',
};

// {app_root}/config/config.default.js
exports.view = {
  mapping: {
    '.html': 'htmling',
  },
};

// htmling config
exports.htmling = {};
```

Create a htmling file

```js
// app/view/hello.html
hello {{data}}
```

Render it

```js
// app/controller/render.js
exports.htmling = async ctx => {
  await ctx.render('hello.html', {
    data: 'world',
  });
};
```


## License

[MIT](LICENSE)

[htmling]: https://github.com/codemix/htmling
