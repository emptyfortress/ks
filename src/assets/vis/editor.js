let editMarsh = false;
let editEt = false;

function editMarshrut() {//{{{
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
		$('#marsh').removeAttr('disabled')
		$('#marsh > li > a').attr('contentEditable', 'false');
		$('#marsh img.edit').addClass('hide')
		$('#marshBlock').removeClass('edit')
		$('#marshGear').removeClass('edit')
		$('#addMarsh').removeClass('hide');
		$('#addFold').addClass('hide');
		editMarsh = false;
	}
}//}}}

function editEtap() {//{{{
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
		$('#etap').removeAttr('disabled')
		$('#etap > li > a').attr('contentEditable', 'false');
		$('#etap img.edit').addClass('hide')
		$('#etapBlock').removeClass('edit')
		$('#etapGear').removeClass('edit')
		$('#addEt').removeClass('hide');
		$('#addFol').addClass('hide');
		editEt = false;
	}
}
function openM() {
	$('.mprops').toggleClass('expanded')
}//}}}

$('.trash').click( function() {//{{{
  $(this).parent().parent().addClass("hide");
} )

$('.del').click( function() {
  $(this).parent().addClass("hide");
} )//}}}
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
})//}}}


// ========================================
// fieldset{{{
// ========================================
$('legend').click(function() {
  // $((this)'.fieldset').toggleClass('collapsed');
  $(this).parent().toggleClass('collapsed');
});

function showRol() {
	$('#rol1').removeClass('hide');
	$('#group1').addClass('hide');
	$('#fio1').addClass('hide');
	$('#dep1').addClass('hide');
	$('#word1').addClass('hide');
}
function showGroup() {
	$('#group1').removeClass('hide');
	$('#rol1').addClass('hide');
	$('#fio1').addClass('hide');
	$('#dep1').addClass('hide');
	$('#word1').addClass('hide');
}
function showFio() {
	$('#fio1').removeClass('hide');
	$('#group1').addClass('hide');
	$('#rol1').addClass('hide');
	$('#dep1').addClass('hide');
	$('#word1').addClass('hide');
}
function showDep() {
	$('#dep1').removeClass('hide');
	$('#group1').addClass('hide');
	$('#fio1').addClass('hide');
	$('#rol1').addClass('hide');
	$('#word1').addClass('hide');
}
function showWord() {
	$('#word1').removeClass('hide');
	$('#group1').addClass('hide');
	$('#fio1').addClass('hide');
	$('#dep1').addClass('hide');
	$('#rol1').addClass('hide');
}

function showButtons() {
	$('#dopBt').toggleClass('hide');
}

function nothing() {
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
	$('#noth').addClass('active');
	$('#eta').removeClass('active');
	$('#bul').removeClass('active');
	$('#ext').removeClass('active');
	$('#arr').removeClass('active');
}
function showEtap() {
	$('#emptyPanel').addClass('hide');
	$('#filledPanel').removeClass('hide');
	$('.tabs').removeClass('hide');
	$('#panel1c').addClass('is-active');
	$('#panel3c').removeClass('is-active');
	$('#bulPanel').addClass('hide');
	$('#extPanel').addClass('hide');
	$('#arrPanel').addClass('hide');
	$('#tt1').addClass('is-active');
	$('#tt2').removeClass('is-active');
	$('#noth').removeClass('active');
	$('#eta').addClass('active');
	$('#bul').removeClass('active');
	$('#ext').removeClass('active');
	$('#arr').removeClass('active');
}
function showBoulean() {
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
	$('#noth').removeClass('active');
	$('#bul').addClass('active');
	$('#eta').removeClass('active');
	$('#ext').removeClass('active');
	$('#arr').removeClass('active');
}
function showExternal() {
	$('#emptyPanel').addClass('hide');
	$('#filledPanel').addClass('hide');
	$('.tabs').removeClass('hide');
	$('#panel1c').addClass('is-active');
	$('#panel3c').removeClass('is-active');
	$('#bulPanel').addClass('hide');
	$('#extPanel').removeClass('hide');
	$('#arrPanel').addClass('hide');
	$('#tt1').addClass('is-active');
	$('#tt2').removeClass('is-active');
	$('#noth').removeClass('active');
	$('#ext').addClass('active');
	$('#bul').removeClass('active');
	$('#eta').removeClass('active');
	$('#arr').removeClass('active');
}
function showArrow() {
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
function resize() {
	$('.mprops').toggleClass('full');
	$('#viewer').toggleClass('full');
	$('#net').toggleClass('full');
	$('#netpanel').toggleClass('full');
	$('.main1').toggleClass('full');
	$('.header1').toggleClass('full');
	$('.footer1').toggleClass('full');
}




// ========================================
// vis
// ========================================
var nodes = new vis.DataSet([
	{id: 1, label: 'Старт', title: "plasdj" },
	{id: 2, label: 'Этап', title: "plasdj" },
	{id: 3, label: 'Этап', title: "plasdj" },
	{id: 4, label: 'Завершение', title: "plasdj" },
]);

var edges = new vis.DataSet([
	// {from: 1, to: 2},
	// {from: 1, to: 3},
	// {from: 2, to: 4},
	// {from: 3, to: 4},
]);

var container = document.getElementById('net');
var data = {
	nodes: nodes,
	edges: edges
};

var options = {
	interaction:{hover:true},
	manipulation: {
		enabled: true
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
		smooth: true
  }
};

var network = new vis.Network(container, data, options);


// ========================================
// editing functions
// ========================================
function addEdge() {
	try {
		edges.add({
			id: 100,
			from: 1,
			to: 2
			// id: document.getElementById('edge-id').value,
			// from: document.getElementById('edge-from').value,
			// to: document.getElementById('edge-to').value
		});
	}
	catch (err) {
		alert(err);
	}
}

function addNode() {
	try {
		nodes.add({
			id: nodes.length + 1,
			label: 'etap'
		});
	}
	catch (err) {
		alert(err);
	}
}
