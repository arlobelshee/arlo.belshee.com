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

		var barchart_options = {
			title: 'Barchart: How Much Pizza I Ate Last Night',
			legend: 'none'
		};
		var barchart = new google.visualization.BarChart(target);
		barchart.draw(data, barchart_options);
	}
}
