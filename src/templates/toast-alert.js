Handlebars.registerPartial('toast-alert', Handlebars.compile(`
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
        {{#if successful}}
            <i class="bi bi-check2-circle text-success"></i>
        {{/if}}
        {{#unless successful}}
            <i class="bi bi-exclamation-diamond text-danger"></i>
        {{/unless}}
    <strong class="me-auto">{{headerMain}}</strong>
    <small>{{headerSecondary}}</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
        {{body}}
    </div>
</div>
`));