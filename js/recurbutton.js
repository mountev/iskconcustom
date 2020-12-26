(function($, _, ts){

  if ($('#is_recur').size() == 0) {
    return;
  }
  if (($('#frequency_unit').size() > 0) && ($('input[name=is_recur_radio]').size() > 0)) {
    $('#is_recur').change(function() {
      if ($(this).is(":checked")) {
        setRecurButton();
      }
    });
    $('#frequency_unit').on('change', function() {
      setRecurButton();
    });
  }
  function setRecurButton() {
    var rbtnInterval = $('input[name=is_recur_radio]:checked').val();
    var freqUnit = $('#frequency_unit').val();
    if (freqUnit && (freqUnit != rbtnInterval)) {
      $("input[name=is_recur_radio][value=" + freqUnit + "]").prop('checked', true);
    }
  }

})(CRM.$, CRM._, CRM.ts('recurbutton'));
