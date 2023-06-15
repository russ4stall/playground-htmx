Handlebars.registerPartial('hike-log-row', Handlebars.compile(`
<tr>
    <td>{{id}}</td>
    <td>{{name}}</td>
    <td>{{trail}}</td>
    <td>{{length}}</td>
</tr>
`));