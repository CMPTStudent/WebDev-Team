// function myFunction() {
//     var x = document.getElementById("html-show");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
function myFunction() {
  var x = document.getElementById("html-show");
  if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}