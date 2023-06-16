htmx.defineExtension('bs-modal', {
    onEvent: function(name, event) {
        if (name !== 'htmx:afterOnLoad') return;

        var resp = event.detail.xhr.response;
        var tmpDiv = document.createElement('div');
        tmpDiv.innerHTML = resp;
        var modal = new bootstrap.Modal(tmpDiv.firstChild);
        modal.show();
    }
});