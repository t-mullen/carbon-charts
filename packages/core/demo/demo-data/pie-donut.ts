import { colors } from "./colors";

export const pieOptions = {
	accessibility: false,
	legendClickable: true,
	containerResizable: true,
	colors
};

export const donutOptions = {
	accessibility: false,
	legendClickable: true,
	containerResizable: true,
	colors,
	center: {
		label: "Products",
		number: 300000
	}
};

export const pieData = {
	labels: ["0-100cm", "0-200cm", "0-300cm", "0-400cm", "400cm+"],
	datasets: [
		{
			label: "Dataset 1",
			backgroundColors: colors,
			data: (new Array(5)).fill(1)
		}
	]
};
