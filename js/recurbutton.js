(function($, _, ts){

  if ($('#is_recur').size() == 0) {
    return;
  }
  if (($('#frequency_unit').size() > 0) && ($('input[name=is_recur_radio]').size() > 0)) {
    $('#is_recur').change(function() {
      if ($('#is_recur').is(":checked")) {
        setRecurButton();
      }
    });
    function setRecurButton() {
      var rbtnInterval = $('input[name=is_recur_radio]:checked').val();
      var freqUnit = $('#frequency_unit').val();
      if (!freqUnit && !rbtnInterval) {
        $("input[name=is_recur_radio][value=month]").prop('checked', true).trigger('change');
        Swal.fire({
          title: 'Information',
          text: 'GoCardless only works with recurring payment options. Your ONE-TIME donation type has been changed to MONTHLY.',
          icon: 'info',
          confirmButtonText: 'OK'
        });
      }
    }
  }
})(CRM.$, CRM._, CRM.ts('iskconcustom'));
