window.onload = (event) => {
  handleRoute();
};

function handleRoute() {
  // Get route from URL bar.
  // Get appropriate html (include HX-Request header)
  var url = new URL(document.location);
  var path = "/home"
  if (url.pathname != "/") {
    path = url.pathname;
  }
  var mainContainer = document.getElementById('content');

  //TODO: check for HB partial otherwise, HTML req
  const req = new XMLHttpRequest();
  req.addEventListener("load", function () {
    mainContainer.innerHTML = this.responseText;
    htmx.process(mainContainer.firstChild);
  });
  req.open("GET", path);
  req.setRequestHeader("HX-Request", "true");
  req.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
  req.send();

}

class HxComponent {
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

function postTheToast(successful, headerMain, headerSecondary, body) {
    let toast = Handlebars.partials['toast-alert']({ successful, headerMain, headerSecondary, body });
    document.getElementById("toastContainer").innerHTML = toast;
    const toastElem = document.querySelector("#toastContainer .toast");
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastElem);
    toastBootstrap.show();
}