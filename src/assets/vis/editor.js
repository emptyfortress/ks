/*global vis */
const DIR = 'assets/img/';
let editMarsh = false;
let editEt = false;
let manipulationNodeType = 1;
let nodeColor = '#DBF4FF';
let borderColor = '#0096DC';
let selId;


function editMarshrut() {  // eslint-disable-line no-unused-vars
	if (!editMarsh) {
		for (var i = 1; i < 4 ; i++) {
			$('#marsh').foundation('up', $('#marsh' + i));
		}
		$('#marsh > .accordion-title').attr('aria-expanded', false);
		$('#marsh > li > a').attr('contentEditable', 'true');
		$('#marsh img.edit').removeClass('hide');
		$('#marsh').attr('disabled', '');
		$('#marsh .accordion-title').addClass('disabl');
		$('#marshBlock').addClass('edit');
		$('#marshGear').addClass('edit');
		$('#addMarsh').addClass('hide');
		$('#addFold').removeClass('hide');
		editMarsh = true;
	} else {
		$('#marsh').removeAttr('disabled');
		$('#marsh > li > a').attr('contentEditable', 'false');
		$('#marsh img.edit').addClass('hide');
		$('#marshBlock').removeClass('edit');
		$('#marshGear').removeClass('edit');
		$('#addMarsh').removeClass('hide');
		$('#addFold').addClass('hide');
		editMarsh = false;
	}
}

function editEtap() {  // eslint-disable-line no-unused-vars
	if (!editEt) {
		for (var i = 1; i < 7 ; i++) {
			$('#etap').foundation('up', $('#etap' + i));
		}
		$('#etap > .accordion-title').attr('aria-expanded', false);
		$('#etap > li > a').attr('contentEditable', 'true');
		$('#etap img.edit').removeClass('hide');
		$('#etap').attr('disabled', '');
		$('#etap .accordion-title').addClass('disabl');
		$('#etapBlock').addClass('edit');
		$('#etapGear').addClass('edit');
		$('#addEt').addClass('hide');
		$('#addFol').removeClass('hide');
		editEt = true;
	} else {
		$('#etap').removeAttr('disabled');
		$('#etap > li > a').attr('contentEditable', 'false');
		$('#etap img.edit').addClass('hide');
		$('#etapBlock').removeClass('edit');
		$('#etapGear').removeClass('edit');
		$('#addEt').removeClass('hide');
		$('#addFol').addClass('hide');
		editEt = false;
	}
}
function openM() { // eslint-disable-line no-unused-vars
	$('.mprops').toggleClass('expanded');
}

$('.trash').click( function() {//{{{
	$(this).parent().parent().addClass("hide");
} );

$('.del').click( function() {
	$(this).parent().addClass("hide");
} );//}}}
// ========================================
// resize panels{{{
// ========================================
const $paneContainer = $("#paneContainer");
const $dragbar = $("#paneContainer #dragbar");
const $leftPane = $("#paneContainer #editor");
const $rightPane = $("#paneContainer #viewer");

let dragging = false;

// Todo: Load these from previous session.
let leftPanePercentage = 50;
let rightPanePercentage = 50;

function setInitialPaneSizes() {
	if ($leftPane && $rightPane) {
		const unit = $paneContainer.width() / (leftPanePercentage + rightPanePercentage);
		$leftPane.width(unit * leftPanePercentage);
		$rightPane.width(unit * rightPanePercentage);
	}
}

$(document).on("ready", setInitialPaneSizes);
$(window).on("resize", setInitialPaneSizes);

if ($dragbar) {
	$dragbar.on("mousedown", (mousedownEvent) => {
		mousedownEvent.preventDefault();
		dragging = true;
		let prevPageX = mousedownEvent.pageX;

		$(document).on("mousemove", (mousemoveEvent) => {
			if (dragging) {
				if ($leftPane && $rightPane) {
					const deltaPageX = mousemoveEvent.pageX - prevPageX;
					prevPageX = mousemoveEvent.pageX;
					$leftPane.width($leftPane.width() + deltaPageX);
					$rightPane.width($rightPane.width() - deltaPageX);
					leftPanePercentage = 100 / $paneContainer.width() * $leftPane.width();
					rightPanePercentage = 100 / $paneContainer.width() * $rightPane.width();
				}
			}
		});

		$(document).on("mouseup", () => {
			if (dragging) {
				dragging = false;
				$(document).unbind("mousemove");
			}
		});
	});
}//}}}


// ========================================
// floating labels{{{
// ========================================

$(".mat-input").focus(function(){
	$(this).parent().addClass("is-acti is-completed");
});

$(".mat-input").focusout(function(){
	if($(this).val() === "")
		$(this).parent().removeClass("is-completed");
	$(this).parent().removeClass("is-acti");
});//}}}


// ========================================
// fieldset{{{
// ========================================
$('legend').click(function() {
	// $((this)'.fieldset').toggleClass('collapsed');
	$(this).parent().toggleClass('collapsed');
});

function showRol() { // eslint-disable-line no-unused-vars
	$('#rol1').removeClass('hide');
	$('#group1').addClass('hide');
	$('#fio1').addClass('hide');
	$('#dep1').addClass('hide');
	$('#word1').addClass('hide');
}
function showGroup() { // eslint-disable-line no-unused-vars
	$('#group1').removeClass('hide');
	$('#rol1').addClass('hide');
	$('#fio1').addClass('hide');
	$('#dep1').addClass('hide');
	$('#word1').addClass('hide');
}
function showFio() { // eslint-disable-line no-unused-vars
	$('#fio1').removeClass('hide');
	$('#group1').addClass('hide');
	$('#rol1').addClass('hide');
	$('#dep1').addClass('hide');
	$('#word1').addClass('hide');
}
function showDep() { // eslint-disable-line no-unused-vars
	$('#dep1').removeClass('hide');
	$('#group1').addClass('hide');
	$('#fio1').addClass('hide');
	$('#rol1').addClass('hide');
	$('#word1').addClass('hide');
}
function showWord() { // eslint-disable-line no-unused-vars
	$('#word1').removeClass('hide');
	$('#group1').addClass('hide');
	$('#fio1').addClass('hide');
	$('#dep1').addClass('hide');
	$('#rol1').addClass('hide');
}

function showButtons() { // eslint-disable-line no-unused-vars
	$('#dopBt').toggleClass('hide');
}

function nothing() { // eslint-disable-line no-unused-vars
	$('#emptyPanel').removeClass('hide');
	$('#filledPanel').addClass('hide');
	$('.tabs').addClass('hide');
	$('#panel1c').addClass('is-active');
	$('#panel3c').removeClass('is-active');
	$('#tt1').addClass('is-active');
	$('#tt2').removeClass('is-active');
	$('#bulPanel').addClass('hide');
	$('#extPanel').addClass('hide');
	$('#arrPanel').addClass('hide');
	$('#startPanel').addClass('hide');
	$('#endPanel').addClass('hide');
	$('#noth').addClass('active');
	$('#eta').removeClass('active');
	$('#bul').removeClass('active');
	$('#ext').removeClass('active');
	$('#arr').removeClass('active');
}
function showEtap() { // eslint-disable-line no-unused-vars
	$('#emptyPanel').addClass('hide');
	$('#filledPanel').removeClass('hide');
	$('.tabs').removeClass('hide');
	$('#panel1c').addClass('is-active');
	$('#panel3c').removeClass('is-active');
	$('#bulPanel').addClass('hide');
	$('#extPanel').addClass('hide');
	$('#arrPanel').addClass('hide');
	$('#startPanel').addClass('hide');
	$('#endPanel').addClass('hide');
	$('#tt1').addClass('is-active');
	$('#tt2').removeClass('is-active');
	$('#noth').removeClass('active');
	$('#eta').addClass('active');
	$('#bul').removeClass('active');
	$('#ext').removeClass('active');
	$('#arr').removeClass('active');
}
function showBoulean() { // eslint-disable-line no-unused-vars
	$('#emptyPanel').addClass('hide');
	$('#filledPanel').addClass('hide');
	$('.tabs').removeClass('hide');
	$('#panel1c').addClass('is-active');
	$('#panel3c').removeClass('is-active');
	$('#tt1').addClass('is-active');
	$('#tt2').removeClass('is-active');
	$('#bulPanel').removeClass('hide');
	$('#extPanel').addClass('hide');
	$('#arrPanel').addClass('hide');
	$('#startPanel').addClass('hide');
	$('#endPanel').addClass('hide');
	$('#noth').removeClass('active');
	$('#bul').addClass('active');
	$('#eta').removeClass('active');
	$('#ext').removeClass('active');
	$('#arr').removeClass('active');
}
function showExternal() { // eslint-disable-line no-unused-vars
	$('#emptyPanel').addClass('hide');
	$('#filledPanel').addClass('hide');
	$('.tabs').removeClass('hide');
	$('#panel1c').addClass('is-active');
	$('#panel3c').removeClass('is-active');
	$('#bulPanel').addClass('hide');
	$('#extPanel').removeClass('hide');
	$('#arrPanel').addClass('hide');
	$('#startPanel').addClass('hide');
	$('#endPanel').addClass('hide');
	$('#tt1').addClass('is-active');
	$('#tt2').removeClass('is-active');
	$('#noth').removeClass('active');
	$('#ext').addClass('active');
	$('#bul').removeClass('active');
	$('#eta').removeClass('active');
	$('#arr').removeClass('active');
}
function showEnd() { // eslint-disable-line no-unused-vars
	nothing();
	$('#emptyPanel').addClass('hide');
	$('#filledPanel').addClass('hide');
	$('#endPanel').removeClass('hide');
}
function showStart() { // eslint-disable-line no-unused-vars
	nothing();
	$('#emptyPanel').addClass('hide');
	$('#filledPanel').addClass('hide');
	$('#startPanel').removeClass('hide');
}
function showArrow() { // eslint-disable-line no-unused-vars
	$('#emptyPanel').addClass('hide');
	$('#filledPanel').removeClass('hide');
	$('.tabs').removeClass('hide');
	$('#panel1c').removeClass('is-active');
	$('#panel3c').addClass('is-active');
	$('#tt1').removeClass('is-active');
	$('#tt2').addClass('is-active');
	$('#noth').removeClass('active');
	$('#ext').removeClass('active');
	$('#bul').removeClass('active');
	$('#eta').removeClass('active');
	$('#arr').addClass('active');
}//}}}

// ========================================
// editor
// ========================================
function resize() { // eslint-disable-line no-unused-vars
	$('.mprops').toggleClass('full');
	$('#viewer').toggleClass('full');
	$('#net').toggleClass('full');
	$('#netpanel').toggleClass('full');
	$('.main1').toggleClass('full');
	$('.header1').toggleClass('full');
	$('.footer1').toggleClass('full');
}

function addEtap(arg) { // eslint-disable-line no-unused-vars
	switch (arg) {
	case 1:
		$('.toolbox img').removeClass('selected');
		$('.toolbox img:nth-child(2)').toggleClass('selected');
		manipulationNodeType = 1;
		break;
	case 2:
		$('.toolbox img').removeClass('selected');
		$('.toolbox img:nth-child(3)').toggleClass('selected');
		manipulationNodeType = 2;
		break;
	case 3:
		$('.toolbox img').removeClass('selected');
		$('.toolbox img:nth-child(4)').toggleClass('selected');
		manipulationNodeType = 3;
		break;
	case 4:
		$('.toolbox img').removeClass('selected');
		$('.toolbox img:nth-child(5)').toggleClass('selected');
		manipulationNodeType = 4;
		break;
	case 5:
		$('.toolbox img').removeClass('selected');
		$('.toolbox img:nth-child(6)').toggleClass('selected');
		manipulationNodeType = 5;
		break;
	case 6:
		$('.toolbox img').removeClass('selected');
		$('.toolbox img:nth-child(7)').toggleClass('selected');
		manipulationNodeType = 6;
		break;
	default:
	}
	network.addNodeMode();
}

function myAddEdge(arg) { // eslint-disable-line no-unused-vars
	switch (arg) {
	case 1:
		$('.toolbox img').removeClass('selected');
		$('.toolbox img:nth-child(8)').toggleClass('selected');
		edgeType = 1;
		break;
	case 2:
		$('.toolbox img').removeClass('selected');
		$('.toolbox img:nth-child(9)').toggleClass('selected');
		break;
	case 3:
		$('.toolbox img').removeClass('selected');
		$('.toolbox img:nth-child(10)').toggleClass('selected');
		break;
	case 4:
		$('.toolbox img').removeClass('selected');
		$('.toolbox img:nth-child(11)').toggleClass('selected');
		break;

	default:

	}
	network.addEdgeMode();

}

function notAllowed(arg) {
	console.log("this is not allowed " + arg);
}


// ========================================
// vis
// ========================================

var nodes = new vis.DataSet([
	{id: 1, label: 'Старт', group: 'start' },
	{id: 2, label: 'Завершение', group: 'stop' },
]);

// var edgeData = [ { from:1, to: 2 } ];
var edges = new vis.DataSet([]);

var container = document.getElementById('net');
var data = {
	nodes: nodes,
	edges: edges
};

var options = {
	interaction:{hover:true},
	manipulation: {
		enabled: false,
		addNode: function(nodeData,callback) {
			switch (manipulationNodeType) {
			case 1:
				nodeData.label = 'Старт';
				nodeData.group = 'start';
				break;
			case 2:
				nodeData.label = 'Завершение';
				nodeData.group = 'stop';
				break;
			case 3:
				nodeData.label = 'Этап';
				nodeData.group = 'box';
				break;
			case 4:
				nodeData.label = 'Условие И';
				nodeData.group = 'and';
				break;
			case 5:
				nodeData.label = 'Условие ИЛИ';
				nodeData.group = 'or';
				break;
			case 6:
				nodeData.label = 'Внешнее условие';
				nodeData.group = 'ext';
				break;
			default:
			}
			callback(nodeData);
		},
		addEdge: function(edgeData,callback) {
			if (edgeData.from === edgeData.to) {
				// TODO: define func to display if try connect node to himself  <12-02-18, yourname> //
				notAllowed(1);
			}
			else {
				callback(edgeData);
			}
		}
	},
	layout: {
		// randomSeed: undefined,
		improvedLayout:true,
		hierarchical: {
			enabled:false,
			// levelSeparation: 70,
			nodeSpacing: 50,
			// treeSpacing: 200,
			blockShifting: true,
			edgeMinimization: true,
			parentCentralization: true,
			direction: 'UD',       // UD, DU, LR, RL
			sortMethod: 'directed'   // hubsize, directed
		}
	},
	edges: {
		smooth: true,
		arrows: {
			to: { enabled: true, scaleFactor: 1, type: 'arrow' }
		},
		shadow: {
			enabled: false,
			color: 'rgba(0,0,0,1)',
			size: 7,
			x: 2,
			y: 2
		},
		chosen: {
			edge: function(values) { 
				values.shadowSize = 8;
				values.width = 2;
			}
		},
	},
	nodes: {
		shadow:{
			enabled: false,
			color: 'rgba(0,0,0,0.9)',
			size:10,
			x:2,
			y:2
		},
		chosen:{ 
			node: function(values) { 
				values.shadowSize = 11,
				values.borderWidth = 2;
			}
		}
	},
	groups: {
		'box': {
			shape: 'box',
			color: {
				border: borderColor,
				background: nodeColor,
			}
		},
		'start' : {
			shape: 'image',
			image: DIR + 'bt-start.png',
			size: 15
		},
		'stop' : {
			shape: 'image',
			image: DIR + 'bt-stop.png',
			size: 15
		},
		'and' : {
			shape: 'image',
			image: DIR + 'bt-and.png',
			size: 15
		},
		'or' : {
			shape: 'image',
			image: DIR + 'bt-or.png',
			size: 15
		},
		'ext' : {
			shape: 'image',
			image: DIR + 'bt-ext.png',
			size: 15
		},
	}
};
/* exported vis */
var network = new vis.Network(container, data, options);

// ========================================
// network click events disable tool in toolbox
// ========================================
network.on('click', function() {
	for (var i = 2; i < 8 ; i++) {
		$('.toolbox img:nth-child(' + i + ')').removeClass('selected');
	}
});

network.on('selectEdge', function() {
	showArrow();
});

function showNodeInfo(arg) { // show info in right panel depending on group of nodes
	let group = arg;
	switch (group) {
	case 'box':
		showEtap();
		break;
	case 'and':
	case 'or':
		showBoulean();
		break;
	case 'ext':
		showExternal();
		break;
	case 'start':
		showStart();
		break;
	case 'stop':
		showEnd();
		break;
	}
}

network.on('selectNode', function(param) {
	selId = param.nodes[0];
	var curNodes = Object.values(nodes._data);
	var selNode = curNodes.filter( (el) => el.id === selId);
	var nodeGroup = selNode[0].group;
	showNodeInfo(nodeGroup);
});

network.on("dragStart", function (params) {
	selId = this.getNodeAt(params.pointer.DOM);
	var curNodes = Object.values(nodes._data);
	var selNode = curNodes.filter( (el) => el.id === selId);
	var nodeGroup = selNode[0].group;
	showNodeInfo(nodeGroup);
});

network.on('deselectEdge', function() {
	nothing();
});

network.on('deselectNode', function() {
	nothing();
	selId = null;
});

window.addEventListener('keyup', function(e) {
	if (selId && ( e.keyCode == 46 || e.keyCode == 8 )) {
		try {
			nodes.remove({id: selId});
		}
		catch (err) {
			alert(err);
		}
		nothing();
		selId = null;
	}
	else if (e.keyCode == 27) {
		$('#offCanvasTemplate').foundation('close');
		$('#offCanvasLeft').foundation('close');
		$('#offCanvasRight').foundation('close');
		
	}

});
