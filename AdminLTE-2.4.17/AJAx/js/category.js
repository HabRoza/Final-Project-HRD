


$(function(){
    // console.log($this).val();
    $('#category').change(function(){
        fetchArticleByCategoryID($(this).val())
    })
    
    $(document).on('click','.view-detail',function(e){
        window.location.href ="article-detail.html"
    })

})


function fetchArticleByCategoryID(id){
    $.ajax({
        url=`http://api-ams.me/v1/api/categories/${id}/article`,
        method :"GET",
        success:function (res){
            console.log(res);
        },
        error:function(er){
            console.log(er);

        }

    })

    }
