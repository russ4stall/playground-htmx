window.onload = (event) => {
  htmx.config.getCacheBusterParam = true;

  handleRoute();
};

function handleRoute() {
  // Get route from URL bar.
  // Get appropriate html (include HX-Request header)
  var url = new URL(document.location);
  var path = "/home"
  if (url.pathname != "/")
    path = url.pathname;

  htmx.ajax('GET', path, '#content');
}

class HxComponent {
    constructor(templateName, template) {
      this.templateName = templateName;
      this.template = template;
      this.renderTemplate = Handlebars.compile(this.template);
      Handlebars.registerPartial(this.templateName, this.renderTemplate);
      console.log(`Registered partial: ${this.templateName}`);
    }
}

// RF: I've replaced this with a custom htmx extension found in 'reset-on-success.js'
// document.body.addEventListener('htmx:afterSwap', function(evt) {
//     // Reset forms
//     if (evt.detail.requestConfig.elt instanceof HTMLFormElement) {
//         evt.detail.requestConfig.elt.reset();
//     }
// });

function postTheToast(successful, headerMain, headerSecondary, body) {
    let toast = Handlebars.partials['toast-alert']({ successful, headerMain, headerSecondary, body });
    document.getElementById("toastContainer").innerHTML = toast;
    const toastElem = document.querySelector("#toastContainer .toast");
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastElem);
    toastBootstrap.show();
}

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