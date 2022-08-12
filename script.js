var div=document.createElement("div");
div.setAttribute("class","row");

var div=document.createElement("div");
div.setAttribute("class","col-md-4");

async function foo(){
    let res=await fetch("https://www.anapioficeandfire.com/api/books");
    let result=await res.json();
    console.log(result);
    for(var i=0;i<result.length;i++){
        var div=document.createElement("div");
        div.style.color="blue";
        div.style.fontSize="25px";
       
        div.innerHTML= `<div class="row">
         <div class="col-md-2">
         <div class="card" style="width: 27rem ;">
         <div class="card-body" style=background-color:azure>
        
          <h6 class="card-title">Book Name : ${result[i].name}</h6>
          <h6 class="card-title">ISBN Code : ${result[i].isbn}</h6>
          <h6 class="card-title">Pages : ${result[i].numberOfPages}</h6>
          <h6 class="card-title">Author Name :${result[i].authors}</h6>
          <h6 class="card-title">Published By : ${result[i].publisher}</h6>
          <h6 class="card-title">Released On : ${result[i].released}</h6>
          <h6 class="card-title">Characters : ${result[i].characters.slice(0,5)}</h6>
          </div>
          </div>
          </div>
          </div>`;
         div.append(pagination);
        document.body.append(div);
    }
    }
    foo();
    var pagination=document.createElement("div");
    pagination.style.textAlign="center";
    pagination.addEventListener("click",foo);
    pagination.innerHTML=`<div class="pagination">
    <a href="#">&laquo;</a>
    <a href="https://www.anapioficeandfire.com/api/books">1</a>
    <a class="active" href="https://www.anapioficeandfire.com/api/books">2</a>
    <a href="https://www.anapioficeandfire.com/api/books">3</a>
    <a href="https://www.anapioficeandfire.com/api/books">4</a>
    <a href="https://www.anapioficeandfire.com/api/books">5</a>
    <a href="#">&raquo;</a>
  </div>`;


