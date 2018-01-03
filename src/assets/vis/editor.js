let editMarsh = false;

function closeMarsh() {
	if (!editMarsh) {
		for (var i = 0; i < 4 ; i++) {
			$('#marsh').foundation('up', $('#marsh' + i));
		}
		$('#marsh ~ .accordion-title').attr('aria-expanded', false)
		$('#marsh').attr('disabled', '')
		$('#marshBlock').addClass('edit')
		$('#marshGear').addClass('edit')
		editMarsh = true;
	} else {
		$('#marsh').removeAttr('disabled')
		$('#marshBlock').removeClass('edit')
		$('#marshGear').removeClass('edit')
		editMarsh = false;
	}

}

