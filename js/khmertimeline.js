
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var currentPage = 1;
$(document).ready(function() {
    getArticles();
    getAllArticles();
})

$('#search').keyup(function(){
    searchArticle($(this).val())
})


function getArticles() {
    var content = '';
    $.ajax({
        url : 'http://www.api-ams.me/v1/api/articles?page=1&limit=8',
        method : 'GET',
        success : function(response) {
            
            for(res of response.DATA) {
                
                content += `
                <div class="col-md-4 col-sm-6 mb-5">
                <!-- Card Wider -->
                <div class="card card-cascade wider">
      
                  <!-- Card image -->
                  <div class="view view-cascade overlay">
                    <img class="card-img-top" src="${res.IMAGE}" alt="Card image cap">
                    <a>
                      <div class="mask rgba-white-slight"></div>
                    </a>
                  </div>
      
                  <!-- Card content -->
                  <div class="card-body card-body-cascade text-center">
      
                    <!-- Title -->
                    <h4 class="card-title"><strong>${res.TITLE}</strong></h4>
                    <!-- Subtitle -->
                    
                    <p class="card-text">${res.DESCRIPTION}</p>
      
                  </div>
      
                </div>
                <!-- Card Wider -->
              </div>`;
            }

            $('#entertainment').html(content)

        },
        error: function(error) {
            console.log(error)
        }
    })
}
{/* <h5 class="blue-text pb-2"><strong>${res.AUTHOR.NAME}</strong></h5>
                    <!-- Text --> */}

function getAllArticles(page, limitPerPage) {
    limitPerPage = this.limitPerPage;
    page = 1;
    getArticleList(page);
}

function getArticleList(page) {
    var content = '';
    var pagination = '';
    $.ajax({
        url : 'http://www.api-ams.me/v1/api/articles?page=' + page + '&limit=15',
        method : 'GET',
        success : function(response) {
            console.log(response.PAGINATION)
            pagination += `
            <li class="page-item">
                <a class="page-link" tabindex="-1" onclick="getArticleList(1)">First</a>
            </li>
            <div style="display: inline-flex">
            `;
            
            for(var p = 1; p<15; p++) {
             
                content += `
                <div class="row mx-0 mb-4">
                    <div class="col-sm-4">
                    
                       <a onclick="getArticle(${response.DATA[p].ID})">
                       <img class="w-100" src="${response.DATA[p].IMAGE}" alt="No Image">
                       </a> 
                       </div>
                    <div class="col-sm-8">  
                        <h2>${response.DATA[p].TITLE}</h2> 
                   
                        <p>${response.DATA[p].DESCRIPTION.substring(0,100)}...</p>
                    </div>
                </div>`;
            }
            for(var p = 1; p<response.PAGINATION.TOTAL_PAGES+1; p++) {
                pagination += `
                <li class="page-item page-item-list" onclick="clickPage(this)">
                    <a class="page-link" onclick="getArticleList(${p})">${p}</a>
                </li>
                `;
            }
            pagination += `</div>`;
            pagination += `
            <li class="page-item">
                <a class="page-link" onclick="getArticleList(${response.PAGINATION.TOTAL_PAGES})">Last</a>
            </li>
            `;

            $('#entertainment-list').html(content)
            $('#pagination').html(pagination)
            $('#page-pagination').html();

        },
        error: function(error) {
            console.log(error)
        }
    })
}

function getArticle(id) {
    var content = '';
    $.ajax({
        url : 'http://www.api-ams.me/v1/api/articles/' + id,
        method : 'GET',
        success : function(response) {
            console.log(response)
                content += `
                <div class="col-md-12">
                    <img class="mx-auto d-block mt-3 mb-3" src="${response.DATA.IMAGE}"  alt="img">
                </div>
                <div class="col-md-12">
                    <h1 style="text-align: center; font-weight: bold;">${response.DATA.TITLE}</h1>
                    <p>${response.DATA.DESCRIPTION}</p>
                </div>`;

            $('#entertainment-list').html(content)
            $('#page-pagination').empty();

        },
        error: function(error) {
            console.log(error)
        }
    })
}

function clickPage(li) {
    $('.page-item-list').removeClass('active');
    $(li).addClass('active')
}


function searchArticle(title){
    $.ajax({
        url: `http://api-ams.me/v1/api/articles?title=${title}&page=1&limit=15`,
        method: "GET",
        success: function(res){
            // (res.MESSAGE)
            getAllArticles();
        },
        error: function(er){
            console.log(er)
        }
    })
}



function register(){
        let name = document.getElementById('username').value ;
            let gender = document.getElementById('gender').value ;
            let age = document.getElementById('age').value ;
            let city = document.getElementById('city').value ;
           
            document.write(name);
        document.getElementById('usr').innerHTML =name;
        alert(name);
}