(function($, _, ts){

  if ($('#is_recur').size() == 0) {
    return;

  }
  
$('.CRM_Contribute_Form_Contribution_Main').ready(function() {
    setTimeout(function(){
        swal.fire({
                title: 'You can now pay with apple pay',
                icon: 'info',
                html: '<img width="250" height="200" src="https://www.bankorion.com/webres/Image/personal-banking/Online%20Mobile%20Banking/ApplePayGooglePaySamsungPayGraphics.png"><br>This message will disappear in 3 sec',
                showConfirmButton: false,
                showCancelButton: false,
                })
                    },10000);
            });
            
  
// added by TGd.  
$('input[name=payment_processor_id][value=5]').click(function()  {
    if (($("input[name=payment_processor_id]").attr("value")=="5") && ($("input[name=is_recur_radio]:checked").attr("value")=="month")) {  
             Swal.fire({
          title: 'Direct Debit Mandate',
          text: 'You will be asked to securely enter your UK bank details on the next page to initiate the Direct Debit mandate.',
          icon: 'info',
          allowOutsideClick: false,
          confirmButtonColor: '#4E5076',
          confirmButtonText: 'OK'

        });
  }
  else if (($("input[name=payment_processor_id]").attr("value")=="5") && ($("input[name=is_recur_radio]:checked").attr("value")=="year")) {  
                   Swal.fire({
          title: 'Direct Debit Mandate',
          text: 'You will be asked to securely enter your UK bank details on the next page to initiate the Direct Debit mandate.',
          icon: 'info',
          allowOutsideClick: false,
          confirmButtonColor: '#4E5076',
          confirmButtonText: 'OK'

        });
  }

  else if (($("input[name=payment_processor_id]").attr("value")=="5") && ($("input[name=price_5]").prop('checked', true))){  
        Swal.fire({
          title: 'Direct Debit Mandate',
          text: 'You will be asked to securely enter your UK bank details on the next page to initiate the Direct Debit mandate.',
          icon: 'info',
          allowOutsideClick: false,
          confirmButtonColor: '#4E5076',
          confirmButtonText: 'OK'

        });
  }

});


$('input[name=is_recur_radio]').change(function() {
  //check for id and add or remove disabled
  $("input[name=is_recur_radio]:checked").attr("id") == "CIVICRM_QFID_is_recur_radio" ? $('input[name=payment_processor_id][value=5]').prop("disabled", true) : $('input[name=payment_processor_id][value=5]').prop("disabled", false);
  $("input[name=is_recur_radio]:checked").attr("id") == "CIVICRM_QFID_is_recur_radio" ? $('input[name=payment_processor_id][value=6]').prop("disabled", true) : $('input[name=payment_processor_id][value=6]').prop("disabled", false);
  $('input[name=payment_processor_id][value=5]').prop('checked', false);
  $('input[name=payment_processor_id][value=3]').prop('checked', false);
  $('input[name=payment_processor_id][value=6]').prop('checked', false);
  $('input[name=payment_processor_id][value=4]').prop('checked', false);
//   $('#card-element').hide();
});


//added by TGD


  


  
  
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
          title: 'Switched to Recurring',
          icon: 'warning',
          allowOutsideClick: false,
          text: 'Only RECURRING payments can be processed via Direct Debit from an UK bank account. Your donation is switched to "Monthly". If you wish to make a one-off payment, please select "One-off" option and pay by Debit/Credit card',
          confirmButtonColor: '#e0861a',
          confirmButtonText: 'I Confirm'
          
             }).then((result) => {
       if (result.value) {
           
                Swal.fire({
                    title: 'Set Your Password',
                    title: 'Direct Debit Mandate',
                    allowOutsideClick: false,
                    text: 'If you wish to pay a recurring donation, you will be asked to securely enter your UK bank details on the next page to initiate the Direct Debit mandate.',
                    icon: 'info',
                    confirmButtonColor: '#4E5076',
                    confirmButtonText: 'OK'
                        })
                    }
         
          
        });
      }
    }
  }
})(CRM.$, CRM._, CRM.ts('iskconcustom'));
