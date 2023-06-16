Handlebars.registerPartial('edit-hike-log-form', Handlebars.compile(`
<form hx-put="https://trails.apps.fourscorepicks.com/api/hike-logs/{{id}}"
    hx-ext='json-enc, handle-form, client-side-templates'
    hx-target="#hikeLogRow{{id}}"
    hx-swap="outerHTML"
    handlebars-template="hike-log-row"
    hx-handle-form>
    <input type="hidden" name="id" id="id" value="{{id}}">

<div class="modal-header">
    <h1 class="modal-title fs-5">Edit Hike</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>

<div class="modal-body">
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="name" name="name" value="{{name}}" autofocus>
        <label for="name">Name</label>
    </div>
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="trail" name="trail" value="{{trail}}">
        <label for="trail">Trail</label>
    </div>
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="length" name="length" value="{{length}}">
        <label for="length">Length</label>
    </div>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
</div>
</form>

`));