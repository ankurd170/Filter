
var bakery=[{"type":"cake","spec":"vanilla","Price":"30","image":"/xampp/htdocs/filter/img/vanillacake.jpg"},{"type":"cake","spec":"Chocolate","Price":"80","image":"/xampp/htdocs/filter/img/Chocolate-Cake.jpg"},{"type":"cake","spec":"Lemon","Price":"25","image":"/xampp/htdocs/filter/img/LemonCake.jpg"},
{"type":"cake","spec":"pound cake","Price":"40","image":"/xampp/htdocs/filter/img/Pound-Cake.jpg"},{"type":"cake","spec":"Strawberry","Price":"15","image":"/xampp/htdocs/filter/img/strawberrycake.jpg"},{"type":"cake","spec":"Black forest","Price":"30","image":"/xampp/htdocs/filter/img/blackforestcake.jpg"},
{"type":"pastry","spec":"pineapple","Price":"5","image":"/xampp/htdocs/filter/img/pineapplepastry.jpg"},{"type":"pastry","spec":"chocolate","Price":"3","image":"/xampp/htdocs/filter/img/chocolate-pastry.jpg"},{"type":"pastry","spec":"chocochip","Price":"2","image":"/xampp/htdocs/filter/img/CHOCOLATE-CHIPpastry.jpg"},
{"type":"doughnut","spec":"choco-glazed","Price":"7","image":"/xampp/htdocs/filter/img/Chocolate-donut.jpg"},{"type":"doughnut","spec":"jelly","Price":"9","image":"/xampp/htdocs/filter/img/Jelly-Donut.jpg"},{"type":"doughnut","spec":"glazed","Price":"8","image":"/xampp/htdocs/filter/img/glazeddonut.jpg"},
{"type":"doughnut","spec":"strawberry-cream","Price":"4","image":"/xampp/htdocs/filter/img/strawberrycreamdonut.jpg"},{"type":"muffin","spec":"chocolate","Price":"2","image":"/xampp/htdocs/filter/img/Chocolate-Muffins.jpg"},{"type":"muffin","spec":"blueberry","Price":"3","image":"/xampp/htdocs/filter/img/blueberry-muffin.jpg"},
{"type":"muffin","spec":"chocochip","Price":"4","image":"/xampp/htdocs/filter/img/Chocolate-Chip-Muffin.jpg"},{"type":"muffin","spec":"Burst-o-Lemon","Price":"6","image":"/xampp/htdocs/filter/img/blackforestcake.jpg"},{"type":"cookie","spec":"choco-chip","Price":"10","image":"/xampp/htdocs/filter/img/chocolate-chip-cookie.jpg"},
{"type":"cookie","spec":"peanut butter","Price":"11","image":"/xampp/htdocs/filter/img/peanut-butter-cookies.jpg"},{"type":"cookie","spec":"ice-cream sandwich","Price":"14","image":"/xampp/htdocs/filter/img/icecreamsandwich.jpg"},{"type":"cookie","spec":"caramel stuffed choco","Price":"16","image":"/xampp/htdocs/filter/img/stuffedcookie.jpg"}];


var d=[],fil=[];


function displayall()
{

    for (var i = 0; i < bakery.length; i++) 
    {
      d[i]=document.createElement("div");
      d[i].className="card";
      d[i].width="80px";
      d[i].height="50px";
      d[i].style.margin="20px";  
      d[i].style.backgroundColor="goldenrod";
      d[i].style.color="white";
      d[i].style.padding="5px";
      d[i].style.fontSize="10px";
      d[i].innerHTML="<img src="+bakery[i].image+" style='height:200px';'width:50px'></img><p ><b>Type: </b> "+bakery[i].type+"<br><b>Specification: </b> "+bakery[i].spec+"<br><b>Price: </b> $"+bakery[i].Price+"</p><button class='btn btn-primary'>Buy now</button>";
      d[i].style.opacity=0.75;
            



      if(i%3==0)
      document.getElementById("bdy1").appendChild(d[i]);
    
      if(i%3==1)
      document.getElementById("bdy2").appendChild(d[i]);

      if(i%3==2)
      document.getElementById("bdy3").appendChild(d[i]);
      
      console.log(bakery[i].type);
      console.log(bakery[i].type.includes("cake"));
    }

}



function clearsearch()
{
  for (var i = 0; i < fil.length; i++) 
  fil[i].remove();

  document.getElementById("srch").value=""; 
  document.getElementById("price1").checked=false;
  document.getElementById("price2").checked=false;
  document.getElementById("price3").checked=false;
  document.getElementById("price4").checked=false;
  document.getElementById("bar").style.display="none";
  document.getElementById("bt2").disabled=false;
  displayall();
}



function filternow()
{
var req=document.getElementById("srch").value;

console.log(req);

var j=0;

for (var i = 0; i < bakery.length; i++) 
d[i].remove();

if(document.getElementById("bt2").innerHTML=="search again")
{
  filternxt();
}


for (var i = 0; i < bakery.length; i++) 
    {
    if(document.getElementById("price1").checked==false && document.getElementById("price2").checked==false && document.getElementById("price3").checked==false && document.getElementById("price4").checked==false)
     { 
       if(bakery[i].type.includes(req)) 
      {
        createnew(j,i);
        j++;
      } 
      else if(bakery[i].spec.includes(req)) 
        {
        createnew(j,i);
        j++;
        }
     } 
     else if (document.getElementById("price1").checked==true)
     {
      if(bakery[i].type.includes(req) && bakery[i].Price<5) 
      {
        createnew(j,i);
        j++;
      } 
      else if(bakery[i].spec.includes(req) && bakery[i].Price<5) 
        {
        createnew(j,i);
        j++;
        }
     }
     else if (document.getElementById("price2").checked==true)
     {
      if(bakery[i].type.includes(req) && bakery[i].Price>5 && bakery[i].Price<10) 
      {
        createnew(j,i);
        j++;
      } 
      else if(bakery[i].spec.includes(req) && bakery[i].Price>5 && bakery[i].Price<10) 
        {
        createnew(j,i);
        j++;
        }
     }      
     else if (document.getElementById("price3").checked==true)
     {
      if(bakery[i].type.includes(req) && bakery[i].Price>10 && bakery[i].Price<20) 
      {
        createnew(j,i);
        j++;
      } 
      else if(bakery[i].spec.includes(req) && bakery[i].Price>10 && bakery[i].Price<20) 
        {
        createnew(j,i);
        j++;
        }
     }
     else if (document.getElementById("price4").checked==true)
     {
      if(bakery[i].type.includes(req) && bakery[i].Price>20) 
      {
        createnew(j,i);
        j++;
      } 
      else if(bakery[i].spec.includes(req) && bakery[i].Price>20) 
        {
        createnew(j,i);
        j++;
        }
     }      
  }
  document.getElementById("bt2").innerHTML="search again";
  document.getElementById("bt2").disabled=true;  
}

function filternxt()
{
  for (var i = 0; i < fil.length; i++) 
  fil[i].remove();
   
}


function createnew(index,i)
{
  
  fil[index]=document.createElement("div");
  fil[index].className="card";
  fil[index].width="150px";
  fil[index].height="400px";
  fil[index].style.margin="20px";
  fil[index].style.padding="20px";
  fil[index].style.fontSize="25px";
  fil[index].style.backgroundColor="goldenrod";
  fil[index].innerHTML="<img src="+bakery[i].image+" style='height:200px';'width:50px'></img><p class='card-body'><b>Type:</b>"+bakery[i].type+"<br><b>Specification:</b>"+bakery[i].spec+"<br><b>Price:</b> $"+bakery[i].Price+"</p><button class='btn btn-primary'>Buy now</button>";
  fil[index].style.opacity=0.75;
  fil[index].id=bakery[i].Price;
  
  if(index<3)
  document.getElementById("bdy1").appendChild(fil[index]);

  if(index>=3 && index<6)
  document.getElementById("bdy2").appendChild(fil[index]);

  if(index>=6)
  document.getElementById("bdy3").appendChild(fil[index]);
}


function pricelist()
{

  document.getElementById("bar").style.display="block";
}





