
function check(){
    var x =parseFloat(document.getElementById('mebleg').value);
    var y =parseFloat(document.getElementById('muddet').value);
    var z =parseFloat(document.getElementById('faiz').value);

    if(x>= 100 && x <= 100000 && y>=3 && y <=48 && z<=20 && z>=16){
        var faiz = (y/12)*z
        var count = x+((x/100)*faiz)
        var mounth = count / y

        document.getElementById('count').innerHTML = count;
        document.getElementById('mounth').innerHTML = mounth.toFixed(2);
    }  
    else{
        alert('Zehmet olmasa duzgun melumat daxil edin');
    }

}