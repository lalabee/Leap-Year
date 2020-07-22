$(document).ready(function () {
  $("form#leapYear").submit(function(event) {
    event.preventDefault();
const inputYear=parseInt($("input#inputYear").val());
console.log(inputYear);
  })
});
