htmx.defineExtension('client-side-templates', {
    transformResponse : function(text, xhr, elt) {

        var mustacheTemplate = htmx.closest(elt, "[mustache-template]");
        if (mustacheTemplate) {
            var data = JSON.parse(text);
            var templateId = mustacheTemplate.getAttribute('mustache-template');
            var template = htmx.find("#" + templateId);
            if (template) {
                return Mustache.render(template.innerHTML, data);
            } else {
                throw "Unknown mustache template: " + templateId;
            }
        }

        var handlebarsTemplate = htmx.closest(elt, "[handlebars-template]");
        if (handlebarsTemplate) {
            var data = JSON.parse(text);
            var templateId = handlebarsTemplate.getAttribute('handlebars-template');
            var templateElement = htmx.find('#' + templateId).innerHTML;
            var renderTemplate = Handlebars.compile(templateElement);
            if (renderTemplate) {
                return renderTemplate(data);
            } else {
                throw "Unknown handlebars template: " + templateId;
            }
        }

        var nunjucksTemplate = htmx.closest(elt, "[nunjucks-template]");
        if (nunjucksTemplate) {
            var data = JSON.parse(text);
            var templateName = nunjucksTemplate.getAttribute('nunjucks-template');
            var template = htmx.find('#' + templateName);
            if (template) {
                return nunjucks.renderString(template.innerHTML, data);
            } else {
                return nunjucks.render(templateName, data);
            }
          }

        return text;
    }
});
