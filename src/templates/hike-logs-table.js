new HandlebarsPartial("hike-logs-table", `
    <table id="HikeLogsTable" class="table">
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Trail</th>
            <th>Length</th>
        </thead>
        <tbody>
            {{#each this as |hikeLog|}}
                {{> hike-log-row hikeLog}}
            {{/each}}
        </tbody>
    </table>
`);