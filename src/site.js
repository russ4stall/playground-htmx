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

function fetchTrails() {
    fetch('https://trails.apps.fourscorepicks.com/trails')
        .then(res => res.json())
        .then((out) => {
            var html = `<table class="table">
                <thead>
                    <th>Name</th>
                    <th>Forest</th>
                    <th>Length</th>
                    <th></th>
                </thead>`;
            
            for(var i=0; i<out.length; i++) {
                html = html +
                `<tr>
                    <td>${out[i].name}</td>
                    <td>${out[i].stateForestName}</td>
                    <td>${out[i].length}</td>
                    <td>${JSON.stringify(out[i])}</td>
                </tr>`;
            }

            html = html + '</table>';
            document.querySelector('#fill-me-up').innerHTML = html;
        })
        .catch(err => console.error(err));
}