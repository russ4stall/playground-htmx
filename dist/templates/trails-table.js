new HxComponent('trails-table', `
<table class="table">
    <thead>
        <th>Name</th>
        <th>State Forest</th>
        <th>Mileage</th>
    </thead>
    <tbody>
        {{#each this}}
        <tr>
            <td>{{name}}</td>
            <td>{{stateForestName}}</td>
            <td>{{length}}</td>
        </tr>
        {{/each}}
    </tbody>
</table>
`);