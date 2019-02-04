import { colors } from "./colors";

export const curvedLineData = {
	labels: (new Array(20)).fill(0).map((v, i) => i),
	datasets: [
		{
			label: "Ultrasound Range",
			backgroundColors: [colors[0]],
			data: (new Array(20)).fill(0)
		}
	]
};

export const curvedLineOptions = {
	accessibility: false,
	scales: {
		x: {
			title: "Time",
		},
		y: {
			yMaxAdjuster: yMax => yMax * 1.2,
			yMinAdjuster: yMin => yMin * 1.2,
			formatter: axisValue => `${axisValue / 1000}k`
		},
		y2: {
			ticks: {
				max: 1,
				min: 0
			}
		}
	},
	curve: {
		name: "curveCatmullRom"
	},
	legendClickable: true,
	containerResizable: true
};


export const lineData = {
	labels: ["Qty", "More", "Sold", "Restocking", "Misc"],
	datasets: [
		{
			label: "Dataset 1",
			backgroundColors: [colors[0]],
			data: [
				2000,
				4200,
				7000,
				4000,
				19000
			]
		},
		{
			label: "Dataset 2",
			backgroundColors: [colors[1]],
			data: [
				0,
				10000,
				20000,
				30000,
				40000
			]
		},
		{
			label: "Dataset 3",
			backgroundColors: [colors[2]],
			data: [
				0,
				20000,
				40000,
				60000,
				80000
			]
		}
	]
};

export const lineOptions = {
	accessibility: false,
	scales: {
		x: {
			title: "2018 Annual Sales Figures",
		},
		y: {
			yMaxAdjuster: yMax => yMax * 1.2,
			yMinAdjuster: yMin => yMin * 1.2,
			formatter: axisValue => `${axisValue / 1000}k`,
			thresholds: [
				{
					range: [-20000, 30000],
					theme: "success"
				},
				{
					range: [30000, 40000],
					theme: "danger"
				},
				{
					range: [40000, 70000],
					theme: "warning"
				}
			]
		}
	},
	legendClickable: true,
	containerResizable: true
};
