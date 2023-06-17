new HxComponent("sync-trails-btn", `
    <table id="HikeLogsTable" class="table">
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