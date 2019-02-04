import { colors } from "./colors";

export const groupedBarData = {
	labels: ["Qty", "More", "Sold", "Restocking", "Misc"],
	datasets: [
		{
			label: "Dataset 1",
			backgroundColors: [colors[0]],
			data: [
				65000,
				-29123,
				-35213,
				51213,
				16932
			]
		},
		{
			label: "Dataset 2",
			backgroundColors: [colors[1]],
			data: [
				32432,
				-21312,
				-56456,
				-21312,
				34234
			]
		},
		{
			label: "Dataset 3",
			backgroundColors: [colors[2]],
			data: [
				-12312,
				23232,
				34232,
				-12312,
				-34234
			]
		},
		{
			label: "Dataset 4",
			backgroundColors: [colors[3]],
			data: [
				-32423,
				21313,
				64353,
				24134,
				32423
			]
		}
	]
};

export const groupedBarOptions = {
	scales: {
		x: {
			title: "2018 Annual Sales Figures",
		},
		y: {
			formatter: axisValue => `${axisValue / 1000}k`,
			yMaxAdjuster: yMaxValue => yMaxValue * 1.1,
		},
		y2: {
			ticks: {
				max: 1,
				min: 0
			},
			formatter: axisValue => `${axisValue * 100}%`
		}
	},
	legendClickable: true,
	containerResizable: true
};

// Simple bar
export const simpleBarData = {
	labels: ["0-100cm", "100-200cm", "200-300cm", "300-400cm", "400-500cm", "500-600cm", "700-800cm", "800-900cm", "900+cm"],
	datasets: [
		{
			label: "Ultrasound Range",
			backgroundColors: colors,
			data: (new Array(10)).fill(0)
		}
	]
};

export const simpleBarOptions = {
	accessibility: false,
	scales: {
		x: {
			title: "Time",
		},
		y: {
			formatter: axisValue => `${axisValue / 1000}k`,
			yMaxAdjuster: yMaxValue => yMaxValue * 1.1,
			stacked: false
		}
	},
	legendClickable: true,
	containerResizable: true
};

// Stacked bar
export const stackedBarData = {
	labels: ["Qty", "More", "Sold", "Restocking", "Misc"],
	datasets: [
		{
			label: "Dataset 1",
			backgroundColors: [colors[0]],
			data: [
				65000,
				29123,
				35213,
				51213,
				16932
			]
		},
		{
			label: "Dataset 2",
			backgroundColors: [colors[1]],
			data: [
				32432,
				21312,
				56456,
				21312,
				34234
			]
		},
		{
			label: "Dataset 3",
			backgroundColors: [colors[2]],
			data: [
				12312,
				23232,
				34232,
				12312,
				34234
			]
		},
		{
			label: "Dataset 4",
			backgroundColors: [colors[3]],
			data: [
				32423,
				21313,
				64353,
				24134,
				32423
			]
		}
	]
};

export const stackedBarOptions = {
	accessibility: false,
	scales: {
		x: {
			title: "2018 Annual Sales Figures",
		},
		y: {
			formatter: axisValue => `${axisValue / 1000}k`,
			yMaxAdjuster: yMaxValue => yMaxValue * 1.1,
			stacked: true
		}
	},
	legendClickable: true,
	containerResizable: true
};
