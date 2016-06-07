$(document).ready(function(){
  
  $('#stopButton').click(stopLight);
  $('#slowButton').click(slowLight);
  $('#goButton').click(goLight);

  function stopLight() {
    clearLights();
    $('#stopLight').css('backgroundColor', 'red');

  }

  function slowLight () {
    clearLights();
    $('#slowLight').css('backgroundColor','orange');

  }
  
  function goLight () {
    clearLights();
    $('#goLight') .css('backgroundColor','green');
  }

  function clearLights() {
    $('#stopLight').css('backgroundColor', 'black');
    $('#slowLight').css('backgroundColor', 'black');
    $('#goLight').css('backgroundColor', 'black');
  }


});