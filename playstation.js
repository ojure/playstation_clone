function load(a,b,c,d,e){
  let handlemain = document.getElementById("mainframe");
  let handle0 = document.getElementById("mainframecontent");
  let handle1 = document.getElementById("imgfc25");
  let handle2 = document.getElementById("title");
  let handle3 = document.getElementById("content");
  let handle4 = document.getElementById("content2");
  let handle5 = document.getElementById("btn"); 
 
  handle0. style.transform="translateY(-20px)" ;
handle0.style.transition = "all linear .8s";

  handle1.innerHTML = "<img src=pictures/eafc25white.png id=image1  >";
  handle2.innerHTML = "Last chance to pre-order";
handle3.innerHTML = "Get up to 7 days early access from September 20th,2024 by";
handle4.innerHTML = "pre-ordering EA Sports FC 25 Ultimate Edition today";
handle5.innerHTML ="<a href=preorder.html1>Pre-order now</a>";
}



window.addEventListener("load",load);




function frameaction(z,a,b,c,d,e){
    let handlemain = document.getElementById("mainframe");
    let handle0 = document.getElementById("mainframecontent");
    let handle1 = document.getElementById("imgfc25");
  let handle2 = document.getElementById("title");
  let handle3 = document.getElementById("content");
  let handle4 = document.getElementById("content2");
  let handle5 = document.getElementById("btn"); 
  handlemain.style.backgroundImage ="url(" + z +")";
    handle1.innerHTML =a ;
    handle2.innerHTML =b ;
    handle3.innerHTML =c;
    handle4.innerHTML =d ;
    handle5.innerHTML =e ;
   
    handlemain.style.transition= " .8s";
}


function fixed(){
    let f0= document.getElementById("block1");
    let f1 = document.getElementById("b2b3cover");
    let f4 =  document.getElementById("block4");
    let b2b3Height=f1.offsetHeight;
    let b0Height = f0.offsetHeight;
    let scroll=pageYOffset;
   
   if (scroll>= 50){
     f1.style.position = "fixed";
     //f1.style.position = "absolute";
     // f4.style.paddingTop ="130px"; 
     f1.style.zIndex =1;
      f1.style.top ="0px"
    }
   else if(scroll < b2b3Height){
    f1.style.position = "static";
   }
    
}

window.addEventListener("scroll",fixed);

function slideaction(a,b,c,d,e,f,g,h,i){
  let handle8 = document.getElementById("ps5games"); 
  let handle1 = document.getElementById("ps5text");
  let handle2 = document.getElementById("console");
  let handle3 = document.getElementById("accessoriesblock5");
  let handle4 = document.getElementById("playstationblue");
  let handle5 = document.getElementById("exp");
  let handle6 = document.getElementById("find"); 
  let handle7 = document.getElementById("buy"); 
  let handle9 = document.getElementById("slide2border"); 
  

  handle8.style.backgroundImage = "url(" + h + ")";
  /*handle9.style.border="solid 3px rgb(0, 100, 183)";*/

  handle1.innerHTML = a;
  handle2.innerHTML = b;
  handle3.innerHTML = c;
  handle4.innerHTML = d;
  handle5.innerHTML = e;
  handle6.innerHTML = f;
  handle7.innerHTML = g;
  handle8.innerHTML = h;
  handle9.innerHTML = i;


 /*if (handle9.style.border="solid"){
  handle9.style.border="none";
  handle10.style.border="solid 3px rgb(0, 100, 183)";
  */
 }

function loadblock5(a,b,c,d,e,f,g,h){
  let handle8 = document.getElementById("ps5games"); 
  
  let handle1 = document.getElementById("ps5text");
  let handle2 = document.getElementById("console");
  let handle3 = document.getElementById("accessoriesblock5");
  let handle4 = document.getElementById("playstationblue");
  let handle5 = document.getElementById("exp");
  let handle6 = document.getElementById("find"); 
  let handle7 = document.getElementById("buy"); 
  
  

  handle1.innerHTML = "Introducing the";
  handle2.innerHTML = " PS5 console and";
  handle3.innerHTML = "accessories";
  handle4.innerHTML = "PlayStation 5 Console";
  handle5.innerHTML = "Experience an all-new generation of incredible PlayStation games.",
  handle6.innerHTML = "Find out more";
  handle7.innerHTML = "Buy now";
  handle8.innerHTML = "<img src=pictures/ps5slimandpad.webp id=ps5image1 >";
  
}
window.addEventListener("load",loadblock5);



let handle1drop=document.getElementById('games');
let handle2drop=document.getElementById('gameps5dropcover');
let handleblock2 = document.getElementById('block2');
let handle3drop=document.getElementById('ps5');
let handle4drop=document.getElementById('ps5dropcover');
let handle5drop=document.getElementById('ps4dropcover');
let handle6drop=document.getElementById('servicesdropcover');
let handle7drop=document.getElementById('accessoriesdropcover');
let handle8drop=document.getElementById('newsdropcover');
let handle9drop=document.getElementById('storedropcover');
let handle10drop=document.getElementById('supportdropcover');
let handle11drop=document.getElementById('board1sooncover');
let handle12drop=document.getElementById('board2sooncover');
let handle13drop=document.querySelector('.board1cover');
let handle14drop=document.querySelector('.board2cover');
let handle15drop=document.getElementById('newrelease');
let handle16drop=document.getElementById('soon');
let handle17drop=document.getElementById('new');



function gamesdrop1(){
  handle2drop.classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.games')) {
    if (handle2drop.classList.contains('show')) {
      handle2drop.classList.remove('show');
     
     }
  }
  if(!e.target.matches('.ps5')){
    if(handle4drop.classList.contains('show2')){
      handle4drop.classList.remove('show2');
    }
  }
  if (!e.target.matches('.ps4')) {
    if (handle5drop.classList.contains('show3')) {
      handle5drop.classList.remove('show3');
     
     }
  }
  if (!e.target.matches('.services1')) {
    if (handle6drop.classList.contains('show4')) {
      handle6drop.classList.remove('show4');
     
     }
  }
  if (!e.target.matches('.accessories')) {
    if (handle7drop.classList.contains('show5')) {
      handle7drop.classList.remove('show5');
     
     }
  }
  if (!e.target.matches('.news')) {
    if (handle8drop.classList.contains('show6')) {
      handle8drop.classList.remove('show6');
     
     }
  }
  if (!e.target.matches('.store')) {
    if (handle9drop.classList.contains('show7')) {
      handle9drop.classList.remove('show7');
     
     }
  }
  if (!e.target.matches('.support')) {
    if (handle10drop.classList.contains('show8')) {
      handle10drop.classList.remove('show8');
     
     }
  }
}

function ps5drop1(){  
handle4drop.classList.toggle("show2");
}

function ps4drop(){
  handle5drop.classList.toggle("show3");
}
function servicedrop(){
  handle6drop.classList.toggle("show4");
}

function accessories(){
  handle7drop.classList.toggle("show5");
}
function news(){
  handle8drop.classList.toggle("show6");
}
function store(){
  handle9drop.classList.toggle("show7");
}
function support(){
  handle10drop.classList.toggle("show8");
}



function newrelease(){
  handle13drop.style.display="block";
  handle14drop.style.display="block";
  handle13drop.style.marginLeft="-398px";
  handle14drop.style.marginLeft="-398px";
  
}
  window.addEventListener("load",newrelease);


  function newrelease(){  
   
    if (handle13drop.style.display="block",handle14drop.style.display="block"){
      handle11drop.style.display="none";
      handle12drop.style.display="none";
      
      handle13drop.style.marginLeft="-398px";
      handle14drop.style.marginLeft="-398px";
      handle16drop.style.color="white";
      handle16drop.style.backgroundColor="rgb(17,16,16)";
      handle15drop.style.color="black";
      handle15drop.style.backgroundColor="rgb(255,255,255)";
      handle14drop.style.marginLeft="-398px";
      handle13drop.classList.toggle("trans");
      handle14drop.classList.toggle("trans");
  
    }
      
    
  }
  
  
  function soon(){ 
    if(handle11drop.style.display="block",handle12drop.style.display="block"){
      handle13drop.style.display="none";
      handle14drop.style.display="none";
      handle11drop.style.marginLeft="-521.9px";
        handle12drop.style.marginLeft="-521.9px";
        handle16drop.style.color="black";
        handle16drop.style.backgroundColor="rgb(255,255,255)";
        handle15drop.style.color="white";
        handle15drop.style.backgroundColor="rgb(17,16,16)";
        handle11drop.classList.add("trans");
        handle12drop.classList.add("trans");
    
    }
   
    }

    /*window.onload=function(){
      let list=document.getElementsByClassName("sonslide")[0];
      let last=list.lastElementChild;
      let button =document.getElementById("leftbuttoncover");
     
        button.onclick=function(){
          for (let i=0;i< list.lenght;i++){
        list.removeChild(last);
        list.insertBefore(last, list.firstElementChild);
          }

      }
      
      
      }
      */
     



function rightbutton(){
  let list=document.getElementsByClassName("sonslide")[0];
  let handle8 = document.getElementById("ps5games"); 
  let first=list.firstElementChild;
  
  list.removeChild(first);
  list.appendChild(first);

}

function leftbutton(){
  let list=document.getElementsByClassName("sonslide")[0];
  let handle8 = document.getElementById("ps5games"); 
  let last=list.lastElementChild;
  
  list.removeChild(last);
  list.insertBefore(last, list.firstElementChild);
}
window.onload=function border(){
  let handle1=document.getElementById("slide1border");
  handle1.style.border="solid 3px rgb(0, 100, 183)";
}
