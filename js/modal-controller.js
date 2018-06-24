/**
 * @author Lucas Rabuffetti
 * @version 1.0.0
 * javascript handlers for the modal
 */

(function ($) {
  'use strict'; // Start of use strict

  /**
   * close the modal for mobile since bootstrap don't support 
   * click event
   */
  $('.close-button').on('mousedown touchstart', function () {
    $('#subscribe-modal').modal('hide');
  });

  /**
   * function to pre/post validate the email input
   * and show the error message
   */
  $('#subscriberEmail').focusout(function() {
    if (isEmail($('input[name=email]').val()) === false) {
      $('#subscriberEmail').addClass('error-input');
      $('#email-error-message').show();
      $('#subscribe-action').attr('disabled', submitButtonStatus());
    } else {
      $('#subscriberEmail').removeClass('error-input');
      $('#email-error-message').hide();
      $('#subscribe-action').attr('disabled', submitButtonStatus());
    }
  });

  /**
   * enable / disable the submit button based on the checkbox for privacy
   */
  $('#privacy-check-id').click(function () {
    $('#subscribe-action').attr('disabled', submitButtonStatus());
  });

  /**
   * function to enable/disable the submition of the form
   */
  function submitButtonStatus() {
    var checkBoxStatus = document.getElementById('privacy-check-id').checked,
      emailValid = isEmail($('input[name=email]').val());

    return  !(checkBoxStatus && emailValid);
  }

  /**
   * process the form on submit
   */
  $('#subscribe-form').submit(function (event) {

    hideSubscribeButton();

    // get the form data
    var formData = {
      'email': $('input[name=email]').val(),
    };

    if (isEmail(formData.email)) {
      // process the form, I choose to make a fake call
      // to mockbin to simulate the ajax call to have a real response
      // in order to use the promise success to close the modal.
      var settings = {
        'async': true,
        'crossDomain': true,
        'url': 'http://mockbin.com/request?foo=bar&foo=baz',
        'method': 'POST',
        'headers': {
          'cookie': 'foo=bar; bar=baz',
          'accept': 'application/json',
          'content-type': 'application/json',
          'x-pretty-print': '2'
        },
        'processData': false,
        'data': '{\"foo\": \"bar\"}'
      };

      setTimeout(function() {
        $.ajax(settings).done(function (response) {
          showSubscribeButton();
          console.log(response);
        });
      }, 3000);
    } else {
      showSubscribeButton()
      console.log('invalid mail');
    }

    // stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
  });

  /**
   * check if the user fill a valid email
   * @param {string} email 
   * @returns boolean
   */
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  /**
   * show the subscribe button / hide the spinner
   */
  function showSubscribeButton() {
    $('.suscribete').show();
    $('.loading').hide();
  }

  /**
   * show the spinner / hide the subscribe button
   */
  function hideSubscribeButton() {
    $('.suscribete').hide();
    $('.loading').show();
  }

})(jQuery);
