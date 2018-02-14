const nodesArray1 = [
	{ id: 100, label: 'Старт', group: 'start'},
	{ id: 101, label: 'Этап', group: 'box'},
	{ id: 102, label: 'Завершение', group: 'stop'},
];
const edgesArray1 = [
	{ from: 100, to: 101 },
	{ from: 101, to: 102 }
];
const nodesArray2 = [
	{ id: 200, label: 'Старт', group: 'start'},
	{ id: 201, label: 'Этап', group: 'box'},
	{ id: 202, label: 'Этап', group: 'box'},
	{ id: 203, label: 'Завершение', group: 'stop'},
];
const edgesArray2 = [
	{ from: 200, to: 201 },
	{ from: 200, to: 202 },
	{ from: 201, to: 203 },
	{ from: 202, to: 203 },
];
const nodesArray3 = [
	{ id: 300, label: 'Старт', group: 'start'},
	{ id: 301, label: 'Этап', group: 'box'},
	{ id: 302, label: 'Этап', group: 'box'},
	{ id: 303, label: 'Консолидация', group: 'box'},
	{ id: 304, label: 'Завершение', group: 'stop'},
];
const edgesArray3 = [
	{ from: 300, to: 301 },
	{ from: 300, to: 302 },
	{ from: 301, to: 303 },
	{ from: 302, to: 303 },
	{ from: 303, to: 304 },
];
const nodesArray4 = [
	{ id: 401, label: 'Этап', group: 'box'},
	{ id: 402, label: 'Условие', group: 'and'},
	{ id: 403, label: 'Этап', group: 'box'},
	{ id: 404, label: 'Этап', group: 'box'},
];
const edgesArray4 = [
	{ from: 401, to: 402 },
	{ from: 403, to: 402 },
	{ from: 402, to: 404 },
];

const marshrut = [
	{ id: 900, label: 'Старт', group: 'start'},
	{ id: 901, label: 'Согласование с производством', group: 'box'},
	{ id: 902, label: 'Проверка у юристов', group: 'box'},
	{ id: 903, label: 'Финансовый отдел', group: 'box'},
	{ id: 904, label: 'Плановый отдел', group: 'box'},
	{ id: 905, label: 'Консолидация', group: 'box'},
	{ id: 906, label: 'Сумма больше 1 млн ?', group: 'ext'},
	{ id: 907, label: 'Согласование с акционерами', group: 'box'},
	{ id: 908, label: 'Подписание', group: 'box'},
	{ id: 909, label: 'Регистрация в реестре', group: 'box'},
	{ id: 910, label: 'Завершение', group: 'stop'},
];
const marshEdges = [
	{ from: 900, to: 901 },
	{ from: 901, to: 902 },
	{ from: 901, to: 903 },
	{ from: 901, to: 904 },
	{ from: 902, to: 905 },
	{ from: 903, to: 905 },
	{ from: 904, to: 905 },
	{ from: 905, to: 906 },
	{ from: 906, to: 907 },
	{ from: 907, to: 908 },
	{ from: 906, to: 908 },
	{ from: 908, to: 909 },
	{ from: 909, to: 910 },
];
