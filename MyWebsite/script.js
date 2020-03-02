function dich() {
    var a = document.getElementById("vietnammese");
    var b = document.getElementById("english");
    a.style.display = "block";
    b.style.display = "none";
}
function dich1() {
    var a = document.getElementById("vietnammese");
    var b = document.getElementById("english");
    a.style.display = "none";
    b.style.display = "block";
}
// thông tin
function myinfor(){
    var x=document.getElementById("information");
    var y= document.getElementById("favor");
    var z=document.getElementById("music");
    x.style.display="block";
    y.style.display="none";
    z.style.display="none";
}
function myfavor(){
    var x=document.getElementById("information");
    var y= document.getElementById("favor");
    var z=document.getElementById("music");
    x.style.display="none";
    y.style.display="block";
    z.style.display="none";
}
function mymusic(){
    var x=document.getElementById("information");
    var y= document.getElementById("favor");
    var z=document.getElementById("music");
    x.style.display="none";
    y.style.display="none";
    z.style.display="block";
}
function closeinfor(){
    var x=document.getElementById("information");
    var y= document.getElementById("favor");
    var z=document.getElementById("music");
    x.style.display="none";
    y.style.display="none";
    z.style.display="none";
   
}
function check1(){
    var a1= document.getElementById("search").value;
    if(a1=='Thông tin'){
        document.getElementById("information").style.display="block";
        document.getElementById("favor").style.display="none";
        document.getElementById("music").style.display="none";
    }
   else if(a1=='Sở thích'){
        document.getElementById("favor").style.display="block";
        document.getElementById("information").style.display="none";
        document.getElementById("music").style.display="none";
    }
   else if(a1=='Âm nhạc'){
        document.getElementById("music").style.display="block";
        document.getElementById("information").style.display="none";
        document.getElementById("favor").style.display="none";
    }
}
function openbar(){
    var a= document.getElementById("contentmenu");
    a.style.display="block";
}
function closebar(){
    var a= document.getElementById("contentmenu");
    a.style.display="none";
}