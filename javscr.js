var storage=0;
var key='unpressed';


function nine(){
    document.getElementById('screen').innerHTML += 9;
}

function eight(){
    document.getElementById('screen').innerHTML += 8;
}


function seven(){
    document.getElementById('screen').innerHTML += 7;
}

function six(){
    document.getElementById('screen').innerHTML += 6;
}

function five(){
    document.getElementById('screen').innerHTML += 5;
}

function four(){
    document.getElementById('screen').innerHTML += 4;
}

function three(){
    document.getElementById('screen').innerHTML += 3;
}
function two(){
    document.getElementById('screen').innerHTML += 2;
}
function one(){
    document.getElementById('screen').innerHTML += 1;
}
function zero(){
    document.getElementById('screen').innerHTML += 0;
}
function sum(){
     document.getElementById('screen').innerHTML+="+";
}
function minus(){
    document.getElementById('screen').innerHTML+="-";
}
function mult(){
    document.getElementById('screen').innerHTML+="x";
}
function divide(){
    document.getElementById('screen').innerHTML+="/";
}
function decimal(){
    document.getElementById('screen').innerHTML+=".";
}

function exponent(){
    document.getElementById('screen').innerHTML+="^";
}

function equal(){
   let words=document.getElementById('screen').innerHTML;
   for (let i = 0; i < words.length; i++) {
    let firstnum="";
    let secondnum="";
    if(words[i]=="+"){
        for (let j = 0; j < i; j++){
        firstnum+=words[j];
       }
       for (let k = i+1; k <words.length; k++){
        secondnum+=words[k];
       }
        document.getElementById('screen').innerHTML=parseFloat(firstnum)+parseFloat(secondnum) ;
    }
    else if(words[i]=="x"){
        for (let j = 0; j < i; j++){
        firstnum+=words[j];
       }
       for (let k = i+1; k <words.length; k++){
        secondnum+=words[k];
       }
        document.getElementById('screen').innerHTML=parseFloat(firstnum)*parseFloat(secondnum) ;
    }
    else if(words[i]=="-"){
        for (let j = 0; j < i; j++){
        firstnum+=words[j];
       }
       for (let k = i+1; k <words.length; k++){
        secondnum+=words[k];
       }
        document.getElementById('screen').innerHTML=parseFloat(firstnum)-parseFloat(secondnum) ;
    }
    else if(words[i]=="/"){
        for (let j = 0; j < i; j++){
        firstnum+=words[j];
       }
       for (let k = i+1; k <words.length; k++){
        secondnum+=words[k];
       }
        document.getElementById('screen').innerHTML=parseFloat(firstnum)/parseFloat(secondnum) ;
    }
    else if(words[i]=="^"){
        for (let j = 0; j < i; j++){
        firstnum+=words[j];
       }
       for (let k = i+1; k <words.length; k++){
        secondnum+=words[k];
       }
        document.getElementById('screen').innerHTML=parseFloat(firstnum)**parseFloat(secondnum) ;
    }
  }
  
}
function clean(){
    document.getElementById('screen').innerHTML = "";
}
