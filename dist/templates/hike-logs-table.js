new HxComponent("hike-logs-table", `
    <table id="HikeLogsTable" class="table table-bordered border-primary">
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Trail</th>
            <th>Length</th>
            <th></th>
        </thead>
        <tbody>
            {{#each this as |hikeLog|}}
                {{> hike-log-row hikeLog}}
            {{/each}}
        </tbody>
    </table>
`);