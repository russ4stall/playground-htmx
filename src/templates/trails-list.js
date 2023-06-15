new HandlebarsPartial('trails-list', `
<ul class="list-group">
    {{#each this as |trail|}}
        {{> trail-list-item trail}}
    {{/each}}
</ul>
`);