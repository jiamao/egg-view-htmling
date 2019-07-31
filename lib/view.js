'use strict';

const HTMLing = require('htmling');

module.exports = class HtmlingView {

  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
    this.config = ctx.app.config.htmling;
  }

  async render(filename, locals, viewOptions) {
    //const config = Object.assign({}, this.config, viewOptions, { filename });
    try {
        const template = HTMLing.file(filename);
        return Promise.resolve(template.render(locals));
      }
      catch(err) {
        return Promise.reject(err);
      }
  }

  renderString(tpl, locals, viewOptions) {
    // should disable cache when no filename
    //const config = Object.assign({}, this.config, viewOptions, { cache: null });
    try {
        const template = HTMLing.string(tpl);
      return Promise.resolve(template.render(locals));
    } catch (err) {
      return Promise.reject(err);
    }
  }

};