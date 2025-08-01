/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


function myFunction() {
  var x = document.getElementById("MainNav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
