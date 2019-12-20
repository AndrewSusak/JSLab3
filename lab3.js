function callz1(){
    document.getElementById('rd1').innerHTML = z1();
}
function callz2(){
    document.getElementById('rd2').innerHTML = z2();
}
function callz3(){
    document.getElementById('rd3').innerHTML = z3(Number( document.getElementById('daysAgo').value));
}
function callz4(){
    document.getElementById('rd4').innerHTML = z4(Number( document.getElementById('year').value),Number( document.getElementById('month').value));
}
function callz5(){
    document.getElementById('rd5').innerHTML = `${z5()} `;
}
function callz6(){
    document.getElementById('rd6').innerHTML = z6();
}
function callz7(){
    document.getElementById('rd7').innerHTML = z7();
}
function callz8(){
    document.getElementById('rd8').innerHTML = z8(z9(document.getElementById('date1').value));
}
function callz9(){
    document.getElementById('rd9').innerHTML = z9(document.getElementById('date2').value);
}
function callz10(){
    document.getElementById('rd10').innerHTML = z10(document.getElementById('lang').value);
}
