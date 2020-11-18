$(document).ready(function () {
    $('.paciente-check').click(function () {
      $('#medico-form').css("display", "none");
      $('#paciente-form').css("display", "block");
      console.log("paciente")
    });
  });
  $(document).ready(function () {
    $('.medico-check').click(function () {
      $('#medico-form').css("display", "block");
      $('#paciente-form').css("display", "none");
      console.log("medico")
    });
  });


$(document).ready(function () {
  $('#first-next-user').click(function (event) {
      console.log("btn-first-next")
      event.preventDefault();
      $('.first-pass-user').css("display", "none");
      $('.second-pass-user').css("display", "block");
  });
});
$(document).ready(function () {
  $('#first-back-user').click(function (event) {
      event.preventDefault();
      $('.first-pass-user').css("display", "block");
      $('.second-pass-user').css("display", "none");
  });
});


$(document).ready(function () { //pass p 2
  $('#first-next-doctor').click(function (event) {
      console.log("btn-first-next")
      event.preventDefault();
      $('.first-pass-doctor').css("display", "none");
      $('.second-pass-doctor').css("display", "block");
  });
});
$(document).ready(function () {  //passa p 3
  $('#second-next-doctor').click(function (event) {
      event.preventDefault();
      $('.third-pass-doctor').css("display", "block");
      $('.second-pass-doctor').css("display", "none");
  });
});
$(document).ready(function () { //volta p 1
  $('#first-back-doctor').click(function (event) {
      event.preventDefault();
      $('.first-pass-doctor').css("display", "block");
      $('.second-pass-doctor').css("display", "none");
  });
});
$(document).ready(function () { //volta p 2
  $('#second-back-doctor').click(function (event) {
      event.preventDefault();
      $('.second-pass-doctor').css("display", "block");
      $('.third-pass-doctor').css("display", "none");
  });
});