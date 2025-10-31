
alert('this site was updated on 2025')
// nav bar script codes
let opennav = document.getElementById('opennavbutton');
let closenav = document.getElementById('closenavbutton');
let navlinks = document.getElementById('navlinks');
opennav.onclick = function () {
  navlinks.style = 'display:block; width:100%;';
  opennav.style = 'display:none'
};
closenav.onclick = function () {
  navlinks.style = 'display:none; width:0%;';
  opennav.style = 'display:block'
}

// login form script codes
let intro = document.getElementById('intro');
let popup = document.getElementById('popup');
let start = document.getElementById('start');
let loginform = document.getElementById('loginform')
let home =document.getElementById('home');
start.onclick = function () {
  if (popup.style = 'display:none') {
    popup.style = 'display:block';
    loginform.style='display:block;'
    start.style='display:none;'
  }
}
home.onclick=function(){
  popup.style='display:none';
  loginform.style='display:none'
  navlinks.style = 'display:none; width:0%;';
   start.style='display:block;'
}


// name reistration
let firstname = document.getElementById('name');
let lastname = document.getElementById('lastname');
let name1 = document.getElementById('name1');
let lastname1 = document.getElementById('lastname1');
let enter = document.getElementById('interm');
let enteradvance = document.getElementById('advance')
let enterwords = document.getElementById('words')
let firsttest =document.getElementById('intermediattest');
let advancetest =document.getElementById('intermediattest1');
let wordstest =document.getElementById('intermediattest2');
let closetest = document.getElementById('closetest')
let closetest1 = document.getElementById('closetest1')
let closetest2 = document.getElementById('closetest2')

// intermediate test enter
enter.onclick = function () {
  lastname1.value = lastname.value;
  name1.value = firstname.value;
  if(firstname.value != '' && lastname.value !=''){
    firsttest.style='display:block'
     advancetest.style='display:none'
       wordstest.style='display:none'
  }
}
closetest.onclick = function(){
   firsttest.style='display:none'
}


// advance test enter
enteradvance.onclick = function () {
  lastname1.value = lastname.value;
  name1.value = firstname.value;
  if(firstname.value != '' && lastname.value !=''){
    advancetest.style='display:block'
      wordstest.style='display:none'
       firsttest.style='display:none'
  }
}
closetest1.onclick = function(){
   advancetest.style='display:none'
}


// words test enter
enterwords.onclick = function () {
  lastname1.value = lastname.value;
  name1.value = firstname.value;
  if(firstname.value != '' && lastname.value !=''){
    wordstest.style='display:block'
     advancetest.style='display:none'
      firsttest.style='display:none'
  }
}
closetest2.onclick = function(){
   wordstest.style='display:none'
}

