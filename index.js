let statuses = ["HOLD", "Completed", "WIP", "OPEN"]
for (let i = 0; i < 20; i++) {

    let random_status = Math.floor((Math.random() * statuses.length - 1) + 1);
    document.getElementById("boxes").innerHTML += `
                    <div class="box ${statuses[random_status].toLowerCase()}">
            <div class="box-title">
                <p class="box-status">${statuses[random_status]}</p>
                <p>767 N149</p>
                <p>A-28-WO-</p>
            </div>
            <div class="box-content">
                APU SURGE VALVE FILTER ELEMENT (ETOPS)
            </div>
            <table class="box-table">
                <tr>
                    <th>Completion</th>
                    <th>Code</th>
                    <th>AD</th>
                </tr>
                <tr>
                    <td>12%</td>
                    <td>MRO TE 1475</td>
                    <td>2010-23-03</td>
                </tr>
            </table>
        </div>
            `
};