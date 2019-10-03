$(function(){

})
function fetchArticle(id){
    $.ajax({
        url: `http://www.api-ams.me/v1/api/articles/${id}`,
        method:"GET",
        success: function(res){

        },
        error: function(er){
            console.log(er);

        }
    })
}
function addJumbutron(articles){
    var content ="";
    content =`
    <div class="jumbotron">
    <h2 class="display-4">${articles.TITLE}</h2>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>${a.DESCRIPTION}</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </div>
    `
}