/* global $ */
$(function() {
  $('#btn').click(function(e){
    e.preventDefault();
    $('#result').html($('#inpt').val().split(' ').reverse().join(' '));
    $('#result').addClass('done');
  });
});
