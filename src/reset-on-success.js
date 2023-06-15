// This extension resets the form after a successful load.
// Lifted from: https://stackoverflow.com/questions/70043237/how-do-we-make-a-htmx-response-trigger-a-form-reset
// The original code used the 'htmx:beforeSwap' event but this extension never caught that event for some reason...
htmx.defineExtension('reset-on-success', {
    onEvent: function(name, event) {
        if (name !== 'htmx:afterOnLoad') return;
        //if (name !== 'htmx:beforeSwap') return;
        if (event.detail.isError) return;

        const triggeringElt = event.detail.requestConfig.elt;
        if (!triggeringElt.closest('[hx-reset-on-success]') && !triggeringElt.closest('[data-hx-reset-on-success]'))
            return;

        switch (triggeringElt.tagName) {
            case 'INPUT':
            case 'TEXTAREA':
                triggeringElt.value = triggeringElt.defaultValue;
                break;
            case 'SELECT':
                //too much work
                break;
            case 'FORM':
                triggeringElt.reset();
                break;
        }
    }
});