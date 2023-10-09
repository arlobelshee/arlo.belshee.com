google.charts.load('52', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
	for (const target of document.getElementsByClassName('google_chart')) {
		var data = new google.visualization.DataTable();
		const cols = JSON.parse(target.getAttribute('data-cols'));
		for (col of cols) {
			data.addColumn(...col);
		}
		const rows = JSON.parse(target.getAttribute('data-rows'));
		data.addRows(rows);

		const title = target.getAttribute('data-title');
		const options = JSON.parse(target.getAttribute('data-options') || '{}');
		const chart_options = {
			title: title,
			legend: { position: 'bottom' },
			series: [{ color: 'blue' }, { color: 'olive' }, { color: 'goldenrod' }],
			width: target.clientWidth - 4,
			height: 150,
		};
		Object.assign(chart_options, options);
		const chart_type = target.getAttribute('data-type');
		const chart = new google.visualization[chart_type](target);
		chart.draw(data, chart_options);
	}
}
