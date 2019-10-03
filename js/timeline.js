// $(document).ready(function(){
//     $("a").on('click',function(event){
//             if(this.hash !==""){
//                 event.preventDefault();
//                 var hash = this.hash;
//             }

//     })
// })

window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}