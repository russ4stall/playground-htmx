// This extension handles the form submissions.
//
// Initially Lifted from: https://stackoverflow.com/questions/70043237/how-do-we-make-a-htmx-response-trigger-a-form-reset
// The original code used the 'htmx:beforeSwap' event but this extension never caught that event for some reason...
htmx.defineExtension('handle-form', {
    onEvent: function(name, event) {
        if (name !== 'htmx:afterOnLoad') return;
        //if (name !== 'htmx:beforeSwap') return;

        // Close modal if in modal
        // var modal = event.detail.elt.closest(".modal")
        // if (modal) {
        //     var bsModal = bootstrap.Modal.getInstance(modal);
        //     console.log(bsModal);
        //     bsModal.hide();
        // }

        if (!event.detail.successful) {
            // Create error toast
            postTheToast(false, "Error", "Something bad happened...", "Failed to post form.");
            return;
        };

        // Success toast
        postTheToast(true, "Yay!", "Something amazing happened.", "Successfully posted form.");

        const triggeringElt = event.detail.requestConfig.elt;
        if (!triggeringElt.closest('[hx-handle-form]') && !triggeringElt.closest('[data-hx-handle-form]'))
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