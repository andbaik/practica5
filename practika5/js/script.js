'use strict';
function buttonClick1(){
    let elem1 = document.getElementById('click1');
    elem1.innerHTML = 'Ку-ку, а я <b>жирный!</b>';
}
function buttonClick2(){
    let elem2 = document.getElementById('click2');
    elem2.outerHTML = '<h3>'+ 'Абзац превратился в h3' + '</h3>';
}
function buttonClick3(){
    let elem3 = document.getElementById('click3');
    elem3.outerHTML = '<h3>'+ elem3.innerHTML + '</h3>';
}
function buttonClick4(){
    let el1 = document.getElementById('el1').value;
    let el2 = document.getElementById('el2').value;
    let elSumm = Number(el1) + Number(el2);
    let summ = document.getElementById('solve4');
    summ.innerHTML = elSumm;
}
function buttonClick5(){
    let elements = document.querySelectorAll('.unit5 > p')
    console.log (elements);
    for (var i=0; i<elements.length;i++){
        elements[i].innerHTML = i;
    }
}