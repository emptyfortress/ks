let editMarsh = false;
let editEt = false;

function editMarshrut() {
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
}

function editEtap() {
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
}

$('.trash').click( function() {
  $(this).parent().parent().addClass("hide");
} )

$('.del').click( function() {
  $(this).parent().addClass("hide");
} )
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
// floating labels
// ========================================

$(".mat-input").focus(function(){
  $(this).parent().addClass("is-acti is-completed");
});

$(".mat-input").focusout(function(){
  if($(this).val() === "")
    $(this).parent().removeClass("is-completed");
  $(this).parent().removeClass("is-acti");
})


// ========================================
// fieldset
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

// function switchPanel() {
// 	$('#emptyPanel').toggleClass('hide');
// 	$('#filledPanel').toggleClass('hide');
// }
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
}

// ========================================
// dv context search
// ========================================
var drop = document.querySelector('.drop');

function history(arg) {
	switch (arg) {
		case 1:
			return `
				<ul id="flat" onclick="sel()">
					<li><img src="assets/img/mask.png" alt="" />Инициатор</li>
					<li><img src="assets/img/mask.png" alt="" />Согласующий</li>
					<li><img src="assets/img/mask.png" alt="" />Подписант</li>
					<li><img src="assets/img/search.png" alt="" />Заместитeли</li>
					<li><img src="assets/img/search.png" alt="" />Все подчиненные</li>
					<li><img src="assets/img/search.png" alt="" />Сотрудники департамента автора</li>
					<li><img src="assets/img/user.png" alt="" />Акопян А.Б.</li>
					<li><img src="assets/img/user.png" alt="" />Боровиков С.С.</li>
					<li><img src="assets/img/user.png" alt="" />Воробьева А.П.</li>
					<li><img src="assets/img/user.png" alt="" />Синичкина Л.Т.</li>
					<li><img src="assets/img/group.png" alt="" />Разработчики</li>
					<li><img src="assets/img/group.png" alt="" />Админы</li>
					<li><img src="assets/img/briefcase.png" alt="" />Отдел маркетинга</li>
					<li><img src="assets/img/briefcase.png" alt="" />Отдел кадров</li>
				</ul>
				`;
			break;
		case 2:
			return `
				<ul id="flat" onclick="sel()">
					<li><img src="assets/img/user.png" alt="" />Орлов Г.С.</li>
					<li><img src="assets/img/user.png" alt="" />Воробьева А.П.</li>
					<li><img src="assets/img/mask.png" alt="" />Инициатор</li>
					<li><img src="assets/img/group.png" alt="" />Заместители</li>
					<li><img src="assets/img/user.png" alt="" />Синичкина А.А.</li>
					<li><img src="assets/img/briefcase.png" alt="" />Отдел кадров</li>
				</ul>
				`;
			break;
		case 7:
			return `
				<ul id="flat" onclick="sel()">
				<li><img src="assets/img/search.png" alt="" />Сотрудники департамента автора</li>
				<li><img src="assets/img/mask.png" alt="" />Инициатор</li>
				<li><img src="assets/img/user.png" alt="" />Акопян А.Б.</li>
				<li><img src="assets/img/mask.png" alt="" />Согласующий</li>
				<li><img src="assets/img/mask.png" alt="" />Подписант</li>
				<li><img src="assets/img/briefcase.png" alt="" />Отдел кадров</li>
				<li><img src="assets/img/user.png" alt="" />Синичкина Л.Т.</li>
				<li><img src="assets/img/group.png" alt="" />Админы</li>
				<li><img src="assets/img/user.png" alt="" />Воробьева А.П.</li>
				<li><img src="assets/img/briefcase.png" alt="" />Отдел маркетинга</li>
				<li><img src="assets/img/group.png" alt="" />Разработчики</li>
				</ul>
				`;
			break;
	}
}

$('#searchField1').on('focus', function(event) {
	$('#selOpt').addClass('open');
	$('.drop').addClass('open');
	$('.inf').addClass('open');
	$('.drop').addClass('history');
	drop.innerHTML = history(2);
});

$('#searchField1').on('focusout', function(event) {
	$('#selOpt').removeClass('open');
	$('.drop').removeClass('flat');
	$('.drop').removeClass('fio');
	$('.drop').removeClass('open');
	$('.inf').removeClass('open');
	$('.inf').removeClass('open-big');
	$('.drop').addClass('history');
	// $('.added').removeClass('open');
});

function keyup(evt, t) {
	if (evt.keyCode == 220) {
		$('#dictionary').foundation('open');
	} else if (evt.keyCode == 32) {
		$('.drop').removeClass('history');
		$('.drop').addClass('flat');
		$('.inf').addClass('open-big');
		$('#searchField1').val('');
		drop.innerHTML = history(1);
	} else if (evt.keyCode == 40) {
		$('.added').addClass('open');
		$( "#searchField1" ).blur();
	} else {
		$('.drop').removeClass('history');
		$('.drop').removeClass('flat');
		$('.inf').addClass('open-big');
		$('.drop').addClass('fio');
		drop.innerHTML = history(7);
	}
}

function sel() {
	$('.added').addClass('open');
	$( "#searchField1" ).blur();
}

function showFlat() {
	$( "#searchField1" ).focus();
	$('.drop').removeClass('history');
	$('.drop').addClass('flat');
	$('.inf').addClass('open-big');
	drop.innerHTML = history(1);
}




let sections = [
	{ title: 'Сотрудник',             arr: 'hide', img: 'user' },
	{ title: 'Подразделение',         arr: '',     img: 'briefcase', action: 'dep' },
	{ title: 'Группа',                arr: '',     img: 'group' },
	{ title: 'Роль',                  arr: '',     img: 'mask' },
	{ title: 'Поисковое слово',       arr: '',     img: 'search' },
];

let departments = [
	{ title: 'Отдел кадров',          arr: 'hide', img: 'briefcase' },
	{ title: 'Отдел маркетинга',      arr: '',     img: 'briefcase' },
	{ title: 'Отдел продаж',          arr: '',     img: 'briefcase' },
	{ title: 'Отдел тестирования',    arr: '',     img: 'briefcase' },
	{ title: 'Производство',          arr: '',     img: 'briefcase' },
	{ title: 'Бухгалтерия',           arr: '',     img: 'briefcase' },
	{ title: 'Финансовый отдел',      arr: '',     img: 'briefcase' },
	{ title: 'Стратегическая группа', arr: '',     img: 'briefcase' },
];

let departments1 = [
	{ title: 'Отдел кадров',          arr: 'hide', img: 'briefcase' },
	{ title: 'Отдел маркетинга',      arr: '',     img: 'briefcase' },
	{ title: 'Отдел продаж',          arr: '',     img: 'briefcase' },
	{ title: 'Отдел тестирования',    arr: '',     img: 'briefcase' },
	{ title: 'Производство',          arr: '',     img: 'briefcase' },
	{ title: 'Бухгалтерия',           arr: '',     img: 'briefcase' },
	{ title: 'Финансовый отдел',      arr: '',     img: 'briefcase' },
	{ title: 'Стратегическая группа', arr: '',     img: 'briefcase' },
];

function showList(arg) {
	var sec = sections.map((item,index) =>`
		<div class="result"><img src="/assets/img/${item.img}.png" alt="">${item.title}<span class="${item.arr}" onclick="level1('${item.action}')"></span></div>
		`);
	var newlist1 = sec.join("");
	return newlist1;
}

var results = document.querySelector('.results');

function level1(arg) {
	var dep = departments.map((item,index) =>`
		<div class="result"><img src="/assets/img/${item.img}.png" alt="">${item.title}<span class="${item.arr}"></span></div>
		`);
	var deplist = dep.join("");
	switch (arg) {
		case 'dep':
			$('.results').addClass('away');
			setTimeout(() => {
				results.innerHTML = deplist;
				$('.results').removeClass('away');
				$('.results').addClass('in');
			}, 200);
			setTimeout(() => {
				$('.results').removeClass('in');
			}, 350)
			break;
		
		default:
			
	}
}

results.innerHTML = showList();


// result.calssList.add("fly-away");
// setTimeout(() => {
//    results.innerHTML = showList();
//    setTimeout(() => results.classList.add("fly-in"));
// }, 300);
