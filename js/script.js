/*
Script for: Space Dose
Author: Prateek Chaubey
Author URI: https://h4c-k3r.github.io/
Version: 1.0
*/
/*
|----------------------------------------------------------------------------
| Made by PRATEEK CHAUBEY
| MIT LICENSE
|----------------------------------------------------------------------------
*/
/*---------------------------------
	© Prateek Chaubey 2018-present
-----------------------------------*/


function ope(){
document.getElementById("sidenav").style.transform="scale(1)";
document.getElementById("nav").style.transform="scale(5)";
}
function clos(){
document.getElementById("sidenav").style.transform="scale(0)";
document.getElementById("nav").style.transform="scale(1)";
}
function goup() {
	document.querySelector('#up').scrollIntoView({
		behavior: 'smooth'
	});
};

$(window).on("scroll", function() {
if($(window).scrollTop()) {
$('#topt').css({"display":"block"});
}
else {
$('#topt').css({"display":"none"});
}
});
function sinn(){
$('#signup').css({"display":"block"});
$('#login').css({"display":"none"});
$('#loginpg').css({"height":"750px"});
$('#loginpg').css({"transform":"rotateY(180deg)"});
}
function log(){
$('#signup').css({"display":"none"});
$('#login').css({"display":"block"});
$('#loginpg').css({"transform":"rotateY(0deg)"});
$('#loginpg').css({"height":"500px"});
}
function login(){
var y=document.getElementById("usernam").value;
if(y.length>1){
localStorage.setItem("username",y);
var x=localStorage.getItem("username");
document.getElementById("logagin").value="Login Again as "+x;
}
//window.location.href="about.html?n=PrateekChaubey";
}
function signin(){
var y=document.getElementById("usnew").value;
localStorage.setItem("username",y);
var x=localStorage.getItem("username");
document.getElementById("logagin").value="Login Again as "+x;
//window.location.href="about.html?n=PrateekChaubey";
}
function loginagi(){
var yt=document.getElementById("logagin").value;
var ytm=yt.replace("Login Again as","")
document.getElementById("logagin").value="Login Again as "+ytm;
window.location.href="about.html?n=PrateekChaubey";
}


setTimeout(
function(){
var xt=localStorage.getItem("username");
if(xt!==null){
document.getElementById("logagin").value="Login Again as "+xt;
}
else{
document.getElementById("logagin").value="";
}
}
,05);
function searchh(){
var textt=$("#ser").val();
var texttt=$("#serh").val();
if(textt!=="" || texttt!==""){

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

window.location.href="https://nasasearch.nasa.gov/search?query="+textt+"&affiliate=nasa&utf8=✓";
}
else{
window.location.href="https://nasasearch.nasa.gov/search?query="+texttt+"&affiliate=nasa&utf8=✓";
}
}
}
function searchhh(){
var txtt=$(".serrt").val();
if(txtt!==""){
window.location.href="https://nasasearch.nasa.gov/search?query="+txtt+"&affiliate=nasa&utf8=✓";
}
}
function openvid(v){
document.getElementById("video").style.display="none";
document.getElementById("controls").style.display="none";
var n=document.getElementById("vidd");
n.style.display="block";
n.src=v;
document.getElementById("video").pause();
}
