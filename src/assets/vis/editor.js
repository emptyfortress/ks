let editMarsh = false;
let editEt = false;

function editMarshrut() {
	if (!editMarsh) {
		for (var i = 0; i < 4 ; i++) {
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
