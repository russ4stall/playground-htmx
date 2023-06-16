Handlebars.registerPartial('hike-log-row', Handlebars.compile(`
<tr id="hikeLogRow{{id}}">
    <td>{{id}}</td>
    <td>{{name}}</td>
    <td>{{trail}}</td>
    <td>{{length}}</td>
    <td>
        <a href="#" class="icon-link">
        <i class="bi bi-pencil"
            data-bs-toggle="modal"
            data-bs-target="#modalContainer"
            hx-get="https://trails.apps.fourscorepicks.com/api/hike-logs/{{id}}"
            hx-ext="client-side-templates"
            handlebars-template="edit-hike-log-form"
            hx-target="#modalContainer .modal-content">
        </i>
        </a>

        <a href="#" class="icon-link ms-3">
            <i class="bi bi-trash text-danger"
                hx-confirm="Are you sure you want to delete this hike for {{name}}?"
                hx-delete="https://trails.apps.fourscorepicks.com/api/hike-logs/{{id}}"
                hx-target="#hikeLogRow{{id}}">
            </i>
        </a>
    </td>
</tr>
`));