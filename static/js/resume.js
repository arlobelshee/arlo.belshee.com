google.charts.load('52', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
	for (const target of document.getElementsByClassName('google_chart')) {
		var data = new google.visualization.DataTable();
		data.addColumn('string', 'Topping');
		data.addColumn('number', 'Slices');
		data.addRows([
			['Mushrooms', 3],
			['Onions', 1],
			['Olives', 1],
			['Zucchini', 1],
			['Pepperoni', 2]
		]);

		var barchart_options = {
			title: 'Barchart: How Much Pizza I Ate Last Night',
			legend: 'none'
		};
		var barchart = new google.visualization.BarChart(target);
		barchart.draw(data, barchart_options);
	}
}
