/* global firebase */

import {
	BarChart,
	LineChart,
	PieChart,
	DonutChart,
	ComboChart
} from "../src/index";

const {
	// Bar
	groupedBarOptions,
	groupedBarData,
	simpleBarOptions,
	simpleBarData,
	stackedBarData,
	stackedBarOptions,
	// Pie & donut
	pieOptions,
	pieData,
	donutOptions,
	// Line
	curvedLineOptions,
	curvedLineData,
	lineData,
	lineOptions,
	// Combo
	comboData,
	comboOptions
} = require("./demo-data/index");

// Styles
import "./index.scss";
import { colors } from "./demo-data/colors";

window['start'] = function (firebase) {
	const lineChart = new LineChart(
		document.querySelector('#line'),
		{
			data: curvedLineData,
			options: Object.assign({}, curvedLineOptions, {type: 'line'}),
		})

	const barChart = new BarChart(
		document.querySelector('#bar'),
		{
			data: simpleBarData,
			options: Object.assign({}, simpleBarOptions, {type: 'bar'}),
		})

	const runningLabels = (new Array(20)).fill(0).map((v, i) => i)
	const runningData = (new Array(20)).fill(0)

	const runningHistogram = (new Array(10)).fill(0)
	var throttled = false
	function addDataPoint (dataPoint) {
		if (throttled) return
		throttled = true
		setTimeout(() => {
			throttled = false
		}, 400)

		runningLabels.shift()
		runningData.shift()
		runningLabels.push(runningLabels[runningLabels.length - 1] + 1)
		runningData.push(dataPoint)
		runningHistogram[Math.min(
			runningHistogram.length - 1,
			Math.floor(runningHistogram.length*dataPoint / 1000)
		)]++

		lineChart.setData({
			labels: runningLabels,
			datasets: [
				{
					label: "Ultrasound Range",
					backgroundColors: [colors[0]],
					data: runningData
				}
			]
		})
		barChart.setData({
			labels: simpleBarData.labels,
			datasets: [
				{
					label: "Ultrasound Range",
					backgroundColors: [colors[1]],
					data: runningHistogram
				}
			]
		})
	}

	var config = {
		apiKey: "5BUtKXBIDmhRYnEZ3NwGMOpNU5ZOUoDcBOs5IvTH",
		authDomain: "https://capstone-24f0a.firebaseio.com",
		databaseURL: "https://capstone-24f0a.firebaseio.com",
		projectId: "capstone-24f0a"
	};
	firebase.initializeApp(config);
	const database = firebase.database();
	const values = firebase.database().ref('/sensor').on('child_added', (dataPoint) => {
		addDataPoint(dataPoint.range)
		dataPoint.ref.remove()
	})
	var i = 0
	setInterval(() => {
		i++
		addDataPoint(Math.random() * 1000)
	}, 10)
}