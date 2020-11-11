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