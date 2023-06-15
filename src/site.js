class HandlebarsPartial {
    constructor(templateName, template) {
      this.templateName = templateName;
      this.template = template;
      this.renderTemplate = Handlebars.compile(this.template);
      Handlebars.registerPartial(this.templateName, this.renderTemplate);
    }
}

// RF: I've replaced this with a custom htmx extension found in 'reset-on-success.js'
// document.body.addEventListener('htmx:afterSwap', function(evt) {
//     // Reset forms
//     if (evt.detail.requestConfig.elt instanceof HTMLFormElement) {
//         evt.detail.requestConfig.elt.reset();
//     }
// });