// Getting the object from config file.html
let setting = JSON.parse(localStorage.getItem("configsetting"));
console.log(setting);

//selecting the h1 from the document and assigning it innerHTML to that from the setting otsikko
let heading = document.querySelectorAll("h1")[0];
heading.innerHTML = setting.otsikkoValue;



// Set the date we're counting down to
var countDownDate = new Date(setting.dateValue + " " + setting.kloValue).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // document.querySelectorAll('[data-key="d"]')[0].innerHTML = days;
  // document.querySelectorAll('[data-key="h"]')[0].innerHTML = hours;
  // document.querySelectorAll('[data-key="m"]')[0].innerHTML = minutes;
  // document.querySelectorAll('[data-key="s"]')[0].innerHTML = seconds;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = setting.messageValue;
  }
}, 1000);