function myFunction() {
  var txt;
  if (confirm("Confirming the booking?")) {
    txt = "Your booking have been submitted";
  } else {
    txt = "Your booking have been Cancelled";
  }
  document.getElementById("demo").innerHTML = txt;
}
